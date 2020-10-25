export const calculateFoodScore = (kcalEaten: number, kcalGoal: number): number => {
  if (kcalEaten === 0 && kcalGoal === 0) return 0;
  if (kcalEaten > 2 * kcalGoal) return 0;
  if (kcalEaten > kcalGoal) return Math.floor((kcalGoal - (kcalEaten % kcalGoal)) / kcalGoal);
  return Math.floor((kcalEaten / kcalGoal) * 100);
};
