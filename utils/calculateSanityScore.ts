export const calculateSanityScore = (goodDeeds: number, completedTasks: number) => {
  // zadnie ma wage 5
  // dobry uczynek waga 2

  // 100% - 3 zadania, 3 dobre uczynki = waga 15 + 6 = 21
  // 100 / 20 = 1 waga = 5%

  const goodDeedsPercent = goodDeeds * 2 * 5; // 30
  const completedTasksPercent = completedTasks * 5 * 5; //75
  const result = goodDeedsPercent + completedTasksPercent;

  return result > 100 ? 100 : result;
};
