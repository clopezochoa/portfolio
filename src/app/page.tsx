'use client'

import Name from "./ui/name";
import { useContext } from "react";
import { FontsContext } from "./providers/fonts";
import Landing from "./ui/landing";
import Arrow from '@/app/ui/icons/arrow';
import '@/styles/utils.css'
import '@/styles/text.css'
import GenerativeAlgorithm from "./generative-algorithm/content";

export default function Home() {
  const fonts = useContext(FontsContext);

  return (<>
    <div className="grid">
      <div className="landing-container">
        <Arrow width={"auto"} height={60} stroke="1pt" orientation='up' className='arrow absolute top left' onClick={() => null}/>
        <Arrow width={"auto"} height={60} stroke="1pt" orientation='down' className='arrow absolute bottom left' /* onClick={() => router.push(routeGroup.down)} *//>
        <Name name="Carlos" surname="López-Ochoa" font={fonts.serif} />
        <Landing font={fonts.serif} />
      </div>
      <div className="content-below">
        <GenerativeAlgorithm />
      </div>
    </div>
  </>
  );
}
