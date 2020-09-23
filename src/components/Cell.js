import React from "react";

const Cell = (props) => {
  const { cell, toggleCell, mouseIsDown, activateCell } = props;

  const handleMouseEnter = () => {
    if (mouseIsDown) {
      activateCell(cell);
    }
  };

  return (
    <div
      className={cell.status ? "cell alive" : "cell"}
      onMouseDown={() => toggleCell(cell)}
      onMouseEnter={handleMouseEnter}
    ></div>
  );
};

export default Cell;
