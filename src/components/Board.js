import React from "react";

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
            />
          );
        });
      })}
    </div>
  );
};

export default Board;
