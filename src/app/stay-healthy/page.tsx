'use client'

import Arrow from '@/app/ui/icons/arrow';
import React, { CSSProperties, lazy, Suspense, useContext, useEffect, useRef, useState } from 'react'
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

const shadow: CSSProperties = {
  WebkitBoxShadow: "10px 10px 35px -15px rgba(0,0,0,0.4)",
  MozBoxShadow: "10px 10px 35px -15px rgba(0,0,0,0.4)",
  boxShadow: "10px 10px 35px -15px rgba(0,0,0,0.4)",
  borderRadius: "25px 25px 25px 25px",
  MozBorderRadius: "25px 25px 25px 25px",
  WebkitBorderRadius: "25px 25px 25px 25px",
  border: "0px solid #000000"
}

const arrowSize = 100;

const cardElementCount = 4;
const tipElementCount = 2;

function StayHealthy() {
  const font = useContext(FontsContext);
  const mainDiv = useRef(null);
  const textColor = defaultColors.clear.text;
  const [width, setWidth] = useState(0);
  const [cardCount, setCardCount] = useState(0);
  const [tipCount, setTipCount] = useState(0);
  const [servicesVersion, setServicesVersion] = useState(1);
  const [cardWireframe, setCardWireframe] = useState<CSSProperties>({
    columnCount: 4
  });
  const [tipWireframe, setTipWireframe] = useState<CSSProperties>({
    columnCount: 2
  });
  
  useEffect(() => {
    if (typeof window !== 'undefined' && window.document) {
      window.document.body.className = defaultColors.green.bg;
      setWidth(window.innerWidth);
      addEventListener("resize", () => {
        setWidth(window.innerWidth);
      })
    }
  }, []);

  const counters = [
    setCardCount,
    setTipCount
  ];
  const elementCounts = [
    cardElementCount,
    tipElementCount
  ]

  function scaleCount(scale:number = 1, force?:number) {
    if(force){
      counters.forEach(counter => counter(force));
    } else {
      counters.forEach((counter, index) => counter(() => elementCounts[index]*scale));
    }
  }

  useEffect(() => {
    const bigScreen = width >= 1000;
    const smallScreen = width < 640;
    if(bigScreen) {
      scaleCount();
      setServicesVersion(1);
    } else if (smallScreen) {
      scaleCount(1, 1);
      setServicesVersion(2);
    } else {
      scaleCount(0.5);
      setServicesVersion(3);
    }
  }, [width]);

  useEffect(() => {
    setCardWireframe({
      columnCount: cardCount
    });
    setTipWireframe({
      columnCount: tipCount
    })
  }, [cardCount, tipCount])
  

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
        <Wireframe itemStyle={{}} containerStyle={cardWireframe} format='png' count={cardElementCount} src='card-doctor' margin='32px'/>
      </Suspense>
    </div>
      
    <div className='pt-10' style={pageStyle}>
      <div style={workHeaderStyle}>
        <WorkHeader title='Design' subtitle='Paint, shape, show.' font={font.serif} />
      </div>
    </div>
    <div style={pageStyle}>
      <div style={workBodyStyle}>
        <WorkBody font={font.serif} body={designBody} />
      </div>
    </div>
    <div className='pt-10 pb-10' style={mockStyle}>
      <Suspense fallback={<div></div>}>
        <Diagram src='design' className='phone-mock-rotate'/>
      </Suspense>
    </div>

    <div className='pt-10' style={pageStyle}>
      <div style={workHeaderStyle}>
        <WorkHeader title='Implement' subtitle='Solve the puzzle.' font={font.serif} />
      </div>
    </div>
    <div style={pageStyle}>
      <div style={workBodyStyle}>
        <WorkBody font={font.serif} body={implementBody} />
      </div>
    </div>
    <div className='pt-10 pb-10' style={mockStyle}>
      <Suspense fallback={<div></div>}>
        <Wireframe containerStyle={tipWireframe} itemStyle={shadow} format='svg' count={tipElementCount} src='tips' margin='32px'/>
      </Suspense>
    </div>

    <div className='pt-10' style={pageStyle}>
      <div style={workHeaderStyle}>
        <WorkHeader title='Connect' subtitle='Wire it up.' font={font.serif} />
      </div>
    </div>
    <div style={pageStyle}>
      <div style={workBodyStyle}>
        <WorkBody font={font.serif} body={connectBody} />
      </div>
    </div>
    <div className='pt-10 pb-10' style={mockStyle}>
      <Suspense fallback={<div></div>}>
        <Wireframe pick={servicesVersion} containerStyle={{maxWidth:"800px"}} itemStyle={{}} format='svg' count={3} src='services' margin='32px'/>
      </Suspense>
    </div>
  </div>
  </>
  )
}

export default StayHealthy