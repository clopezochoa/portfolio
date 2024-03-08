import React from 'react'
import { CSSProperties } from "react";

function Linkedin({className, color, onClick}:{className:string, color: string, onClick?:() => void}) {
  return (
    <div onClick={onClick} className={className}>
      <svg id="Layer_1" data-name="Layer 1"  fill={color} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 990 990">
        <title>Linkedin Logo</title>
        <desc>Linkedin Logo Symbol</desc>
        <path d="M843.53,843.54h-146.69v-229.72c0-54.78-.98-125.3-76.29-125.3s-88.09,59.69-88.09,121.31v233.69h-146.68v-472.4h140.82v64.56h1.97c28.71-49.1,82.1-78.42,138.94-76.31,148.67,0,176.08,97.79,176.08,225.02l-.06,259.15h0ZM220.26,306.55c-47.01,0-85.13-38.1-85.14-85.11,0-47.01,38.1-85.13,85.11-85.14,47.01-.01,85.13,38.1,85.14,85.11,0,47.01-38.1,85.13-85.11,85.14M293.6,843.54h-146.84v-472.42h146.84v472.42h0ZM916.65.07H73.06C33.18-.38.49,31.56,0,71.43v847.12c.47,39.89,33.17,71.86,73.05,71.44h843.6c39.97.49,72.79-31.48,73.35-71.44V71.37C989.43,31.42,956.61-.52,916.65,0"/>
      </svg>
    </div>
  )
}

export default Linkedin