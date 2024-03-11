import React from 'react'
import '@/styles/text.css'
import '@/styles/icon.css'
import { NextFont } from 'next/dist/compiled/@next/font';
import { defaultColors } from '../../../tailwind.config';

interface LandingProps {
  font: NextFont;
}

function Landing(landingProps: LandingProps) {
  return (<>
  <div className={`landing ${landingProps.font.className}`}>
    <div className='main'>
      <span className={`${defaultColors.green.text}`}>Frontend </span><span>developer,</span>
    </div>
    <div className='secondary'>
      <span className={`${defaultColors.yellow.text}`}>3D Design </span><span>specialist,</span>
    </div>
    <div className='tertiary'>
      <span className={`${defaultColors.red.text}`}>Generative Algorithms </span><span>explorer.</span>
    </div>
  </div>
  </>)
}

export default Landing