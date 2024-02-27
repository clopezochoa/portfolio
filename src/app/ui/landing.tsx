import React from 'react'
import '@/styles/text.css'
import '@/styles/icon.css'
import { NextFont } from 'next/dist/compiled/@next/font';
import Arrow from './icons/arrow';
import { useRouter } from 'next/navigation';

interface LandingProps {
  font: NextFont;
}

function Landing(landingProps: LandingProps) {
  const router = useRouter();

  return (<>
  <Arrow width={98} height={80} stroke="1pt" className='absolute top left' onClick={() => router.push('/about-me')}/>
  <Arrow width={98} height={80} stroke="1pt" className='absolute bottom left mirror' />
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