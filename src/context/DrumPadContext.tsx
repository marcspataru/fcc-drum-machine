import { DrumPadId } from "@/components/DrumPad/DrumPad";
import { Dispatch, SetStateAction, createContext } from "react";

export const DrumPadContext = createContext<
  [DrumPadId | null, Dispatch<SetStateAction<DrumPadId | null>>]
>([null, () => void 0]);
