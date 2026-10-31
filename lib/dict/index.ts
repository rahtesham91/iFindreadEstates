import { en, type Dict } from "./en";
import { ar } from "./ar";
import type { Lang } from "@/lib/i18n";

export type { Dict };
export const getDict = (lang: Lang): Dict => (lang === "ar" ? ar : en);

// A value ending in "." (e.g. "Dario C.") must not produce ".." when the template adds its own full stop.
export const fill = (s: string, vars: Record<string, string | number>) =>
  s.replace(/\{(\w+)\}(\.?)/g, (_, k, dot) => {
    const v = String(vars[k] ?? `{${k}}`);
    return dot && v.endsWith(".") ? v : v + dot;
  });
