'use client'

import React, { CSSProperties, Suspense, lazy, useEffect, useRef } from 'react'
import '@/styles/icon.css'
import '@/styles/text.css'
import { defaultColors } from '../../../tailwind.config';
import Arrow from '../ui/icons/arrow';
import { useRouter } from 'next/navigation';
import { Route, getRouteGroup } from '@/lib/routeList';
import useScrollEvent from '../hooks/useScrollEvent'

const PhoneMock = lazy(() => import("@/app/ui/media/Video"));
const pageStyle: CSSProperties = {
  display: "grid",
  overflow:"hidden",
  alignItems: "center",
  position: "absolute",
  left: "0px",
  top:"0px",
}

const mockStyle: CSSProperties = {
  display: "grid",
  overflow:"hidden",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  left: "0px",
  top:"0px",
  backgroundColor:defaultColors.darkGreen
}

function GenerativeAlgorithm() {
  const router = useRouter();
  const routeGroup = getRouteGroup(Route.generativeAlgorithm);
  const page = useRef(null);
  const mock = useRef(null);

  useEffect(() => {
    if(page?.current) (page.current as HTMLDivElement).style.width = window?.innerWidth.toString() + "px";
    if(page?.current) (page.current as HTMLDivElement).style.height = window?.innerHeight.toString() + "px";
    if(mock?.current) (mock.current as HTMLDivElement).style.width = window?.innerWidth.toString() + "px";
    if(mock?.current) (mock.current as HTMLDivElement).style.height = window?.innerHeight.toString() + "px";
  }, [page, mock])

  useScrollEvent({
    pageUp: () => {router.push(routeGroup.up)},
    pageRight: () => {router.push(routeGroup.right)}});

  return (<>
  <div ref={page} style={pageStyle}>
    <div style={{display:"flex", width:"100%", justifyContent:"space-between", paddingInline:"15px"}}>
      <Arrow stroke="2pt" width={27} height={"auto"} orientation='left' className='arrow' onClick={() => router.push(routeGroup.left)} />
      <Arrow stroke="2pt" width={27} height={"auto"} orientation='right' className='arrow' onClick={() => router.push(routeGroup.right)} />
    </div>
  </div>

  <Arrow stroke="2pt" width={27} height={"auto"} orientation='up' className='arrow absolute top left' onClick={() => router.push(routeGroup.up)} />

  <div ref={mock} style={mockStyle}>
    <Suspense fallback={<div></div>}>
      <PhoneMock src='generative-algorithm' width={200} height={"auto"}/>
    </Suspense>
  </div>
  </>
  )
}

export default GenerativeAlgorithm