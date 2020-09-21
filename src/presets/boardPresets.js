import Cell from "../classes/Cell";

const boardHeight = 40;
const boardWidth = 40;

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
