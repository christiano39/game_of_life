import React from "react";
import { boardWidth } from "../presets/boardPresets";

import Cell from "./Cell";

const Board = (props) => {
  const { board } = props;

  return (
    <div className="board" style={{ width: 20 * boardWidth }}>
      {board.map((row) => {
        return row.map((cell) => {
          return (
            <Cell
              key={`${cell.x}, ${cell.y}`}
              cell={cell}
              toggleCell={props.toggleCell}
            />
          );
        });
      })}
    </div>
  );
};

export default Board;
