import React from 'react'
import '@/styles/text.css'
import '@/styles/icon.css'
import { NextFont } from 'next/dist/compiled/@next/font';
import { useRouter } from 'next/navigation';

interface LandingProps {
  font: NextFont;
}

function Landing(landingProps: LandingProps) {
  return (<>
  <div className={`landing ${landingProps.font.className}`}>
    <div className='main'>
      Frontend
    </div>
    <div>
      Developer,
    </div>
    <div className='secondary'>
    3D Design
    </div>
    <div>
    specialist,
    </div>
    <div className='tertiary'>
    Generative
    </div>
    <div className='tertiary'>
    algorithms
    </div>
    <div>
    explorer.
    </div>
  </div>
  </>)
}

export default Landing