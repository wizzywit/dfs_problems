/*
Given a binary 2D matrix, find the number of islands. A group of connected 1s forms an island. For example, the below matrix contains 5 islands.

Example:

Input: mat[][] = {{1, 1, 0, 0, 0},
                           {0, 1, 0, 0, 1},
                           {1, 0, 0, 1, 1},
                          {0, 0, 0, 0, 0},
                         {1, 0, 1, 0, 0}}
Output: 5
 */

const number_of_islands = (matrix) => {
    const visited = new Set()
    const directions = [[0,1], [0,-1], [1,0], [-1,0], [-1, -1], [1, 1], [-1, 1], [1, -1]]
    let count = 0

    //loop every cell in the matrix
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){

            //if cell has not been visited and it has a value of one, perform DFS
            if(matrix[i] && matrix[i][j] === 1 && !visited.has([i, j].join())){
                const stack = [[i, j]]
                visited.add([i, j].join())
                count++;
                while(stack.length){
                    const [row, col] = stack[stack.length - 1]
                    let path = [];
                    for (let [dr, dc] of directions) {
                        //get new co-ordinates
                        const new_row = row + dr
                        const new_col = col + dc

                        // if valid co-ordinate and not visit update path
                        if(matrix[new_row] && matrix[new_row][new_col] === 1) {
                            if(visited.has([new_row, new_col].join())) continue;
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
            }
        }
    }
    return count
}

console.log(
    number_of_islands([
        [1, 1, 0, 0, 0],
        [0, 1, 0, 0, 1],
        [1, 0, 0, 1, 1],
        [0, 0, 0, 0, 0],
        [1, 0, 1, 0, 1]
    ])
)
