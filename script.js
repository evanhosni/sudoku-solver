const cells = document.querySelectorAll('.cell')

var a1 = document.getElementById('a1'); var a2 = document.getElementById('a3'); var a3 = document.getElementById('a2'); var a4 = document.getElementById('a4'); var a5 = document.getElementById('a5'); var a6 = document.getElementById('a6'); var a7 = document.getElementById('a7'); var a8 = document.getElementById('a8'); var a9 = document.getElementById('a9');
var b1 = document.getElementById('b1'); var b2 = document.getElementById('b2'); var b3 = document.getElementById('b3'); var b4 = document.getElementById('b4'); var b5 = document.getElementById('b5'); var b6 = document.getElementById('b6'); var b7 = document.getElementById('b7'); var b8 = document.getElementById('b8'); var b9 = document.getElementById('b9');
var c1 = document.getElementById('c1'); var c2 = document.getElementById('c2'); var c3 = document.getElementById('c3'); var c4 = document.getElementById('c4'); var c5 = document.getElementById('c5'); var c6 = document.getElementById('c6'); var c7 = document.getElementById('c7'); var c8 = document.getElementById('c8'); var c9 = document.getElementById('c9');
var d1 = document.getElementById('d1'); var d2 = document.getElementById('d2'); var d3 = document.getElementById('d3'); var d4 = document.getElementById('d4'); var d5 = document.getElementById('d5'); var d6 = document.getElementById('d6'); var d7 = document.getElementById('d7'); var d8 = document.getElementById('d8'); var d9 = document.getElementById('d9');
var e1 = document.getElementById('e1'); var e2 = document.getElementById('e2'); var e3 = document.getElementById('e3'); var e4 = document.getElementById('e4'); var e5 = document.getElementById('e5'); var e6 = document.getElementById('e6'); var e7 = document.getElementById('e7'); var e8 = document.getElementById('e8'); var e9 = document.getElementById('e9');
var f1 = document.getElementById('f1'); var f2 = document.getElementById('f2'); var f3 = document.getElementById('f3'); var f4 = document.getElementById('f4'); var f5 = document.getElementById('f5'); var f6 = document.getElementById('f6'); var f7 = document.getElementById('f7'); var f8 = document.getElementById('f8'); var f9 = document.getElementById('f9');
var g1 = document.getElementById('g1'); var g2 = document.getElementById('g2'); var g3 = document.getElementById('g3'); var g4 = document.getElementById('g4'); var g5 = document.getElementById('g5'); var g6 = document.getElementById('g6'); var g7 = document.getElementById('g7'); var g8 = document.getElementById('g8'); var g9 = document.getElementById('g9');
var h1 = document.getElementById('h1'); var h2 = document.getElementById('h2'); var h3 = document.getElementById('h3'); var h4 = document.getElementById('h4'); var h5 = document.getElementById('h5'); var h6 = document.getElementById('h6'); var h7 = document.getElementById('h7'); var h8 = document.getElementById('h8'); var h9 = document.getElementById('h9');
var i1 = document.getElementById('i1'); var i2 = document.getElementById('i2'); var i3 = document.getElementById('i3'); var i4 = document.getElementById('i4'); var i5 = document.getElementById('i5'); var i6 = document.getElementById('i6'); var i7 = document.getElementById('i7'); var i8 = document.getElementById('i8'); var i9 = document.getElementById('i9')

