const cells = document.querySelectorAll('.cell')

document.querySelector('#solve').addEventListener('click',()=>{

    let grid = [[],[],[],[],[],[],[],[],[]]
    for (let row = 0; row < 9; row++) { //grabs existing cell data
        for (let col = 0; col < 9; col++) {
            grid[row].push(document.getElementById(`${row}-${col}`).value || '')
        }
    }

    if(solve(grid)) {
        for (let row = 0; row < 9; row++) { //updates cells to display solution data
            for (let col = 0; col < 9; col++) {
                document.getElementById(`${row}-${col}`).value = grid[row][col]
            }
        }
    } else {
        alert("no solution  exists ")
    }
})

function check(grid, row, col, num) {
    for (let i = 0; i < 9; i++) {
        const x = 3 * Math.floor(row / 3) + Math.floor(i / 3); //finds row for each cell in relative box
        const y = 3 * Math.floor(col / 3) + i % 3; //finds col for each cell in relative box
        if (grid[row][i] == num || grid[i][col] == num || grid[x][y] == num) { //if num is found in relative row, col, or box
            return false;
        }
    }
    return true; //return true if cell's num passes check
}

function solve(grid) {
    for (let row = 0; row < 9; row++) { //row iteration
        for (let col = 0; col < 9; col++) { //col iteration
            if (!grid[row][col]) { //if cell empty
                for (let num = 1; num <= 9; num++) {
                    if (check(grid, row, col, num)) { //if check returns true
                        grid[row][col] = num; //sets cell value to num
                        if (solve(grid)) {
                            return true;
                        } else {
                            grid[row][col] = '';
                        }
                    }
                }
                return false; //if cell's check returns false for all values
            }
        }
    }
    return true; //return true if completely solved
}

document.querySelector('#clear').addEventListener('click',()=>{

    for (let row = 0; row < 9; row++) { //clears all cells
        for (let col = 0; col < 9; col++) {
            document.getElementById(`${row}-${col}`).value = ''
        }
    }

})