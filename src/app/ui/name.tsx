import React from 'react'
import '@/styles/text.css'
import { NextFont } from 'next/dist/compiled/@next/font'
import { useViewportClass } from "@/app/hooks/useViewport";

interface NameProps {
  name: string;
  surname: string;
  font: NextFont;
}

function Name(nameProps: NameProps) {
  const nameRef = useViewportClass("dark-bg");
  return (<>
  <div ref={nameRef} className='name-container text-clear'>
    <div className={`name ${nameProps.font.className}`}>
      <h1>{nameProps.name}</h1>
      <h2>{nameProps.surname}</h2>
    </div>
  </div>
  </>
  )
}

export default Name