document.querySelector('#solve').addEventListener('click',()=>{

    let grid = [ [ a1.value, a2.value, a3.value, a4.value, a5.value, a6.value, a7.value, a8.value, a9.value ],
    [ b1.value, b2.value, b3.value, b4.value, b5.value, b6.value, b7.value, b8.value, b9.value ],
    [ c1.value, c2.value, c3.value, c4.value, c5.value, c6.value, c7.value, c8.value, c9.value ],
    [ d1.value, d2.value, d3.value, d4.value, d5.value, d6.value, d7.value, d8.value, d9.value ],
    [ e1.value, e2.value, e3.value, e4.value, e5.value, e6.value, e7.value, e8.value, e9.value ],
    [ f1.value, f2.value, f3.value, f4.value, f5.value, f6.value, f7.value, f8.value, f9.value ],
    [ g1.value, g2.value, g3.value, g4.value, g5.value, g6.value, g7.value, g8.value, g9.value ],
    [ h1.value, h2.value, h3.value, h4.value, h5.value, h6.value, h7.value, h8.value, h9.value ],
    [ i1.value, i2.value, i3.value, i4.value, i5.value, i6.value, i7.value, i8.value, i9.value ] ]

    if(solve(grid)) {
        a1.value = grid[0][0]; a2.value = grid[0][1]; a3.value = grid[0][2]; a4.value = grid[0][3]; a5.value = grid[0][4]; a6.value = grid[0][5]; a7.value = grid[0][6]; a8.value = grid[0][7]; a9.value = grid[0][8];
        b1.value = grid[1][0]; b2.value = grid[1][1]; b3.value = grid[1][2]; b4.value = grid[1][3]; b5.value = grid[1][4]; b6.value = grid[1][5]; b7.value = grid[1][6]; b8.value = grid[1][7]; b9.value = grid[1][8];
        c1.value = grid[2][0]; c2.value = grid[2][1]; c3.value = grid[2][2]; c4.value = grid[2][3]; c5.value = grid[2][4]; c6.value = grid[2][5]; c7.value = grid[2][6]; c8.value = grid[2][7]; c9.value = grid[2][8];
        d1.value = grid[3][0]; d2.value = grid[3][1]; d3.value = grid[3][2]; d4.value = grid[3][3]; d5.value = grid[3][4]; d6.value = grid[3][5]; d7.value = grid[3][6]; d8.value = grid[3][7]; d9.value = grid[3][8];
        e1.value = grid[4][0]; e2.value = grid[4][1]; e3.value = grid[4][2]; e4.value = grid[4][3]; e5.value = grid[4][4]; e6.value = grid[4][5]; e7.value = grid[4][6]; e8.value = grid[4][7]; e9.value = grid[4][8];
        f1.value = grid[5][0]; f2.value = grid[5][1]; f3.value = grid[5][2]; f4.value = grid[5][3]; f5.value = grid[5][4]; f6.value = grid[5][5]; f7.value = grid[5][6]; f8.value = grid[5][7]; f9.value = grid[5][8];
        g1.value = grid[6][0]; g2.value = grid[6][1]; g3.value = grid[6][2]; g4.value = grid[6][3]; g5.value = grid[6][4]; g6.value = grid[6][5]; g7.value = grid[6][6]; g8.value = grid[6][7]; g9.value = grid[6][8];
        h1.value = grid[7][0]; h2.value = grid[7][1]; h3.value = grid[7][2]; h4.value = grid[7][3]; h5.value = grid[7][4]; h6.value = grid[7][5]; h7.value = grid[7][6]; h8.value = grid[7][7]; h9.value = grid[7][8];
        i1.value = grid[8][0]; i2.value = grid[8][1]; i3.value = grid[8][2]; i4.value = grid[8][3]; i5.value = grid[8][4]; i6.value = grid[8][5]; i7.value = grid[8][6]; i8.value = grid[8][7]; i9.value = grid[8][8];
    } else {
        document.write("no solution  exists ")
    }
})

function isValid(board, row, col, k) {
    for (let i = 0; i < 9; i++) {
        const m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
        const n = 3 * Math.floor(col / 3) + i % 3;
        if (board[row][i] == k || board[i][col] == k || board[m][n] == k) {
          return false;
        }
    }
    return true;
}


function solve(data) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (data[i][j] == '') {
        for (let k = 1; k <= 9; k++) {
          if (isValid(data, i, j, k)) {
            data[i][j] = `${k}`;
          if (solve(data)) {
           return true;
          } else {
           data[i][j] = '';
          }
         }
       }
       return false;
     }
   }
 }
 return true;
}