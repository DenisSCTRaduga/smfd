import type { LocaleSchema } from "./types";
import * as ru from "./ru-RU";

export const localeList = {
  "ru-RU": ru.locale,
} satisfies Record<string, LocaleSchema>;

export type LocaleKey = keyof typeof localeList;
export type LocaleData = (typeof localeList)[LocaleKey];