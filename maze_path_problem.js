const solution = (maze, startRow, startCol, destRow, destCol) => {
    // hold start co-ordinates
    const start = [startRow, startCol]

    //hold destination co-ordinates
    const dest = [destRow, destCol]

    // create the stack with the start co-ordinates
    const stack = [start]

    //create visited with the start co-ordinates
    const visited = new Set([[startRow, startCol].join()])

    // initialise possible directions: up, down, right, left
    const directions = [[0,1], [0,-1], [1,0], [-1,0]]

    //keep looping till the stack is empty or reached final destination.
    while(stack.length){

        // get the first co-ordinates
        const [row, col] = stack[stack.length - 1]

        // return true if co-ordinates matches destination co-ordinates
        if (row === dest[0] && col === dest[1] && maze[row] && maze[row][col] === 0) return true;

        //to hold valid path
        let path = [];

        //loop on possible directions to compute available valid paths not visited
        for (let [dr, dc] of directions) {
            //get new co-ordinates
            const new_row = row + dr
            const new_col = col + dc

            // if valid co-ordinate and not visit update path
            if(maze[new_row] && maze[new_row][new_col] === 0) {
                if (visited.has([new_row, new_col].join())) continue;
                path = [new_row, new_col]
                break
            }
        }

        // if path is empty pop stack to backtrack else push the new path co-ordinate to stack and update visited
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

console.log(solution([
    [1, 0, 0, 1, 1],
    [1, 1, 0, 1, 1],
    [1, 0, 0, 1, 1],
    [1, 0, 1, 1, 0],
    [1, 0, 0, 0, 1],
], 0, 1, 3, 4));
