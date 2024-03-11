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
import { useViewportFunction } from "../hooks/useViewport";

export function Greeting(){
  const font = useContext(FontsContext);
  return (
    <>
      <div className={`about-me ${font.serif.className}`}>
        <h1 className='about-me-heading'>
          ¡Hola!
        </h1>
        <div className="mt-10 flex-center">
          <p className='about-me-p1'>
            Me llamo Carlos López-Ochoa.<br />
            Soy un Desarrollador Frontend<br />
            viviendo en Madrid, España.<br />
            <br />
            Tengo experiencia como<br />
            diseñador 3D, diseñador<br />
            algorítmico y diseñador gráfico.
          </p>
          <div className='grid'>
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
      </div>
    </>
  )
}

export function WhatIDo(){
  const font = useContext(FontsContext);
  const targetRef = useViewportFunction(() => {
    document.body.className = defaultColors.clear.bg;
  });

  return (
    <>
      <div className="what-i-do-container">
        <ul className={`story-body-bold ${defaultColors.dark.text} about-list ${font.condensed.className}`}>
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
        <div style={{
          height: "auto",
          display: "grid",
          alignContent: "space-between"
        }}>
          <div className='about-icon-container' >
            <Link href={process.env.LINKTREE ?? "/."}>
              <Linktree className='about-icon' color={defaultColors.dark.hex} ></Linktree>
            </Link>
            <Link href={process.env.LINKEDIN ?? "/."}>
              <Linkedin className='about-icon' color={defaultColors.dark.hex} ></Linkedin>
            </Link>
          </div>
          <div ref={targetRef} className='contact-button' >
            <a className={`${defaultColors.dark.text} story-body-bold ` + font.condensed.className} href={process.env.EMAIL ?? "/."}>
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </>
    )
  }