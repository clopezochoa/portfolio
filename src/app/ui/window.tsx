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
    if(typeof window !== 'undefined' && window.document) {
      setHeight(window?.innerHeight ?? 1080)
    }
  }
  useEffect(() => {
    addEventListener("resize", () => setHeightProtected());
    return () => removeEventListener("resize", () => setHeightProtected());
  }, [])
  const [element, setElement] = useState(<></>);
  useEffect(() => {
    if(typeof window !== 'undefined' && window.document) {
      setElement(<>
      <div className={props.className ?? ""} style={{height: height}}>
            {props.children}
          </div>
          </>)
    } else {
      setElement(<></>)
    }
  }, [])
  
  return (
    <>
      {element}
    </>
  )
}

export default Window