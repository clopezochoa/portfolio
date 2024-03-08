import React from 'react'
import { CSSProperties } from "react";

function Linktree({className, color, onClick}:{className:string, color: string, onClick?:() => void}) {
  return (
    <div onClick={onClick} className={className}>
      <svg id="Layer_1" data-name="Layer 1" fill={color} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 982">
        <title>Linktree Logo</title>
        <desc>Linktree Logo Symbol</desc>
        <polygon points="0 332.55 241.86 332.55 69.92 168.76 165.06 71.02 328.97 239.39 328.97 0 471.1 0 471.1 239.39 635.01 71.4 730.08 168.76 558.22 332.17 800 332.17 800 467.33 556.84 467.33 729.85 635.32 635.01 730.77 400.04 494.82 165.06 730.77 69.92 635.7 243 467.71 0 467.71 0 332.55"/>
        <rect x="328.58" y="661.28" width="142.14" height="320.72"/>
      </svg>
    </div>
  )
}

export default Linktree