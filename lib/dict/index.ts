import { en, type Dict } from "./en";
import { ar } from "./ar";
import type { Lang } from "@/lib/i18n";

export type { Dict };
export const getDict = (lang: Lang): Dict => (lang === "ar" ? ar : en);

export const fill = (s: string, vars: Record<string, string | number>) =>
  s.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? `{${k}}`));
