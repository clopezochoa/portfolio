'use client'

import Name from "./ui/name";
import { useContext } from "react";
import { FontsContext } from "./providers/fonts";
import Landing from "./ui/landing";
import Arrow from '@/app/ui/icons/arrow';


function HomePage() {
  const fonts = useContext(FontsContext);
  return (<>
    <div>
      <Arrow width={"auto"} height={60} stroke="1pt" orientation='up' className='arrow absolute top left' onClick={() => null}/>
      <Arrow width={"auto"} height={60} stroke="1pt" orientation='down' className='arrow absolute bottom left' onClick={() => null}/>
      <Name name="Carlos" surname="López-Ochoa" font={fonts.serif} />
      <Landing font={fonts.serif} />
    </div>
  </>
  )
}

export default HomePage