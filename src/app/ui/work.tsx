import { NextFont } from 'next/dist/compiled/@next/font';
import '@/styles/text.css'
import React, { CSSProperties } from 'react'

interface WorkTitleProps {
  title: string | React.JSX.Element;
  font: NextFont;
  style: CSSProperties;
}

export function WorkTitle(workTitleProps: WorkTitleProps) {
  return (<>
    <div style={workTitleProps.style} className={`story-title-main ${workTitleProps.font.className}`}>
      <h1>{workTitleProps.title}</h1>
    </div>
  </>)
}

interface WorkHeaderProps {
  title: string;
  subtitle: string | React.JSX.Element;
  font: NextFont;
}

export function WorkHeader(workHeaderProps: WorkHeaderProps) {
  return (<>
    <div className={`work ${workHeaderProps.font.className}`}>
      <h1>{workHeaderProps.title}</h1>
      <h2 className='mt-2'>{workHeaderProps.subtitle}</h2>
    </div>
  </>)
}

interface WorkBodyProps {
  body: Array<string | React.JSX.Element>;
  font: NextFont;
}

export function WorkBody(workBodyProps: WorkBodyProps) {
  return (<>
  <div className={'work-body-container story-body-main ' + workBodyProps.font.className} >
    {workBodyProps.body.map((item, key) => 
        <div key={key} style={{marginTop:"20pt"}}>{item}</div>
    )}
  </div>
  </>)
}