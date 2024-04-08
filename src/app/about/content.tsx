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
  const highlight = (content: React.JSX.Element) => {
    return(
      <span className="text-highlight-white">
        {content}
      </span>
    )
  }
  var content = [
    <>
      My name is Carlos López-Ochoa. <br />
      I&apos;m a Frontend Developer
      based in Madrid, Spain. <br />
    </>,
    <>
      Additionally, I have experience as a
      3D Artist, Graphic Designer
      and Algorithmic Designer.
    </>,
    <>
      I find great joy in bringing my ideas to life. <br />
      My projects typically share two common traits.<br />
      They feature graphic content. <br />
      They unfold as visual experiences. <br />
    </>,
    <>
      Psychological traits of mine are utilizing
      criticism as a desing tool and having a
      proclivity for learning every detail.<br />
    </>,
  ]

  content = content.map(element => {
    return highlight(element);
  });
  

  return (
    <>
      <div className={`about-me ${font.serif.className}`}>
        <h1 className='about-me-heading'>
          ¡Hola!
        </h1>
        <div className="flex-center">
          <p className='about-me-p1'>
            {content[0]}
            <br />
            {content[1]}
          </p>
          <div className='grid'>
            <p className='about-me-p2'>
              {content[2]}
            </p>
            <p className='about-me-p2'>
              {content[3]}
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
            Virtual & Augmented Reality
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
          alignContent: "space-between",
          zIndex: "1"
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