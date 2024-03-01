'use client'

import { NextFont } from "next/dist/compiled/@next/font";
import { Fraunces, Mulish, Encode_Sans_Condensed } from "next/font/google";

export const serif = Fraunces({ weight: ["200", "300", "400","500", "600", "700", "800", "900"], subsets: ["latin"] });
export const sans = Mulish({ weight: ["200", "300", "400","500", "600", "700", "800", "900"], subsets: ["latin"] });
export const condensed = Encode_Sans_Condensed({ weight: ["200", "300", "400","500", "600", "700", "800", "900"], subsets: ["latin"] });

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