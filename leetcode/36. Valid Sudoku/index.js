/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = board => {
  const withoutDuplications = array => {
    const filtered = array.filter(s => s !== '.');
    const set = new Set(filtered);
    return set.size === filtered.length;
  };

  const rowsValid = board => {
    return board.every(withoutDuplications);
  };

  const columnsValid = board => {
    for (let j = 0; j < board.length; j++) {
      const column = [];
      for (let i = 0; i < board.length; i++) {
        column.push(board[i][j]);
      }

      if (!withoutDuplications(column)) {
        return false;
      }
    }
    return true;
  };

  const areasValid = board => {
    for (let i = 0; i < 9; i += 3) {
      for (let j = 0; j < 9; j += 3) {
        const subMatrix = [
          board[i].slice(j, j + 3),
          board[i + 1].slice(j, j + 3),
          board[i + 2].slice(j, j + 3),
        ];
        const planeSubMatrix = subMatrix.reduce(
          (acc, row) => [...acc, ...row],
          []
        );
        if (
          !rowsValid(subMatrix) ||
          !columnsValid(subMatrix) ||
          !withoutDuplications(planeSubMatrix)
        ) {
          return false;
        }
      }
    }
    return true;
  };

  return rowsValid(board) && columnsValid(board) && areasValid(board);
};

console.log(
  isValidSudoku([
    ['.', '.', '.', '.', '5', '.', '.', '1', '.'],
    ['.', '4', '.', '3', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '3', '.', '.', '1'],
    ['8', '.', '.', '.', '.', '.', '.', '2', '.'],
    ['.', '.', '2', '.', '7', '.', '.', '.', '.'],
    ['.', '1', '5', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '2', '.', '.', '.'],
    ['.', '2', '.', '9', '.', '.', '.', '.', '.'],
    ['.', '.', '4', '.', '.', '.', '.', '.', '.'],
  ])
);

// console.log(
//   isValidSudoku([
//     ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
//     ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
//     ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
//     ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
//     ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
//     ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
//     ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
//     ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
//     ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
//   ])
// );

// console.log(
//   isValidSudoku([
//     ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
//     ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
//     ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
//     ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
//     ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
//     ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
//     ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
//     ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
//     ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
//   ])
// );
