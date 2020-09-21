import React, { useState } from "react";
import { createEmptyBoard } from "./presets/boardPresets";
import Cell from "./classes/Cell";

import Board from "./components/Board";
import "./App.scss";

function App() {
  const [board, setBoard] = useState(createEmptyBoard());

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

  return (
    <div className="App">
      <h1>The Game of Life</h1>
      <Board board={board} toggleCell={toggleCell} />
    </div>
  );
}

export default App;
