import { supabase } from "@/integrations/supabase/client";

/** ~100 years in seconds — effectively a permanent signed URL. */
const LONG_EXPIRY = 3153600000;

/** Immutably set a dot-path value on an object. */
export function setPath<T extends Record<string, unknown>>(
  obj: T,
  path: string,
  value: unknown,
): T {
  const keys = path.split(".");
  const root: Record<string, unknown> = { ...obj };
  let cur = root;
  for (let i = 0; i < keys.length - 1; i++) {
    const k = keys[i];
    const existing = cur[k];
    cur[k] =
      existing && typeof existing === "object" && !Array.isArray(existing)
        ? { ...(existing as Record<string, unknown>) }
        : {};
    cur = cur[k] as Record<string, unknown>;
  }
  cur[keys[keys.length - 1]] = value;
  return root as T;
}

/** Upload a media file to the private bucket and return a long-lived signed URL. */
export async function uploadMedia(file: File): Promise<string> {
  const ext = file.name.split(".").pop() || "bin";
  const key = `uploads/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
  const { error: upErr } = await supabase.storage
    .from("site-media")
    .upload(key, file, { cacheControl: "31536000", upsert: false });
  if (upErr) throw upErr;
  const { data, error } = await supabase.storage
    .from("site-media")
    .createSignedUrl(key, LONG_EXPIRY);
  if (error || !data?.signedUrl) throw error ?? new Error("Kunde inte skapa länk");
  return data.signedUrl;
}
