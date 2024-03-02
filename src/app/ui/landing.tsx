import React from 'react'
import '@/styles/text.css'
import '@/styles/icon.css'
import { NextFont } from 'next/dist/compiled/@next/font';

interface LandingProps {
  font: NextFont;
}

function Landing(landingProps: LandingProps) {
  return (<>
  <div className={`landing ${landingProps.font.className}`}>
    <div className='main text-light-green'>
      Frontend
    </div>
    <div>
      Developer,
    </div>
    <div className='secondary text-yellow'>
    3D Design
    </div>
    <div>
    specialist,
    </div>
    <div className='tertiary text-red'>
    Generative
    </div>
    <div className='tertiary text-red'>
    algorithms
    </div>
    <div>
    explorer.
    </div>
  </div>
  </>)
}

export default Landing