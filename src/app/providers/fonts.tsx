'use client'

import { NextFont } from "next/dist/compiled/@next/font";
import { IBM_Plex_Serif, IBM_Plex_Sans, IBM_Plex_Sans_Condensed } from "next/font/google";

export const serif = IBM_Plex_Serif({ weight: ["100", "200", "300", "400","500", "600", "700"], subsets: ["latin"] });
export const sans = IBM_Plex_Sans({ weight: ["100", "200", "300", "400","500", "600", "700"], subsets: ["latin"] });
export const condensed = IBM_Plex_Sans_Condensed({ weight: ["100", "200", "300", "400","500", "600", "700"], subsets: ["latin"] });

import React, { ReactNode, createContext } from 'react'

interface FontsModel {
  serif: NextFont;
  sans: NextFont;
  condensed: NextFont;
}

const defaultFonts = {serif: serif, sans: sans, condensed: condensed};

export const FontsContext = createContext<FontsModel>(defaultFonts);
function Fonts({children}: {children: ReactNode}) {
  return (
    <>
      <FontsContext.Provider value={defaultFonts}>
        {children}
      </FontsContext.Provider>
    </>
  )
}

export default Fonts