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
import { useViewportClass } from '../hooks/useViewport'
import useSwipe from '../hooks/useSwipe'

const PhoneMock = lazy(() => import("@/app/ui/media/Video"));

const workTitleStyleTop: CSSProperties = {
  color: defaultColors.yellow.hex,
  textAlign: "end",
}

const workTitleStyleBottom: CSSProperties = {
  color: defaultColors.yellow.hex,
  textAlign: "start",
}

function FrontendDevelopment() {
  const font = useContext(FontsContext);
  const router = useRouter();
  const targetRef = useViewportClass(defaultColors.green.bg);
  const mainDiv = useRef(null);
  const showStayHealthy = () => {
    (mainDiv.current! as HTMLDivElement).className = "grid slide-left";
    
    setTimeout(() => {
      router.push(Route.frontendPage);
    }, 400);
  }
  const swipe = useSwipe({callback: () => showStayHealthy()});

  return (<>
  <div onTouchStart={swipe.handleTouchStart} onTouchEnd={swipe.handleTouchEnd} id={Pages.frontend} style={{height:"inherit", display:"grid", alignContent:"space-between"}} ref={mainDiv}>
    <WorkTitle title={<>
      I&apos;ve worked with<br/>
      <span className='bold'>Angular</span> and<br/>
      <span className='bold'>TypeScript.</span>
    </>} style={workTitleStyleTop} font={font.sans}/>
    <div className='story-cover'>
      <div className='arrow' ref={targetRef}/>
      <Suspense fallback={<div></div>}>
      <div style={{cursor:"pointer"}} onClick={() => showStayHealthy()}>
        <PhoneMock src='stay-healthy' className='phone-size'/>
      </div>
      </Suspense>
      <Arrow strokeColor={defaultColors.yellow.hex} stroke="1pt" orientation='right' className='arrow wave-opacity' onClick={() => showStayHealthy()} />
    </div>
    <WorkTitle title={<>
      And recently<br/>
      shifted to<br/>
      <span className='bold'>Next</span> and <span className='bold'>Mongo.</span>
    </>} style={workTitleStyleBottom} font={font.sans}/>
  </div>
  </>
  )
}

export default FrontendDevelopment