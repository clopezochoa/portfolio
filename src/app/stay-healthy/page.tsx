'use client'

import Arrow from '@/app/ui/icons/arrow';
import React, { CSSProperties, lazy, Suspense, useContext, useEffect, useRef } from 'react'
import { WorkBody, WorkHeader } from '@/app/ui/work';
import { FontsContext } from '@/app/providers/fonts';
import '@/styles/icon.css'
import '@/styles/utils.css'
import { implementBody, designBody, initialBody, introBody, connectBody, processBody } from './content';
import { defaultColors } from '../../../tailwind.config';

const PhoneMock = lazy(() => import("@/app/ui/media/Video"));
const Diagram = lazy(() => import("@/app/ui/svg/Diagram"));
const Wireframe = lazy(() => import("@/app/ui/png/Wireframe"));

const mockStyle: CSSProperties = {
  marginLeft:"15px",
  marginRight:"45px",
  marginTop:"50px",
  marginBottom:"15px",
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

function StayHealthy() {
  const font = useContext(FontsContext);
  const mainDiv = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.document) {
      window.document.body.className = "bg-light-green";
    }
  }, [])


  const hideGenerativeAlgorithms = () => {
    (mainDiv.current! as HTMLDivElement).className = "text-purple slide-right";
    
    setTimeout(() => {
      history.back()
    }, 500);
  }

  return (<>
  <div ref={mainDiv} className='text-purple'>
    <Arrow
      strokeColor={defaultColors.dark}
      stroke="5pt"
      width={24}
      height={"auto"}
      orientation='left'
      className='arrow fixed bottom right'
      onClick={() => hideGenerativeAlgorithms()}
    />
    <div style={pageStyle}>
      <div style={workHeaderStyle}>
        <WorkHeader title='Go Full Stack' subtitle='To build an entire app' font={font.serif} />
      </div>
      <div style={workBodyStyle}>
        <WorkBody font={font.condensed} body={initialBody} />
      </div>
    </div>
    <div style={mockStyle}>
      <Suspense fallback={<div></div>}>
        <PhoneMock src='stay-healthy' className='phone-size'/>
      </Suspense>
    </div>
    <div style={pageStyle}>
      <div style={workHeaderStyle}>
        <WorkHeader title='' subtitle={<>Fast,<br/>easy.</>} font={font.serif} />
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
        <Wireframe src='card-doctor' className='wireframe-grid' margin='32px'/>
      </Suspense>
    </div>
      
    <div className='pt-10' style={pageStyle}>
      <div style={workHeaderStyle}>
        <WorkHeader title='Design' subtitle='Paint, shape, show.' font={font.serif} />
      </div>
    </div>
    <div className='pt-10 pb-10' style={mockStyle}>
      <Suspense fallback={<div></div>}>
        <Diagram src='design' className='phone-mock-rotate'/>
      </Suspense>
    </div>
    <div style={pageStyle}>
      <div style={workBodyStyle}>
        <WorkBody font={font.condensed} body={designBody} />
      </div>
    </div>
{/*     
    <div style={mockStyle}>
      <Suspense fallback={<div></div>}>
        <Wireframe src='card-doctor' className='wireframe-grid' margin='32px'/>
      </Suspense>
    </div>
    <div className='pt-10' style={pageStyle}>
      <div style={workHeaderStyle}>
        <WorkHeader title='Implement' subtitle='Services & Datasets' font={font.serif} />
      </div>
      <div style={workBodyStyle}>
        <WorkBody font={font.condensed} body={implementBody} />
      </div>
    </div>

    <div className='pt-10' style={pageStyle}>
      <div style={workHeaderStyle}>
        <WorkHeader title='Connect' subtitle='Make it happen' font={font.serif} />
      </div>
      <div style={workBodyStyle}>
        <WorkBody font={font.condensed} body={connectBody} />
      </div>
    </div> */}
  </div>

  </>
  )
}

export default StayHealthy