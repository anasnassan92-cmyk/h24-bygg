import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/admin/login")({
  ssr: false,
  component: AdminLogin,
});

function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) navigate({ to: "/admin" });
    });
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) {
      setError("Fel e-post eller lösenord.");
      return;
    }
    navigate({ to: "/admin" });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-charcoal px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm rounded-xl bg-white/5 p-8 backdrop-blur"
      >
        <h1 className="mb-1 text-center font-display text-2xl font-800 uppercase text-white">
          Admin
        </h1>
        <p className="mb-6 text-center font-body text-sm text-white/60">
          Logga in för att redigera webbplatsen
        </p>
        {error && (
          <p className="mb-4 rounded-md bg-destructive/20 px-3 py-2 text-center text-sm text-red-300">
            {error}
          </p>
        )}
        <div className="grid gap-4">
          <input
            type="email"
            placeholder="E-post"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="rounded-md border border-white/15 bg-white/10 px-4 py-3 font-body text-white placeholder:text-white/50 focus:border-primary focus:outline-none"
          />
          <input
            type="password"
            placeholder="Lösenord"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="rounded-md border border-white/15 bg-white/10 px-4 py-3 font-body text-white placeholder:text-white/50 focus:border-primary focus:outline-none"
          />
          <button
            type="submit"
            disabled={loading}
            className="rounded-md bg-primary px-6 py-3.5 font-700 text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
          >
            {loading ? "Loggar in…" : "Logga in"}
          </button>
        </div>
      </form>
    </div>
  );
}
