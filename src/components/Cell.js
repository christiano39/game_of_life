import React from "react";

const Cell = (props) => {
  const { cell, toggleCell } = props;
  return (
    <div
      className={cell.status ? "cell alive" : "cell"}
      onMouseDown={() => toggleCell(cell)}
    ></div>
  );
};

export default Cell;
