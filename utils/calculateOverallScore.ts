export const calculateOverallScore = (
  sleepScore: number,
  foodScore: number,
  sanityScore: number,
  sportScore: number
) => {
  // sen to 40% ogolnego
  // jedzenie to 25% ogolnego
  // sanity to 25% ogolnego
  // sport tot 10% ogolnego

  const overallSleep = Math.floor((sleepScore * 40) / 100);
  const overallFood = Math.floor((foodScore * 25) / 100);
  const overallSanity = Math.floor((sanityScore * 25) / 100);
  const overallSport = Math.floor((sportScore * 10) / 100);
  return overallFood + overallSanity + overallSport + overallSleep;
};
