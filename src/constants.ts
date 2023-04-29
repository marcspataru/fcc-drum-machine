import { DrumPadProps } from "./components/DrumPad/DrumPad";

const qUrl = "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3";
const wUrl = "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3";
const eUrl = "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3";
const aUrl = "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3";
const sUrl = "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3";
const dUrl = "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3";
const zUrl = "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3";
const xUrl = "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3";
const cUrl = "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3";

export const sounds: DrumPadProps[] = [
  {
    audioId: "heater1",
    audioUrl: qUrl,
    drumPadId: "Q",
  },
  {
    audioId: "heater2",
    audioUrl: wUrl,
    drumPadId: "W",
  },
  {
    audioId: "heater3",
    audioUrl: eUrl,
    drumPadId: "E",
  },
  {
    audioId: "heater4_1",
    audioUrl: aUrl,
    drumPadId: "A",
  },
  {
    audioId: "heater6",
    audioUrl: sUrl,
    drumPadId: "S",
  },
  {
    audioId: "dscoh",
    audioUrl: dUrl,
    drumPadId: "D",
  },
  {
    audioId: "kicknhat",
    audioUrl: zUrl,
    drumPadId: "Z",
  },
  {
    audioId: "kick",
    audioUrl: xUrl,
    drumPadId: "X",
  },
  {
    audioId: "cev",
    audioUrl: cUrl,
    drumPadId: "C",
  },
];
