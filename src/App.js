import React, { useState, useEffect } from "react";
import {
  boardWidth,
  boardHeight,
  createEmptyBoard,
} from "./presets/boardPresets";
import Cell from "./classes/Cell";

import Board from "./components/Board";
import Controls from "./components/Controls";
import Presets from "./components/Presets";
import Rules from "./components/Rules";
import "./App.scss";

const fetchCustomPresets = () => {
  if (localStorage.getItem("customPresets")) {
    return JSON.parse(localStorage.getItem("customPresets"));
  } else {
    return [];
  }
};

function App() {
  const [board, setBoard] = useState(createEmptyBoard());
  const [genNumber, setGenNumber] = useState(0);
  const [genHistory, setGenHistory] = useState([board]);
  const [running, setRunning] = useState(false);
  const [speed, setSpeed] = useState(500);
  const [customPresets, setCustomPresets] = useState(fetchCustomPresets());

  const toggleCell = (cell) => {
    if (!running) {
      const newBoard = board.map((row) => {
        return row.map((c) => {
          if (cell.x === c.x && cell.y === c.y) {
            return new Cell(cell.x, cell.y, c.status ? 0 : 1);
          }
          return c;
        });
      });
      setBoard(newBoard);
    }
  };

  const getNextGen = () => {
    setGenHistory([...genHistory, [...board]]);
    let nextBoard = board.map((row) => {
      return row.map((c) => {
        const x = c.x;
        const y = c.y;
        let sum = 0;
        let top = x - 1;
        let bottom = x + 1;
        let left = y - 1;
        let right = y + 1;

        if (top < 0) {
          top = boardHeight - 1;
        }
        if (bottom >= boardHeight) {
          bottom = 0;
        }
        if (left < 0) {
          left = boardWidth - 1;
        }
        if (right >= boardWidth) {
          right = 0;
        }

        sum =
          board[top][left].status +
          board[top][y].status +
          board[top][right].status +
          board[x][right].status +
          board[bottom][right].status +
          board[bottom][y].status +
          board[bottom][left].status +
          board[x][left].status;

        if ((sum === 2 || sum === 3) && c.status === 1) {
          return new Cell(x, y, 1);
        } else if (sum === 3 && c.status === 0) {
          return new Cell(x, y, 1);
        } else {
          return new Cell(x, y, 0);
        }
      });
    });
    setGenNumber(genNumber + 1);
    setBoard(nextBoard);
  };

  const getPreviousGen = () => {
    const prevGen = genHistory[genHistory.length - 1];
    setGenHistory(genHistory.slice(0, genHistory.length - 1));
    setBoard(prevGen);
    setGenNumber(genNumber - 1);
  };

  // const reset = () => {
  //   const firstGen = genHistory[0];
  //   setGenHistory(genHistory.slice(0, 1));
  //   setBoard(firstGen);
  //   setGenNumber(0);
  // };

  const start = () => {
    setRunning(true);
  };

  const stop = () => {
    setRunning(false);
  };

  const setPreset = (preset) => {
    if (!running) {
      if (typeof preset === "function") {
        setBoard(preset());
      } else {
        setBoard(preset);
      }
      setGenHistory([[...board]]);
      setGenNumber(0);
    }
  };

  const savePreset = () => {
    const newPreset = board;
    setCustomPresets([...customPresets, newPreset]);
    localStorage.setItem(
      "customPresets",
      JSON.stringify([...customPresets, board])
    );
  };

  const deletePreset = (e, preset) => {
    e.stopPropagation();
    const newPresetList = customPresets.filter((p) => {
      return !(p === preset);
    });

    setCustomPresets(newPresetList);
    localStorage.setItem("customPresets", JSON.stringify(newPresetList));
  };

  useEffect(() => {
    if (running) {
      setTimeout(() => {
        getNextGen();
      }, speed);
    }
  }, [running, board]);

  return (
    <div className="App">
      <header>
        <h1>John Conway's Game of Life</h1>
      </header>
      <Rules />
      <div className="main">
        <div className="sim-container">
          <p>{`Generation ${genNumber}`}</p>
          <Board board={board} toggleCell={toggleCell} />
          <Controls
            running={running}
            reset={setPreset}
            genHistory={genHistory}
            getPreviousGen={getPreviousGen}
            getNextGen={getNextGen}
            start={start}
            stop={stop}
            setSpeed={setSpeed}
            speed={speed}
            savePreset={savePreset}
          />
        </div>
        <Presets
          setPreset={setPreset}
          customPresets={customPresets}
          deletePreset={deletePreset}
        />
      </div>
    </div>
  );
}

export default App;
