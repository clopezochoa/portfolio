'use client'

import { ReactNode, useEffect, useState } from "react"
import "@/styles/utils.css"
import "@/styles/window.css"

type WindowProps = {
  children: ReactNode,
  className?: string
}

function Window(props: WindowProps) {
  const [height, setHeight] = useState(1080);
  const setHeightProtected = () => {
    if(typeof window !== 'undefined') {
      setHeight(window?.innerHeight ?? 1080)
    }
  }
  useEffect(() => {
    addEventListener("resize", () => {
      if(typeof window !== 'undefined') {
        setHeight(window?.innerHeight ?? 1080)
      }
    });
    return () => removeEventListener("resize", () => setHeight(window?.innerHeight ?? 1080));
  }, [])
  addEventListener("resize", () => setHeightProtected());
  
  return (
    <>
      {
        typeof window !== 'undefined' ? 
          <div className={props.className ?? ""} style={{height: height}}>
            {props.children}
          </div>
        :
        null
      }
    </>
  )
}

export default Window