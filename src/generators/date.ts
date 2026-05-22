export const date = () => ({
  any: (from?: Date, to?: Date) => {
    const start = from?.getTime() ?? new Date(2000, 0, 1).getTime();
    const end = to?.getTime() ?? Date.now();

    return new Date(start + Math.random() * (end - start));
  },

  recent(days = 30) {
    const now = Date.now();
    return new Date(now - Math.random() * 1000 * 60 * 60 * 24 * days);
  }
});