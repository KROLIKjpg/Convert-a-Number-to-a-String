function mazeRunner(maze, directions) {

  let [x, y] = findStart(maze);

 
  for (let i = 0; i < directions.length; i++) {
    const dir = directions[i];

    
    switch (dir) {
      case 'N':
        y--;
        break;
      case 'S':
        y++;
        break;
      case 'E':
        x++;
        break;
      case 'W':
        x--;
        break;
    }

    
    if (
      x < 0 || x >= maze[0].length ||
      y < 0 || y >= maze.length ||
      maze[y][x] === 1
    ) {
      return 'Dead';
    }

    
    if (maze[y][x] === 3) {
      return 'Finish';
    }
  }

  
  return 'Lost';
}

function findStart(maze) {
  for (let y = 0; y < maze.length; y++) {
    for (let x = 0; x < maze[y].length; x++) {
      if (maze[y][x] === 2) {
        return [x, y];
      }
    }
  }
  return null;
}
