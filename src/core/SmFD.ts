import { localeList, LocaleKey, LocaleData } from "../locale";
import { SmFDOptions } from "./types";

export class SmFD {
  readonly locale: LocaleData;
  private readonly delayConfig?: SmFDOptions["delay"];

  constructor(locale: LocaleKey, options?: SmFDOptions) {
    this.locale = localeList[locale];
    this.delayConfig = options?.delay;
  }

  private resolveDelay(): number {
    if (!this.delayConfig) return 0;

    if (typeof this.delayConfig === "number") {
      return this.delayConfig;
    }

    const { min, max } = this.delayConfig;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  public sleep(ms?: number): Promise<void> {
    const timeout = ms ?? this.resolveDelay();
    return new Promise((resolve) => setTimeout(resolve, timeout));
  }

  public async async<T>(factory: () => T, delay?: number): Promise<T> {
    await this.sleep(delay);
    return factory();
  }

  public async asyncItems<T>(
    count: number,
    factory: () => T,
    delay?: number
  ): Promise<T[]> {
    await this.sleep(delay);
    return this.repeat(count, factory);
  }

  public async fetch<T>(
    factory: () => T,
    options?: { delay?: number; errorRate?: number }
  ): Promise<T> {
    const delay = options?.delay;

    await this.sleep(delay);

    if (options?.errorRate) {
      const chance = Math.random();
      if (chance < options.errorRate) {
        throw new Error("Mock API error");
      }
    }

    return factory();
  }

  public repeat<T>(count: number, factory: () => T): T[] {
    return Array.from({ length: count }, factory);
  }
}