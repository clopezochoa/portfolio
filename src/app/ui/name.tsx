import React from 'react'
import '@/styles/text.css'
import { NextFont } from 'next/dist/compiled/@next/font'
import { useViewportClass } from "@/app/hooks/useViewport";
import { defaultColors } from '../../../tailwind.config';

interface NameProps {
  name: string;
  surname: string;
  font: NextFont;
}

function Name(nameProps: NameProps) {
  const nameRef = useViewportClass(defaultColors.dark.bg);
  return (<>
  <div ref={nameRef} className={`name-container ${defaultColors.clear.text}`}>
    <div className={`name ${nameProps.font.className}`}>
      <h1>{nameProps.name}</h1>
      <h2>{nameProps.surname}</h2>
    </div>
  </div>
  </>
  )
}

export default Name