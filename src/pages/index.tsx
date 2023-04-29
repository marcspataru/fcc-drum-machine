import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import DrumMachine from "@/components/DrumMachine/DrumMachine";
import { DrumPadContext } from "@/context/DrumPadContext";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { sounds } from "@/constants";
import { DrumPadId } from "@/components/DrumPad/DrumPad";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [currentDrumPadPlaying, setCurrentDrumPadPlaying] =
    useState<DrumPadId | null>(null);

  return (
    <>
      <Head>
        <title>Drum Machine</title>
        <meta name="description" content="FreeCodeCamp Certification Project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {/* eslint-disable-next-line @next/next/no-sync-scripts */}
      <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>
      <main className={`${styles.main} ${inter.className}`}>
        <DrumPadContext.Provider
          value={[currentDrumPadPlaying, setCurrentDrumPadPlaying]}
        >
          <DrumMachine />
        </DrumPadContext.Provider>
      </main>
    </>
  );
}
