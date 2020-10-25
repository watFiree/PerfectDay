export const calculateSleepScore = (sleepTime: number): number => {
  if (sleepTime > 16) return 0;
  if (sleepTime > 8) return (8 - (sleepTime % 8)) * 12.5;
  return sleepTime * 12.5;
};
