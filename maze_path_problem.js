const solution = (maze, startRow, startCol, destRow, destCol) => {
    const start = [startRow, startCol]
    const dest = [destRow, destCol]
    const stack = [start]
    const visited = new Set([[startRow, startCol].join()])
    const directions = [[0,1], [0,-1], [1,0], [-1,0]]

    while(stack.length){
        const [row, col] = stack[stack.length - 1]
        if (row === dest[0] && col === dest[1] && maze[row] && maze[row][col] === 0) return true;
        let path = [];
        for (let [dr, dc] of directions) {
            let new_row = row, new_col = col;
            if(maze[new_row + dr] && maze[new_row + dr][new_col + dc] === 0) {
                if (visited.has([new_row + dr, new_col + dc].join())) continue;
                path = [new_row + dr, new_col + dc]
                break
            }
        }
        
        if(path.length === 0){
            stack.pop()
        }else {
            stack.push(path)
            visited.add(path.join())
        }
    }
    return false;
}

console.log(solution([
    [1, 0, 0, 1, 1],
    [1, 1, 0, 1, 1],
    [1, 0, 0, 1, 1],
    [1, 0, 1, 1, 0],
    [1, 0, 0, 0, 0],
], 0, 1, 4, 3));
