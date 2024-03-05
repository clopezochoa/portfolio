'use client'

import Arrow from '@/app/ui/icons/arrow';
import React, { CSSProperties, lazy, Suspense, useContext, useEffect, useRef } from 'react'
import { WorkBody, WorkHeader } from '@/app/ui/work';
import { FontsContext } from '@/app/providers/fonts';
import '@/styles/icon.css'
import '@/styles/utils.css'
import { initialBody } from './content';
import { defaultColors } from '../../../tailwind.config';

const PhoneMock = lazy(() => import("@/app/ui/media/Video"));

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
  </div>
  </>
  )
}

export default StayHealthy