import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import styles from "./DrumPad.module.css";
import { useEffectOnce, useKeyPress } from "react-use";
import { DrumPadContext } from "@/context/DrumPadContext";

const useAudio = (
  id: DrumPadId,
  setCurrentDrumPadPlaying: (value: DrumPadId) => void
) => {
  const [audio] = useState<HTMLAudioElement | null>(
    typeof window !== "undefined"
      ? (document.getElementById(id) as HTMLAudioElement)
      : null
  );

  const toggle = (drumPadId: DrumPadId) => {
    audio?.play();
    console.log("setting to id", drumPadId);
    setCurrentDrumPadPlaying(drumPadId);
  };

  return toggle;
};

export type DrumPadProps = {
  audioId: string;
  drumPadId: DrumPadId;
  audioUrl: string;
};

export type DrumPadId = "Q" | "W" | "E" | "A" | "S" | "D" | "Z" | "X" | "C";

const DrumPad = ({ drumPadId, audioUrl, audioId }: DrumPadProps) => {
  const [, setCurrentDrumPadPlaying] = useContext(DrumPadContext);
  const toggle = useAudio(drumPadId, setCurrentDrumPadPlaying);
  const [key] = useKeyPress(drumPadId);
  const [lowerCaseKey] = useKeyPress(drumPadId.toLowerCase());

  useEffect(() => {
    if (key || lowerCaseKey) {
      toggle(drumPadId);
    }
  });

  return (
    <div
      className={`drum-pad ${styles.drumPad}`}
      onClick={() => toggle(drumPadId)}
      id={audioId}
    >
      {drumPadId}
      <audio src={audioUrl} className="clip" id={drumPadId}></audio>
    </div>
  );
};

export default DrumPad;
