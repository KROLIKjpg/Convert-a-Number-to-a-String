function mazeRunner(maze, directions) {
  // Find the starting position
  let [x, y] = findStart(maze);

  // Loop through the directions
  for (let i = 0; i < directions.length; i++) {
    const dir = directions[i];

    // Move in the given direction
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

    // Check if the new position is within the maze and is not a wall
    if (
      x < 0 || x >= maze[0].length ||
      y < 0 || y >= maze.length ||
      maze[y][x] === 1
    ) {
      return 'Dead';
    }

    // Check if we've reached the finish point
    if (maze[y][x] === 3) {
      return 'Finish';
    }
  }

  // If we've used all the moves and haven't reached the finish, return 'Lost'
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