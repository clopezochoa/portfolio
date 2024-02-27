'use client'

import Name from "./ui/name";
import { useContext } from "react";
import { FontsContext } from "./providers/fonts";
import Landing from "./ui/landing";

export default function Home() {
  const fonts = useContext(FontsContext);

  return (<>
  <div>
    <Name name="Carlos" surname="López-Ochoa" font={fonts.serif} />
    <Landing font={fonts.serif} />
  </div>
  </>
  );
}
