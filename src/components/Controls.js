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
          <i
            className={running ? "fas fa-undo-alt disabled" : "fas fa-undo-alt"}
          ></i>
        </button>
        <button
          disabled={genHistory.length > 1 && !running ? false : true}
          onClick={getPreviousGen}
        >
          <i
            className={
              running || genHistory.length <= 1
                ? "fas fa-step-backward disabled"
                : "fas fa-step-backward"
            }
          ></i>
        </button>
        <button disabled={running} onClick={getNextGen}>
          <i
            className={
              running ? "fas fa-step-forward disabled" : "fas fa-step-forward"
            }
          ></i>
        </button>
        <button disabled={running} onClick={start}>
          <i className={running ? "fas fa-play disabled" : "fas fa-play"}></i>
        </button>
        <button disabled={!running} onClick={stop}>
          <i className="fas fa-stop"></i>
        </button>
        <button disabled={running} onClick={savePreset}>
          <i className={running ? "fas fa-save disabled" : "fas fa-save"}></i>
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
