export const calculateSportScore = (kcalBurnt: number, kcalEaten: number) => {
  if (kcalBurnt === 0 && kcalEaten === 0) return 0;
  const kcalToBurn = kcalEaten / 4;
  const result = Math.floor((kcalBurnt / kcalToBurn) * 100);
  return result > 100 ? 100 : result;
};
