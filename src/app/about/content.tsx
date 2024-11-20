'use client'

import { useContext, useLayoutEffect,useState } from "react"
import { FontsContext } from "../providers/fonts"
import Link from "next/link";
import { defaultColors } from "../../../tailwind.config";
import Linkedin from "../ui/icons/linkedin";
import Linktree from "../ui/icons/linktree";
import '@/styles/button.css'
import '@/styles/icon.css'
import '@/styles/text.css'
import { useViewportFunction } from "../hooks/useViewport";
import { Pages } from '@/lib/routeList';

export function Greeting(){
  const textCarousel = [
    'Data Visualization',
    'Graphic Design',
    'Algorithmic Design',
    'Generative Design',
    'Game Development',
    'Virtual Reality',
    'Augmented Reality',
    'Agile',
    'Projection mapping',
    '3D Printing',
  ];
  const font = useContext(FontsContext);
  const [currentText, setCurrentText] = useState(textCarousel[0]);
  const highlight = (content: React.JSX.Element) => {
    return(
      <span className="text-highlight-white">
        {content}
      </span>
    )
  }


  const changeText = () => {
    setCurrentText((prev) => {
      const currentIndex = textCarousel.indexOf(prev);
      var nextIndex = currentIndex;
      var tries = 0;
      const maxTries = 5;
      while(currentIndex === textCarousel.indexOf(prev) && tries < maxTries){
        nextIndex = Math.floor(Math.random() * textCarousel.length);
        tries++;
      }
      if(tries === maxTries){
        nextIndex = currentIndex + 1 > textCarousel.length - 1 ? 0 : currentIndex + 1;
      }
      return textCarousel[nextIndex];
    });
  };

  useLayoutEffect(() => {
    const interval = setInterval(changeText, 1000);
    return () => clearInterval(interval);
  }, []);
  
  var content = [
    <>
      My name is Carlos López-Ochoa. <br />
      I&apos;m a <strong>Frontend</strong> Developer
      based in Madrid, Spain. <br />
    </>,
    <>
      Additionally, I have experience in <strong>{currentText}</strong>.
    </>,
    <>
      I find great joy in bringing my ideas to life. <br />
      My projects typically share two common traits.<br />
      They feature <strong>graphic content.</strong> <br />
      They unfold as <strong>visual experiences.</strong> <br />
    </>,
    <>
      Psychological traits of mine are utilizing<br />
      criticism as a desing tool and having a<br />
      proclivity for learning every detail.<br />
    </>,
  ]

  content = content.map(element => {
    return highlight(element);
  });
  

  return (
    <>
      <div id={Pages.about} className={`about-me ${font.serif.className}`}>
        <h1 className='about-me-heading'>
          ¡Hola!
        </h1>
        <div style={{height:"2rem"}}></div>
        <div className="flex-center">
          <div className='grid sm:min-w-[42rem]'>
            <p className='about-me-p1'>
              {content[0]}
              <br />
              {content[1]}
            </p>
            <div className="h-0 sm:h-8"></div>
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
          <li className="text-green">
            Frontend Development
          </li>
          <li className="text-red">
            Generative Design
          </li>
          <li className="text-yellow">
            Virtual & Augmented Reality
          </li>
          <li className="text-medium">
            Scrum & Agile
          </li>
          <li className="text-blue">
            English - Advanced (C1.2)
          </li>
        </ul>
        <div className="h-auto flex sm:grid w-full mx-10 justify-between z-[1]">
          <div className='about-icon-container' >
            <Link href={process.env.LINKTREE ?? "/."}>
              <Linktree className='about-icon max-w-8 lg:max-w-20' color={defaultColors.dark.hex} ></Linktree>
            </Link>
            <Link href={process.env.LINKEDIN ?? "/."}>
              <Linkedin className='about-icon max-w-8 lg:max-w-20' color={defaultColors.dark.hex} ></Linkedin>
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