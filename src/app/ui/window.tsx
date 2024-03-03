'use client'

import { ReactNode, useEffect, useState } from "react"
import "@/styles/utils.css"
import "@/styles/window.css"
import { useIsClient } from "../providers/cleint"

type WindowProps = {
  children: ReactNode,
  className?: string
}

function Window(props: WindowProps) {
  const [height, setHeight] = useState(1080);
  const isClient = useIsClient();
  const setHeightProtected = () => {
    if(typeof window !== 'undefined') {
      setHeight(window?.innerHeight ?? 1080)
    }
  }
  useEffect(() => {
    addEventListener("resize", () => setHeightProtected());
    return () => removeEventListener("resize", () => setHeightProtected());
  }, [])

  useEffect(() => {
    setHeightProtected();
  }, [isClient])
  
  return (
    <>
      {
        isClient ? 
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