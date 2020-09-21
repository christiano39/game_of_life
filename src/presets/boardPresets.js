import Cell from "../classes/Cell";

export const boardHeight = 30;
export const boardWidth = 30;

export const createEmptyBoard = () => {
  let board = [];
  for (let i = 0; i < boardHeight; i++) {
    board.push([]);
    for (let j = 0; j < boardWidth; j++) {
      const cell = new Cell(i, j, 0);
      board[i][j] = cell;
    }
  }
  return board;
};

export const oscillators = () => {
  let board = createEmptyBoard();
  board[2][5].status = 1;
  board[2][6].status = 1;
  board[3][6].status = 1;
  board[3][7].status = 1;
  board[4][6].status = 1;
  board[5][7].status = 1;
  board[4][8].status = 1;
  board[5][8].status = 1;
  board[6][6].status = 1;
  board[6][8].status = 1;
  board[7][6].status = 1;
  board[7][7].status = 1;
  board[7][5].status = 1;
  board[5][5].status = 1;
  board[5][4].status = 1;
  board[6][4].status = 1;
  board[5][3].status = 1;
  board[4][3].status = 1;
  board[6][10].status = 1;
  board[5][10].status = 1;
  board[4][10].status = 1;
  board[5][11].status = 1;
  board[4][12].status = 1;
  board[3][12].status = 1;
  board[3][11].status = 1;
  board[2][12].status = 1;
  board[2][13].status = 1;
  board[7][11].status = 1;
  board[6][12].status = 1;
  board[7][13].status = 1;
  board[5][13].status = 1;
  board[5][14].status = 1;
  board[6][14].status = 1;
  board[7][12].status = 1;
  board[5][15].status = 1;
  board[4][15].status = 1;
  board[9][5].status = 1;
  board[9][6].status = 1;
  board[9][7].status = 1;
  board[10][6].status = 1;
  board[10][8].status = 1;
  board[11][8].status = 1;
  board[11][7].status = 1;
  board[12][8].status = 1;
  board[11][5].status = 1;
  board[12][6].status = 1;
  board[13][6].status = 1;
  board[13][7].status = 1;
  board[14][6].status = 1;
  board[14][5].status = 1;
  board[11][4].status = 1;
  board[10][4].status = 1;
  board[11][3].status = 1;
  board[12][3].status = 1;
  board[9][11].status = 1;
  board[10][10].status = 1;
  board[9][12].status = 1;
  board[9][13].status = 1;
  board[10][12].status = 1;
  board[11][10].status = 1;
  board[12][10].status = 1;
  board[11][11].status = 1;
  board[12][12].status = 1;
  board[11][13].status = 1;
  board[11][14].status = 1;
  board[10][14].status = 1;
  board[11][15].status = 1;
  board[12][15].status = 1;
  board[13][12].status = 1;
  board[14][12].status = 1;
  board[13][11].status = 1;
  board[14][13].status = 1;

  return board;
};
