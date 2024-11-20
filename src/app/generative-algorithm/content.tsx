'use client'

import '@/styles/icon.css'
import '@/styles/text.css'
import '@/styles/utils.css'

import React, { CSSProperties, Suspense, lazy, useContext, useEffect, useRef } from 'react'
import { defaultColors } from '../../../tailwind.config';
import Arrow from '../ui/icons/arrow';
import { useRouter } from 'next/navigation';
import { Pages, Route } from '@/lib/routeList';
import { WorkTitle } from '../ui/work';
import { FontsContext } from '../providers/fonts';
import { useViewportFunction } from '../hooks/useViewport'
import useSwipe from '../hooks/useSwipe'

const PhoneMock = lazy(() => import("@/app/ui/media/Video"));

const workTitleStyleTop: CSSProperties = {
  color: defaultColors.red.hex,
  textAlign: "end",
}

const workTitleStyleBottom: CSSProperties = {
  color: defaultColors.red.hex,
  textAlign: "start",
}

function GenerativeAlgorithm() {
  const font = useContext(FontsContext);
  const router = useRouter();
  const targetRef = useViewportFunction(() => {
    document.body.className = defaultColors.blue.bg;
  });
  const mainDiv = useRef(null);

  const showGenerativeAlgorithms = () => {
    (mainDiv.current! as HTMLDivElement).className = "grid slide-left";
    
    setTimeout(() => {
      router.push(Route.generativeAlgorithPage);
    }, 400);
  }
  const swipe = useSwipe({callback: () => showGenerativeAlgorithms()});


  return (<>
  <div onTouchStart={swipe.handleTouchStart} onTouchEnd={swipe.handleTouchEnd} id={Pages.generativeAlgorithm} style={{height:"inherit", display:"grid", alignContent:"space-between"}} ref={mainDiv}>
    <WorkTitle title={<>Organic geometry<br/>and behaviour<br/>fascinates me.</>} style={workTitleStyleTop} font={font.sans}/>
    <div className='story-cover'>
      <div className='arrow' ref={targetRef}/>
      <Suspense fallback={<div></div>}>
        <div style={{cursor:"pointer"}} onClick={() => showGenerativeAlgorithms()}>
          <PhoneMock src='generative-algorithm' className='phone-size'/>
        </div>
      </Suspense>
      <Arrow strokeColor={defaultColors.red.hex} stroke="1pt" orientation='right' className='arrow wave-opacity' onClick={() => showGenerativeAlgorithms()} />
    </div>
    <WorkTitle title={<>I&apos;ve designed<br/>growth-shrink<br/><span className='story-title-bold'>algorithms.</span></>} style={workTitleStyleBottom} font={font.sans}/>
  </div>
  </>
  )
}

export default GenerativeAlgorithm