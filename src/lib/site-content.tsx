import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import { supabase } from "@/integrations/supabase/client";

export const CONTENT_ID = "main";

type ContentData = Record<string, unknown>;

interface SiteContentValue {
  data: ContentData;
  loading: boolean;
  /** Read a dot-path value, falling back to the provided default. */
  get: (path: string, fallback?: string) => string;
  refresh: () => Promise<void>;
}

const SiteContentContext = createContext<SiteContentValue | null>(null);

function readPath(obj: ContentData, path: string): unknown {
  return path
    .split(".")
    .reduce<unknown>((acc, key) => {
      if (acc && typeof acc === "object" && key in (acc as object)) {
        return (acc as Record<string, unknown>)[key];
      }
      return undefined;
    }, obj);
}

export function SiteContentProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<ContentData>({});
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async () => {
    const { data: row } = await supabase
      .from("site_content")
      .select("data")
      .eq("id", CONTENT_ID)
      .maybeSingle();
    if (row?.data && typeof row.data === "object") {
      setData(row.data as ContentData);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const get = useCallback(
    (path: string, fallback = "") => {
      const v = readPath(data, path);
      if (v === undefined || v === null || v === "") return fallback;
      return String(v);
    },
    [data],
  );

  return (
    <SiteContentContext.Provider value={{ data, loading, get, refresh }}>
      {children}
    </SiteContentContext.Provider>
  );
}

export function useSiteContent(): SiteContentValue {
  const ctx = useContext(SiteContentContext);
  if (!ctx) {
    // Safe fallback so components can be used outside the provider (e.g. tests).
    return {
      data: {},
      loading: false,
      get: (_p, fallback = "") => fallback,
      refresh: async () => {},
    };
  }
  return ctx;
}
