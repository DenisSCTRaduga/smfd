export const finance = () => ({
  amount: (min = 0, max = 10000, decimals = 2) => {
    const value = Math.random() * (max - min) + min;
    return Number(value.toFixed(decimals));
  },
});