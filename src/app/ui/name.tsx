import React from 'react'
import '@/styles/text.css'
import { NextFont } from 'next/dist/compiled/@next/font'

interface NameProps {
  name: string;
  surname: string;
  font: NextFont;
}

function Name(nameProps: NameProps) {
  return (<>
  <div className='name-container text-clear'>
    <div className={`name ${nameProps.font.className}`}>
      <h1>{nameProps.name}</h1>
      <h2>{nameProps.surname}</h2>
    </div>
  </div>
  </>
  )
}

export default Name