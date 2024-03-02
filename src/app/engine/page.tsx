'use client'

import Arrow from '@/app/ui/icons/arrow';
import React, { CSSProperties, lazy, Suspense, useContext, useEffect, useRef } from 'react'
import { WorkBody, WorkHeader } from '@/app/ui/work';
import { FontsContext } from '@/app/providers/fonts';
import '@/styles/icon.css'
import '@/styles/utils.css'
import { defineBody, discoverBody, initialBody, introBody, modelBody, processBody } from './content';

const PhoneMock = lazy(() => import("@/app/ui/media/Video"));
const PrototypeDiagram = lazy(() => import("@/app/ui/svg/Diagram"));

const mockStyle: CSSProperties = {
  marginLeft:"15px",
  marginRight:"45px",
  marginTop:"5px",
  marginBottom:"15px"
}

const pageStyle:CSSProperties={
  display:"grid",
  position:"relative",
  zIndex:"1",
  justifyItems:"start",
  marginLeft:"15px",
  marginBlock:"15px"
}

const workHeaderStyle: CSSProperties = {
  marginTop:"-5px",
  textAlign:"start",
  float:"inline-start"
}

const workBodyStyle: CSSProperties = {
  marginTop:"5px",
  marginRight:"45px",
  textAlign:"start",
  float:"inline-start"
}

function Engine() {
  const font = useContext(FontsContext);
  const mainDiv = useRef(null);

  useEffect(() => {
    document.body.className = "dark-bg";
  }, [document])


  const hideGenerativeAlgorithms = () => {
    (mainDiv.current! as HTMLDivElement).className = "slide-left";
    
    setTimeout(() => {
      history.back()
    }, 500);
  }

  return (<>
  <div ref={mainDiv} className=''>
    <Arrow stroke="2pt" width={24} height={"auto"} orientation='right' className='arrow fixed bottom right' onClick={() => hideGenerativeAlgorithms()} />
    <div style={pageStyle}>
      <div style={workHeaderStyle}>
        <WorkHeader title='Generative Algorithm' subtitle='A robust way to convey growth' font={font.serif} />
      </div>
      <div style={workBodyStyle}>
        <WorkBody font={font.condensed} body={initialBody} />
      </div>
    </div>
    <div style={mockStyle}>
      <Suspense fallback={<div></div>}>
        <PhoneMock src='prototype' className='phone-size-rotate'/>
      </Suspense>
    </div>
    <div style={pageStyle}>
      <div style={workHeaderStyle}>
        <WorkHeader title='' subtitle={<>Visualize data,<br/>get to know it.</>} font={font.serif} />
      </div>
      <div style={workBodyStyle}>
        <WorkBody font={font.condensed} body={introBody} />
      </div>
      <div style={workBodyStyle}>
        <WorkBody font={font.condensed} body={processBody} />
      </div>
    </div>
    <div style={mockStyle}>
      <Suspense fallback={<div></div>}>
        <PrototypeDiagram src='prototype' className='phone-size-rotate'/>
      </Suspense>
    </div>
    
    <div className='pt-10' style={pageStyle}>
      <div style={workHeaderStyle}>
        <WorkHeader title='Discover' subtitle='Finding common ground' font={font.serif} />
      </div>
    </div>
    <div className='pt-10 pb-10' style={mockStyle}>
      <Suspense fallback={<div></div>}>
        <PrototypeDiagram src='discover' className='phone-size-rotate'/>
      </Suspense>
    </div>
    <div style={pageStyle}>
      <div style={workBodyStyle}>
        <WorkBody font={font.condensed} body={discoverBody} />
      </div>
    </div>
    
    <div className='pt-10' style={pageStyle}>
      <div style={workHeaderStyle}>
        <WorkHeader title='Define' subtitle='Ideas come true' font={font.serif} />
      </div>
      <div style={workBodyStyle}>
        <WorkBody font={font.condensed} body={defineBody} />
      </div>
    </div>

    <div className='pt-10' style={pageStyle}>
      <div style={workHeaderStyle}>
        <WorkHeader title='Model' subtitle='Giving an architecture to the system' font={font.serif} />
      </div>
      <div style={workBodyStyle}>
        <WorkBody font={font.condensed} body={modelBody} />
      </div>
    </div>
  </div>
  </>
  )
}

export default Engine