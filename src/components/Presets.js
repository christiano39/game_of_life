import React from "react";

import {
  oscillators,
  gliders,
  smallShips,
  largeShips,
  dieHard,
} from "../presets/boardPresets";

const Presets = (props) => {
  const { setPreset, customPresets } = props;
  let presetNum = 0;

  return (
    <div className="presets">
      <h2>Presets</h2>
      <ul>
        <li onClick={() => setPreset(oscillators)}>Oscillators</li>
        <li onClick={() => setPreset(gliders)}>Gliders</li>
        <li onClick={() => setPreset(smallShips)}>Small Spaceships</li>
        <li onClick={() => setPreset(largeShips)}>Large Spaceships</li>
        <li onClick={() => setPreset(dieHard)}>Die Hard</li>
        {customPresets.length > 0 &&
          customPresets.map((preset) => {
            presetNum++;
            return (
              <li
                key={presetNum}
                onClick={() => setPreset(preset)}
              >{`Custom Preset #${presetNum}`}</li>
            );
          })}
      </ul>
    </div>
  );
};

export default Presets;
