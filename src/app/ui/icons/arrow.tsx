import React from 'react'
import { CSSProperties } from "react";

function Arrow({className, width, height, stroke, onClick}:{className:string, width:number | string, height:number | string, stroke:string, onClick?:() => void}) {
  const style: CSSProperties   = {
    fill: "none",
    stroke: "#E8E8E8",
    strokeLinecap: "round",
    strokeMiterlimit: "10",
    strokeWidth: stroke,
    width: width === "auto" ? "auto" : width.toString() + "px",
    height: height === "auto" ? "auto" : height.toString() + "px",
  }
  return (
    <div onClick={onClick} className={className}>
      <svg style={style} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98.3 79.72">
        <path d="M49.15.5c0,26.87-21.78,48.65-48.65,48.65"/>
        <path d="M49.15.5c0,26.87,21.78,48.65,48.65,48.65"/>
        <line x1="49.15" y1=".5" x2="49.15" y2="79.22"/>
      </svg>
    </div>

  )
}

export default Arrow