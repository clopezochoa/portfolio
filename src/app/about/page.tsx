'use client'

import '@/styles/icon.css'
import '@/styles/utils.css'
import '@/styles/text.css'

import React, { useRef } from 'react'
import Window from '../ui/window'
import { Greeting, WhatIDo } from './content'
import Arrow from '../ui/icons/arrow'
import { useRouter } from 'next/navigation'

function AboutMe() {
  const router = useRouter();
  const mainDiv = useRef(null);

  const hideAboutMe = () => {
    (mainDiv.current! as HTMLDivElement).className = "slide-up";
    
    setTimeout(() => {
      router.push("/");
    }, 1000);
  }
  return (<>
  <div ref={mainDiv} className='grid'>
    <Window>
      <Greeting/>
    </Window>
    <Window className='flex-between'>
      <div className='space-between'>
        <WhatIDo/>
      </div>
      <div className='space-between'>
        <div/>
        <Arrow width={"auto"} height={24} stroke="1pt" orientation='down' className='arrow fixed bottom right' onClick={() => hideAboutMe()} />
      </div>
    </Window>
  </div>
  </>)
}

export default AboutMe;