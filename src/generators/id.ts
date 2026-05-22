import { random } from "../core/random";

export const id = () => ({
  uuid(): string {
    return crypto.randomUUID();
  },

  publicId(length = 10): string {
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

  hex(length = 24): string {
    const chars = "abcdef0123456789";

    return Array.from({ length }, () =>
      chars[random.int(0, chars.length - 1)]
    ).join("");
  },

  objectId(): string {
    const timestamp = Math.floor(Date.now() / 1000).toString(16);
    const randomPart = this.hex(16);

    return timestamp + randomPart;
  },

  ulid(): string {
    const time = Date.now().toString(36).padStart(10, "0");
    const rand = this.publicId(16);

    return (time + rand).toUpperCase();
  },
});