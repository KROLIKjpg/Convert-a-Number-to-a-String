function betterThanAverage(classPoints, yourPoints) {
  // Calculate the sum of all the class points
  const totalPoints = classPoints.reduce((sum, score) => sum + score, 0);

  // Calculate the average score of the class
  const averageScore = totalPoints / classPoints.length;

  // Calculate the total points including the user's score
  const totalPointsWithUser = totalPoints + yourPoints;

  // Calculate the new average score including the user's score
  const newAverageScore = totalPointsWithUser / (classPoints.length + 1);

  // Compare the user's score to the new average score
  return yourPoints > newAverageScore;
}