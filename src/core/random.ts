export const random = {
  int(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  float(min: number, max: number, precision?: number) {
    const value = Math.random() * (max - min) + min;

    if (precision === undefined) {
      return value;
    }

    const factor = 10 ** precision;
    return Math.round(value * factor) / factor;
  },

  pick<T extends string | any[]>(
    arr: T
  ): T extends string ? string : T[number] {
    return arr[Math.floor(Math.random() * arr.length)] as any;
  }
};