'use client'

import Arrow from '@/app/ui/icons/arrow';
import React, { CSSProperties, lazy, Suspense, useContext, useEffect, useRef } from 'react'
import { WorkBody, WorkHeader } from '@/app/ui/work';
import { FontsContext } from '@/app/providers/fonts';
import '@/styles/icon.css'
import '@/styles/utils.css'
import { implementBody, designBody, initialBody, introBody, connectBody, processBody } from './content';
import { defaultColors } from '../../../tailwind.config';
import { useRouter } from 'next/navigation';
import { Route } from '@/lib/routeList';

const PhoneMock = lazy(() => import("@/app/ui/media/Video"));
const Diagram = lazy(() => import("@/app/ui/svg/Diagram"));
const Wireframe = lazy(() => import("@/app/ui/png/Wireframe"));

const mockStyle: CSSProperties = {
display:"flex",
  justifyContent:"center",
  marginInline:"15vw",
  marginBlock:"3rem"
}

const pageStyle:CSSProperties={
  display:"grid",
  position:"relative",
  zIndex:"1",
  justifyItems:"start",
  marginInline:"15vw",
  marginTop:"3rem"
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

const arrowSize = 100;

function StayHealthy() {
  const font = useContext(FontsContext);
  const mainDiv = useRef(null);
  const textColor = defaultColors.clear.text;

  useEffect(() => {
    if (typeof window !== 'undefined' && window.document) {
      window.document.body.className = defaultColors.green.bg;
    }
  }, [])

  const router = useRouter();

  const slideBack = () => {
    (mainDiv.current! as HTMLDivElement).className = `${textColor} slide-right`;
    
    setTimeout(() => {
      router.push(Route.frontend, {
        scroll: true
      })
    }, 500);
  }

  return (<>
  <div ref={mainDiv} className={textColor}>
    <Arrow
      strokeColor={defaultColors.clear.hex}
      stroke="1pt"
      width={"auto"}
      height={arrowSize}
      orientation='left'
      className='arrow fixed bottom right'
      onClick={() => slideBack()}
    />
    <div style={pageStyle}>
      <div style={workHeaderStyle}>
        <WorkHeader title='Go Full Stack' subtitle='To build an entire app' font={font.serif} />
      </div>
      <div style={workBodyStyle}>
        <WorkBody font={font.serif} body={initialBody} />
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
        <WorkBody font={font.serif} body={introBody} />
      </div>
      <div style={workBodyStyle}>
        <WorkBody font={font.serif} body={processBody} />
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
        <WorkBody font={font.serif} body={designBody} />
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
        <WorkBody font={font.serif} body={implementBody} />
      </div>
    </div>

    <div className='pt-10' style={pageStyle}>
      <div style={workHeaderStyle}>
        <WorkHeader title='Connect' subtitle='Make it happen' font={font.serif} />
      </div>
      <div style={workBodyStyle}>
        <WorkBody font={font.serif} body={connectBody} />
      </div>
    </div> */}
  </div>

  </>
  )
}

export default StayHealthy