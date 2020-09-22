import React from "react";
import { createEmptyBoard } from "../presets/boardPresets";

const Controls = (props) => {
  const {
    running,
    reset,
    genHistory,
    getPreviousGen,
    getNextGen,
    start,
    stop,
    speed,
    setSpeed,
    savePreset,
  } = props;

  return (
    <div className="controls-container">
      <div className="step-controls">
        <button disabled={running} onClick={() => reset(createEmptyBoard)}>
          <i className="fas fa-undo-alt" aria-label="reset"></i>
        </button>
        <button
          disabled={genHistory.length > 1 && !running ? false : true}
          onClick={getPreviousGen}
        >
          <i className="fas fa-step-backward"></i>
        </button>
        <button disabled={running} onClick={getNextGen}>
          <i className="fas fa-step-forward"></i>
        </button>
        <button disabled={running} onClick={start}>
          <i className="fas fa-play"></i>
        </button>
        <button disabled={!running} onClick={stop}>
          <i className="fas fa-stop"></i>
        </button>
        <button disabled={running} onClick={savePreset}>
          <i className="fas fa-save"></i>
        </button>
      </div>
      <div className="speed-controls">
        <button
          onClick={() => setSpeed(500)}
          className={speed === 500 ? "active" : ""}
        >
          <span className="bold">1x</span>
        </button>
        <button
          onClick={() => setSpeed(250)}
          className={speed === 250 ? "active" : ""}
        >
          <span className="bold">2x</span>
        </button>
        <button
          onClick={() => setSpeed(100)}
          className={speed === 100 ? "active" : ""}
        >
          <span className="bold">5x</span>
        </button>
      </div>
    </div>
  );
};

export default Controls;
