import React, { ReactNode, useContext, useMemo } from "react";

import styles from "./DrumMachine.module.css";
import { sounds } from "@/constants";
import DrumPad from "../DrumPad/DrumPad";
import { DrumPadContext } from "@/context/DrumPadContext";

const DrumMachine = () => {
  const [currentDrumPadPlaying] = useContext(DrumPadContext);
  return (
    <div id="drum-machine" className={styles.drumMachine}>
      {sounds.map((sound, index) => (
        <DrumPad
          key={index + 1}
          audioId={sound.audioId}
          audioUrl={sound.audioUrl}
          drumPadId={sound.drumPadId}
        ></DrumPad>
      ))}
      <div id="display" className={styles.display}>
        {currentDrumPadPlaying && (
          <span>{currentDrumPadPlaying} is playing!</span>
        )}
      </div>
    </div>
  );
};

export default DrumMachine;
