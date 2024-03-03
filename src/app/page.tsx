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
import { defaultColors } from "../../tailwind.config";
import FrontendDevelopment from "./frontend/content";

export default function Home() {
  const fonts = useContext(FontsContext);
  const router = useRouter();
  const mainDiv = useRef(null);

  const showAboutMe = () => {
    (mainDiv.current! as HTMLDivElement).className = "grid slide-down";
    
    setTimeout(() => {
      router.push("/about");
    }, 400);
  }

  return (<>
    <div ref={mainDiv} className="grid">
      <Window className="flex">
        <div className="arrow-deck">
          <Arrow strokeColor={defaultColors.clear} width={"auto"} height={60} stroke="1pt" orientation='up' className='arrow' onClick={() => showAboutMe()}/>
          <div/>
        </div>
        <div className="landing-container">
          <Name name="Carlos" surname="López-Ochoa" font={fonts.serif} />
          <Landing font={fonts.serif} />
        </div>
      </Window>
      <Window className="space-between">
        <GenerativeAlgorithm />
      </Window>
      <Window className="space-between">
        <FrontendDevelopment />
      </Window>
    </div>
  </>
  );
}
