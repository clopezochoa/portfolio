'use client'

import '@/styles/text.css'
import '@/styles/icon.css'

import React, { useContext } from 'react'
import Arrow from '@/app/ui/icons/arrow'
import { useRouter } from 'next/navigation';
import { FontsContext } from '../providers/fonts';

function AboutMe() {
  const router = useRouter();
  const fonts = useContext(FontsContext);

  return (<>
    <Arrow stroke="2pt" width={27} height={22} className='absolute top left' onClick={() => router.push('/what-i-do')}/>
    <Arrow stroke="2pt" width={27} height={22} className='absolute bottom right mirror' onClick={() => router.push('/')} />
    <div className={`about-me ${fonts.serif.className}`}>
      <h1 className='about-me-heading'>
        ¡Hola!
      </h1>
      <p className='about-me-p1'>
        Me llamo Carlos López-Ochoa.<br />
        Soy un Desarrollador Frontend<br />
        viviendo en Madrid, España.<br />
        Tengo experiencia como<br />
        diseñador 3D, diseñador<br />
        algorítmico y diseñador gráfico.
      </p>
      <div className='absolute bottom left grid'>
        <p className='about-me-p2'>
          Disfruto dando vida a mis ideas.<br />
          La mochila en la que guardo mis<br />
          experiencias más preciadas incluye<br />
          contenido gráfico y audiovisual.
        </p>
        <p className='about-me-p2'>
          Me caracterizan la filosofía GTD,<br />
          la crítica como herramienta<br />
          de diseño y mi predisposición<br />
          al continuo aprendizaje.
        </p>

      </div>
    </div>
  </>)
}

export default AboutMe;