'use client'

import { ReactNode, useEffect, useState } from "react"
import "@/styles/utils.css"
import "@/styles/window.css"

type WindowProps = {
  children: ReactNode,
  className?: string
}

function Window(props: WindowProps) {
  const [height, setHeight] = useState(window?.innerHeight ?? 1080);
  useEffect(() => {
    addEventListener("resize", () => setHeight(window?.innerHeight ?? 1080));
    return () => removeEventListener("resize", () => setHeight(window?.innerHeight ?? 1080));
  }, [])
  const [element, setElement] = useState(<></>);
  useEffect(() => {
    if(window) {
      setElement(<>
      <div className={props.className ?? ""} style={{height: height}}>
            {props.children}
          </div>
          </>)
    } else {
      setElement(<></>)
    }
  }, [window])
  
  return (
    <>
      {element}
    </>
  )
}

export default Window