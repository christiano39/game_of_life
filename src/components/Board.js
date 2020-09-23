import React from "react";
import { boardWidth } from "../presets/boardPresets";

import Cell from "./Cell";

const Board = (props) => {
  const { board } = props;

  return (
    <div className="board">
      {board.map((row) => {
        return row.map((cell) => {
          return (
            <Cell
              key={`${cell.x}, ${cell.y}`}
              cell={cell}
              toggleCell={props.toggleCell}
              activateCell={props.activateCell}
              mouseIsDown={props.mouseIsDown}
            />
          );
        });
      })}
    </div>
  );
};

export default Board;
