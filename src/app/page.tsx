'use client'

import Name from "./ui/name";
import { useContext, useRef } from "react";
import { FontsContext } from "./providers/fonts";
import Landing from "./ui/landing";
import Arrow from '@/app/ui/icons/arrow';
import '@/styles/utils.css'
import '@/styles/text.css'
import GenerativeAlgorithm from "./generative-algorithm/content";
import Window from "@/app/ui/window";
import { defaultColors } from "../../tailwind.config";
import FrontendDevelopment from "./frontend/content";
import { Greeting, WhatIDo } from "./about/content";
import { Pages } from "@/lib/routeList";
import { useScroll } from "./hooks/useScroll";
import SkyBackground from "./three-landing/SkyBackground";

const arrowSize = "100%";

export default function Home() {
  const fonts = useContext(FontsContext);
  const windowLandingRef = useRef(null);
  const generativeAlgorithmRef = useRef(null);
  const frontendDevelopmentRef = useRef(null);
  const aboutRef = useRef(null);
  const refs = [windowLandingRef, generativeAlgorithmRef, frontendDevelopmentRef, aboutRef];
  useScroll(refs);
  
  return (<>
    <Window ref={windowLandingRef} className="flex">
      <SkyBackground bottom color={defaultColors.clear.hex} />
      <div className="landing-container">
        <Name name="Carlos" surname="López-Ochoa" font={fonts.serif} />
        <Landing font={fonts.serif} />
      </div>
      <div className="arrow-deck">
        <div className='arrow'/>
        <a href={`#${Pages.about}`}>
          <Arrow strokeColor={defaultColors.clear.hex} stroke="1pt" orientation='down' className='arrow wave-opacity'/>
        </a>
      </div>
    </Window>
    <Window ref={generativeAlgorithmRef} className="space-between">
      <GenerativeAlgorithm />
    </Window>
    <Window ref={frontendDevelopmentRef} className="space-between">
      <FrontendDevelopment />
    </Window>
    <Window ref={aboutRef}>
      <SkyBackground top color={defaultColors.dark.hex}/>
      <Greeting/>
      <WhatIDo/>
    </Window>
    <a style={{display:"flex", justifyContent:"center"}} href={`#`}>
      <Arrow strokeColor={defaultColors.dark.hex} width={"auto"} height={arrowSize} stroke="1pt" orientation='up' className='arrow'/>
    </a>
  </>
  );
}
