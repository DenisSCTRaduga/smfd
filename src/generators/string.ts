import { random } from "../core/random";
import { applyPattern } from "../utils/pattern";

export const string = () => ({
  alpha(length = 10): string {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    return Array.from({ length }, () =>
      chars[random.int(0, chars.length - 1)]
    ).join("");
  },

  numeric(length = 10): string {
    return Array.from({ length }, () =>
      random.int(0, 9).toString()
    ).join("");
  },

  alphanumeric(length = 10): string {
    const chars =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    return Array.from({ length }, () =>
      chars[random.int(0, chars.length - 1)]
    ).join("");
  },

  nanoId(length = 21): string {
    const chars =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_";

    return Array.from({ length }, () =>
      chars[random.int(0, chars.length - 1)]
    ).join("");
  },

  byPattern(pattern: string): string {
    return applyPattern(pattern);
  },

  slug(words: string | string[]): string {
    const input = Array.isArray(words) ? words.join(" ") : words;

    return input
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-");
  },

  hex(length = 6): string {
    const chars = "abcdef0123456789";

    return Array.from({ length }, () =>
      chars[random.int(0, chars.length - 1)]
    ).join("");
  },
});