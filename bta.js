function betterThanAverage(classPoints, yourPoints) {
 
  const totalPoints = classPoints.reduce((sum, score) => sum + score, 0);

  
  const averageScore = totalPoints / classPoints.length;

  
  const totalPointsWithUser = totalPoints + yourPoints;

 
  const newAverageScore = totalPointsWithUser / (classPoints.length + 1);

  
  return yourPoints > newAverageScore;
}
