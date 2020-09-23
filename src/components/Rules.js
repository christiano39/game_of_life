import React from "react";

const Rules = () => {
  return (
    <div className="rules">
      <h2>Rules</h2>
      <ul>
        <li>A cell can be either alive or dead</li>
        <li>
          If a cell is alive and has either 2 or 3 adjacent living cells, it
          will remain alive
        </li>
        <li>
          If a cell is dead, but it has exactly 3 adjacent living cells, it will
          come back to life
        </li>
        <li>If neither of the above applies to a cell, it will die</li>
      </ul>
    </div>
  );
};

export default Rules;
