import React from 'react'
import '@/styles/text.css'
import '@/styles/icon.css'
import { NextFont } from 'next/dist/compiled/@next/font';
import { defaultColors } from '../../../tailwind.config';
import Logo from './logo/logo';

interface LandingProps {
  font: NextFont;
}

function Landing(landingProps: LandingProps) {
  return (<>
  <div className={`landing ${landingProps.font.className}`}>
    <div className='main'>
      <div className='strip'>
        <Logo svgkey='angular'></Logo>
        <Logo svgkey='primeng'></Logo>
        <Logo svgkey='tailwind+angular'></Logo>
      </div>
      <span>Angular </span><span className='secondary'>senior developer,</span>
    </div>
    <div className='main'>
      <span>3D Design </span><span className='secondary'>consultant,</span>
    </div>
    <div className='main'>
      <div className='strip'>
        <Logo svgkey='react'></Logo>
        <Logo svgkey='tailwind'></Logo>
        <Logo svgkey='daisyui'></Logo>
      </div>
      <span>React & Tailwind </span><span className='secondary'>enthusiast.</span>
    </div>
  </div>
  </>)
}

export default Landing