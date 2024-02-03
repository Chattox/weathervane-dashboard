export const round = (n: number, d: number): number => {
  const precis = Math.pow(10, d);
  return Math.round(n * precis) / precis;
};
