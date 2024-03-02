'use client'

import { CSSProperties, useContext, useEffect, useRef, useState } from "react"
import { FontsContext } from "../providers/fonts"
import Link from "next/link";
import { defaultColors } from "../../../tailwind.config";
import Linkedin from "../ui/icons/linkedin";
import Linktree from "../ui/icons/linktree";
import '@/styles/button.css'
import '@/styles/icon.css'
import '@/styles/text.css'

export function Greeting(){
  const font = useContext(FontsContext);
  return (
    <>
      <div className={`about-me ${font.serif.className}`}>
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
    </>
  )
}

export function WhatIDo(){
  const font = useContext(FontsContext);
  const ref = useRef(null);
  const [style, setStyle] = useState<CSSProperties>();

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

  return (
    <>
      <ul ref={ref} className={'ms-5 mt-16 story-body-bold text-clear about-list ' + font.condensed.className}>
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
      <div>
        <div style={style} className='contact-icon' >
          <Link href={process.env.LINKTREE ?? "/."}>
            <Linktree className='' width={42} height={"auto"} color={defaultColors.clear} ></Linktree>
          </Link>
          <Link href={process.env.LINKEDIN ?? "/."}>
            <Linkedin className='' width={42} height={"auto"} color={defaultColors.clear} ></Linkedin>
          </Link>
        </div>
        <div style={style} className='contact-button' >
          <a className={'text-clear story-body-bold ' + font.condensed.className} href={process.env.EMAIL ?? "/."}>
            Contact Me
          </a>
        </div>
      </div>
    </>
    )
  }