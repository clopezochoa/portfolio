'use client'

import Arrow from '@/app/ui/icons/arrow';
import React, { CSSProperties, lazy, Suspense, useContext, useEffect, useRef } from 'react'
import { WorkBody, WorkHeader } from '@/app/ui/work';
import { FontsContext } from '@/app/providers/fonts';
import '@/styles/icon.css'
import '@/styles/utils.css'
import { defineBody, discoverBody, initialBody, introBody, modelBody, processBody, Section } from './texts';
import { defaultColors } from '../../../tailwind.config';
import { useRouter } from 'next/navigation';
import { Route } from '@/lib/routeList';
import useSwipe from '../hooks/useSwipe';
import { goBack } from '@/lib/utils';

const PhoneMock = lazy(() => import("@/app/ui/media/Video"));
const PrototypeDiagram = lazy(() => import("@/app/ui/svg/Diagram"));

const mockStyle: CSSProperties = {
  display:"flex",
  justifyContent:"center",
  marginInline:"15vw",
  marginBlock:"3rem"
}

const workHeaderStyle: CSSProperties = {
  marginBlock:"3rem",
  textAlign:"start",
  float:"inline-start"
}

const workBodyStyle: CSSProperties = {
  marginBottom:"3rem",
  textAlign:"start",
  float:"inline-start"
}

function Engine() {
  const font = useContext(FontsContext);
  const mainDiv = useRef(null);
  const textColor = defaultColors.clear.text;

  useEffect(() => {
    if (typeof window !== 'undefined' && window.document) {
      window.document.body.className = defaultColors.blue.bg;
    }
  }, [])

  const router = useRouter();

  const slideBack = () => {
    (mainDiv.current! as HTMLDivElement).className = `${textColor} slide-right`;
    goBack(router, 500, 100, Route.generativeAlgorithm);
  }

  const swipe = useSwipe({invert: true, callback: () => slideBack()});

  return (<>
  <div onTouchStart={swipe.handleTouchStart} onTouchEnd={swipe.handleTouchEnd} ref={mainDiv} className={textColor}>
    <Arrow strokeColor={defaultColors.clear.hex} stroke="1pt" orientation='left' className='arrow arrow-back fixed bottom right' onClick={() => slideBack()} />
    <div className='workPage'>
      <div style={workHeaderStyle}>
        <WorkHeader title='Generative Algorithm' subtitle='A robust way to convey growth' font={font.serif} />
      </div>
      <div style={workBodyStyle}>
        <WorkBody font={font.serif} body={initialBody} />
      </div>
    </div>
    <div style={mockStyle}>
      <Suspense fallback={<div></div>}>
        <PhoneMock src='prototype' className='phone-size-rotate'/>
      </Suspense>
    </div>
    <div className='workPage'>
      <div style={workHeaderStyle}>
        <WorkHeader title='' subtitle={<>Visualize data,<br/>get to know it.</>} font={font.serif} />
      </div>
      <div style={workBodyStyle}>
        <WorkBody font={font.serif} body={introBody} />
      </div>
      <div className='app-link-animation app-link-animation-red' style={workBodyStyle}>
        <WorkBody font={font.serif} body={processBody} />
      </div>
    </div>
    <div style={mockStyle}>
      <Suspense fallback={<div></div>}>
        <PrototypeDiagram src='prototype' className='phone-size-rotate'/>
      </Suspense>
    </div>
    
    <div id={Section.discover}  className='pt-10 workPage'>
      <div style={workHeaderStyle}>
        <WorkHeader title='Discover' subtitle='Finding common ground' font={font.serif} />
      </div>
    </div>
    <div className='pt-10 pb-10' style={mockStyle}>
      <Suspense fallback={<div></div>}>
        <PrototypeDiagram src='discover' className='phone-size-rotate'/>
      </Suspense>
    </div>
    <div className='workPage'>
      <div style={workBodyStyle}>
        <WorkBody font={font.serif} body={discoverBody} />
      </div>
    </div>
    
    <div id={Section.define}  className='pt-10 workPage'>
      <div style={workHeaderStyle}>
        <WorkHeader title='Define' subtitle='Ideas come true' font={font.serif} />
      </div>
      <div style={workBodyStyle}>
        <WorkBody font={font.serif} body={defineBody} />
      </div>
    </div>

    <div id={Section.model} className='pt-10 workPage'>
      <div style={workHeaderStyle}>
        <WorkHeader title='Model' subtitle='Giving an architecture to the system' font={font.serif} />
      </div>
      <div style={workBodyStyle}>
        <WorkBody font={font.serif} body={modelBody} />
      </div>
    </div>
  </div>
  </>
  )
}

export default Engine