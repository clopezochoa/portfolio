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
import { useRouter } from "next/navigation";

export default function Home() {
  const fonts = useContext(FontsContext);
  const router = useRouter();
  const mainDiv = useRef(null);

  const showAboutMe = () => {
    (mainDiv.current! as HTMLDivElement).className = "slide-down";
    
    setTimeout(() => {
      router.push("/about");
    }, 1000);
  }

  return (<>
    <div ref={mainDiv} className="grid">
      <Window className="flex">
        <div className="arrow-deck">
          <Arrow width={"auto"} height={60} stroke="1pt" orientation='up' className='arrow' onClick={() => showAboutMe()}/>
          <Arrow width={"auto"} height={60} stroke="1pt" orientation='down' className='arrow' /* onClick={() => router.push(routeGroup.down)} *//>
        </div>
        <div className="landing-container">
          <Name name="Carlos" surname="López-Ochoa" font={fonts.serif} />
          <Landing font={fonts.serif} />
        </div>
      </Window>
      <Window className="space-between">
        <GenerativeAlgorithm />
      </Window>
    </div>
  </>
  );
}
