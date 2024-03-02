'use client'

import '@/styles/icon.css'
import '@/styles/text.css'
import '@/styles/utils.css'

import React, { CSSProperties, Suspense, lazy, useContext, useEffect, useRef } from 'react'
import { defaultColors } from '../../../tailwind.config';
import Arrow from '../ui/icons/arrow';
import { useRouter } from 'next/navigation';
import { Route, getRouteGroup } from '@/lib/routeList';
import { WorkTitle } from '../ui/work';
import { FontsContext } from '../providers/fonts';
import { useViewportClass } from '../hooks/useViewport'


const PhoneMock = lazy(() => import("@/app/ui/media/Video"));

const workTitleStyleTop: CSSProperties = {
  color: defaultColors.red,
  textAlign: "end",
  marginTop:"30px",
  marginRight:"15px",
  marginLeft:"50px",
}

const workTitleStyleBottom: CSSProperties = {
  color: defaultColors.cream,
  textAlign: "start",
  marginRight:"50px",
  marginLeft:"15px",
  marginBottom:"30px"
}

function GenerativeAlgorithm() {
  const font = useContext(FontsContext);
  const router = useRouter();
  const routeGroup = getRouteGroup(Route.generativeAlgorithm);
  const phoneRef = useViewportClass("dark-green-bg");

  return (<>
  <WorkTitle title={<>Organic geometry<br/>and behaviour<br/>fascinates me.</>} style={workTitleStyleTop} font={font.sans}/>
  <div className='story-cover' ref={phoneRef}>
    <Arrow stroke="2pt" width={27} height={"auto"} orientation='left' className='arrow left' onClick={() => router.push(routeGroup.left)} />
    <Suspense fallback={<div></div>}>
      <PhoneMock src='generative-algorithm' className='phone-size'/>
    </Suspense>
  </div>
  <WorkTitle title={<>I&apos;ve designed<br/>growth-shrink<br/><span className='story-title-bold'>algorithms.</span></>} style={workTitleStyleBottom} font={font.sans}/>
  </>
  )
}

export default GenerativeAlgorithm