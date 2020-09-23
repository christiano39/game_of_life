import React from "react";

const Cell = (props) => {
  const { cell, toggleCell, mouseIsDown } = props;

  const handleMouseEnter = () => {
    if (mouseIsDown) {
      toggleCell(cell);
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
