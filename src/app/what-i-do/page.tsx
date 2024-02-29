'use client'

import React, { CSSProperties, useContext, useEffect, useRef, useState } from 'react'
import Arrow from '@/app/ui/icons/arrow'
import { useRouter } from 'next/navigation';
import '@/styles/text.css'
import '@/styles/icon.css'
import '@/styles/button.css'
import { FontsContext } from '../providers/fonts';
import Linktree from '../ui/icons/linktree';
import { defaultColors } from '../../../tailwind.config';
import Link from 'next/link';
import Linkedin from '../ui/icons/linkedin';
import useScrollEvent from '../hooks/useScrollEvent';
import { Route, getRouteGroup } from '@/lib/routeList';

function WhatIDo() {
  const router = useRouter();
  const fonts = useContext(FontsContext);
  const ref = useRef(null);
  const [style, setStyle] = useState<CSSProperties>();
  const routeGroup = getRouteGroup(Route.whatIDo);

  useScrollEvent({pageDown: () => {router.push(routeGroup.down)}});


  useEffect(() => {
    if(ref?.current){
      const iconContainer: CSSProperties = {
        display: "flex",
        justifyContent:"space-evenly",
        alignItems: "center",
        width: ((ref.current as HTMLElement).clientWidth + 20).toString() + "px",
      }
      setStyle(iconContainer)
    }
  }, [ref?.current])

  return (<>
    <Arrow stroke="2pt" width={24} height={"auto"} orientation='down' className='arrow absolute bottom right' onClick={() => router.push(routeGroup.down)} />
    <ul ref={ref} className={'ms-5 mt-16 story-body-bold text-clear about-list ' + fonts.condensed.className}>
      <li>
        Frontend Development
      </li>
      <li>
        Generative Design
      </li>
      <li>
        Graphic Design
      </li>
      <li>
        Scrum & Agile
      </li>
      <li>
        English - Advanced (C1.2)
      </li>
    </ul>
    <div className='absolute bottom left'>
      <div style={style} className='contact-icon' >
        <Link href={process.env.LINKTREE ?? "/."}>
          <Linktree className='' width={42} height={"auto"} color={defaultColors.clear} ></Linktree>
        </Link>
        <Link href={process.env.LINKEDIN ?? "/."}>
          <Linkedin className='' width={42} height={"auto"} color={defaultColors.clear} ></Linkedin>
        </Link>
      </div>
      <div style={style} className="contact-button" >
        <a className={'story-body-bold ' + fonts.condensed.className} href={process.env.EMAIL ?? "/."}>
          Contact Me
        </a>
      </div>
    </div>
  </>)
}

export default WhatIDo