import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { adminSections, type AdminField } from "@/lib/admin-fields";
import { setPath, uploadMedia } from "@/lib/admin-utils";
import { CONTENT_ID } from "@/lib/site-content";

export const Route = createFileRoute("/admin/")({
  ssr: false,
  component: AdminDashboard,
});

type Doc = Record<string, unknown>;

function readPath(obj: Doc, path: string): string {
  const v = path.split(".").reduce<unknown>((acc, key) => {
    if (acc && typeof acc === "object" && key in (acc as object)) {
      return (acc as Record<string, unknown>)[key];
    }
    return undefined;
  }, obj);
  if (v === undefined || v === null) return "";
  return String(v);
}

function AdminDashboard() {
  const navigate = useNavigate();
  const [ready, setReady] = useState(false);
  const [doc, setDoc] = useState<Doc>({});
  const [active, setActive] = useState(adminSections[0].id);
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState("");
  const [uploading, setUploading] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const { data: sess } = await supabase.auth.getSession();
      if (!sess.session) {
        navigate({ to: "/admin/login" });
        return;
      }
      const { data: row } = await supabase
        .from("site_content")
        .select("data")
        .eq("id", CONTENT_ID)
        .maybeSingle();
      if (row?.data && typeof row.data === "object") setDoc(row.data as Doc);
      setReady(true);
    })();
  }, [navigate]);

  const update = (path: string, value: unknown) => {
    setDoc((d) => setPath(d, path, value));
    setStatus("");
  };

  const onUpload = async (field: AdminField, file: File) => {
    setUploading(field.path);
    setStatus("");
    try {
      const url = await uploadMedia(file);
      update(field.path, url);
      setStatus("Fil uppladdad — kom ihåg att spara.");
    } catch {
      setStatus("Kunde inte ladda upp filen.");
    } finally {
      setUploading(null);
    }
  };

  const save = async () => {
    setSaving(true);
    setStatus("");
    const { error } = await supabase
      .from("site_content")
      .update({ data: doc as never })
      .eq("id", CONTENT_ID);

    setSaving(false);
    setStatus(error ? "Fel vid sparande: " + error.message : "Sparat! Ändringarna är publicerade.");
  };

  const logout = async () => {
    await supabase.auth.signOut();
    navigate({ to: "/admin/login" });
  };

  if (!ready) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background text-muted-foreground">
        Laddar…
      </div>
    );
  }

  const section = adminSections.find((s) => s.id === active)!;

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-20 flex items-center justify-between gap-4 border-b border-border bg-card px-4 py-3 md:px-6">
        <h1 className="font-display text-lg font-800 uppercase text-charcoal">H24 Admin</h1>
        <div className="flex items-center gap-2">
          <a
            href="/"
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-border px-3 py-2 text-sm font-700 text-charcoal hover:bg-muted"
          >
            Visa sajt
          </a>
          <button
            onClick={save}
            disabled={saving}
            className="rounded-md bg-primary px-4 py-2 text-sm font-700 text-primary-foreground hover:opacity-90 disabled:opacity-60"
          >
            {saving ? "Sparar…" : "Spara ändringar"}
          </button>
          <button
            onClick={logout}
            className="rounded-md border border-border px-3 py-2 text-sm font-700 text-charcoal hover:bg-muted"
          >
            Logga ut
          </button>
        </div>
      </header>

      {status && (
        <div className="border-b border-border bg-muted px-4 py-2 text-center text-sm text-charcoal md:px-6">
          {status}
        </div>
      )}

      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-6 md:grid-cols-[220px_1fr] md:px-6">
        <nav className="flex flex-row flex-wrap gap-2 md:flex-col">
          {adminSections.map((s) => (
            <button
              key={s.id}
              onClick={() => setActive(s.id)}
              className={`rounded-md px-3 py-2 text-left text-sm font-600 transition-colors ${
                active === s.id
                  ? "bg-primary text-primary-foreground"
                  : "text-charcoal hover:bg-muted"
              }`}
            >
              {s.title}
            </button>
          ))}
        </nav>

        <div className="space-y-5">
          <h2 className="text-xl font-800 uppercase text-charcoal">{section.title}</h2>
          {section.fields.map((f) => {
            const value = readPath(doc, f.path) || f.fallback || "";
            return (
              <div key={f.path} className="rounded-lg border border-border bg-card p-4">
                <label className="mb-2 block text-sm font-700 text-charcoal">{f.label}</label>

                {f.type === "text" && (
                  <input
                    value={value}
                    onChange={(e) => update(f.path, e.target.value)}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none"
                  />
                )}

                {f.type === "textarea" && (
                  <textarea
                    value={value}
                    rows={4}
                    onChange={(e) => update(f.path, e.target.value)}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none"
                  />
                )}

                {(f.type === "image" || f.type === "video") && (
                  <div className="space-y-3">
                    {value &&
                      (f.type === "image" ? (
                        <img src={value} alt={f.label} className="max-h-40 rounded-md border border-border object-contain" />
                      ) : (
                        <video src={value} controls className="max-h-40 rounded-md border border-border" />
                      ))}
                    <input
                      type="file"
                      accept={f.type === "image" ? "image/*" : "video/*"}
                      disabled={uploading === f.path}
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) onUpload(f, file);
                      }}
                      className="block w-full text-sm text-muted-foreground file:mr-3 file:rounded-md file:border-0 file:bg-primary file:px-4 file:py-2 file:text-sm file:font-700 file:text-primary-foreground"
                    />
                    {uploading === f.path && (
                      <p className="text-xs text-muted-foreground">Laddar upp…</p>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
