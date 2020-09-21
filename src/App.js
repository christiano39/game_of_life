import React, { useState } from "react";
import {
  boardWidth,
  boardHeight,
  createEmptyBoard,
  oscillators,
} from "./presets/boardPresets";
import Cell from "./classes/Cell";

import Board from "./components/Board";
import "./App.scss";

function App() {
  const [board, setBoard] = useState(oscillators());
  const [genNumber, setGenNumber] = useState(0);
  const [genHistory, setGenHistory] = useState([board]);

  const toggleCell = (cell) => {
    const newBoard = board.map((row) => {
      return row.map((c) => {
        if (cell.x === c.x && cell.y === c.y) {
          return new Cell(cell.x, cell.y, c.status ? 0 : 1);
        }
        return c;
      });
    });
    setBoard(newBoard);
  };

  const getNextGen = () => {
    setGenHistory([...genHistory, [...board]]);
    let nextBoard = board.map((row) => {
      return row.map((c) => {
        const x = c.x;
        const y = c.y;
        let sum = 0;
        if (x >= 1 && x < boardHeight - 1 && y >= 1 && y < boardWidth - 1) {
          sum =
            board[x - 1][y - 1].status +
            board[x - 1][y].status +
            board[x - 1][y + 1].status +
            board[x][y + 1].status +
            board[x + 1][y + 1].status +
            board[x + 1][y].status +
            board[x + 1][y - 1].status +
            board[x][y - 1].status;
        }

        if ((sum === 2 || sum === 3) && c.status === 1) {
          return new Cell(x, y, 1);
        } else if (sum === 3 && c.status === 0) {
          return new Cell(x, y, 1);
        } else {
          return new Cell(x, y, 0);
        }
      });
    });
    setBoard(nextBoard);
    setGenNumber(genNumber + 1);
    return nextBoard;
  };

  const getPreviousGen = () => {
    const prevGen = genHistory[genHistory.length - 1];
    setGenHistory(genHistory.slice(0, genHistory.length - 1));
    setBoard(prevGen);
    setGenNumber(genNumber - 1);
    return prevGen;
  };

  const reset = () => {
    const firstGen = genHistory[0];
    setGenHistory(genHistory.slice(0, 1));
    setBoard(firstGen);
    setGenNumber(0);
  };

  return (
    <div className="App">
      <h1>The Game of Life</h1>
      <p>{`Generation ${genNumber}`}</p>
      <Board board={board} toggleCell={toggleCell} />
      <button onClick={reset}>Reset</button>
      <button
        disabled={genHistory.length > 1 ? false : true}
        onClick={getPreviousGen}
      >
        Previous Gen
      </button>
      <button onClick={getNextGen}>Next Gen</button>
    </div>
  );
}

export default App;
