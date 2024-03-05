import React from 'react'
import { CSSProperties } from "react";

function getArrow(orientation: string): React.JSX.Element {
  switch (orientation) {
    case "up":
      return <>
        <path d="M49.15.5c0,26.87-21.78,48.65-48.65,48.65"/>
        <path d="M49.15.5c0,26.87,21.78,48.65,48.65,48.65"/>
        <line x1="49.15" y1=".5" x2="49.15" y2="79.22"/>
      </>;
    case "down":
      return <>
        <path d="M49.15,79.22c0-26.87,21.78-48.65,48.65-48.65"/>
        <path d="M49.15,79.22C49.15,52.35,27.37,30.57.5,30.57"/>
        <line x1="49.15" y1="79.22" x2="49.15" y2=".5"/>
      </>;
    case "left":
      return <>
        <path d="M49.15.5c0,26.87-21.78,48.65-48.65,48.65"/>
        <path d="M49.15,97.8c0-26.87-21.78-48.65-48.65-48.65"/>
        <line x1="79.22" y1="49.15" x2=".5" y2="49.15"/>
      </>;
    case "right":
      return <>
        <path d="M79.22,49.15C52.35,49.15,30.57,27.37,30.57.5"/>
        <path d="M79.22,49.15c-26.87,0-48.65,21.78-48.65,48.65"/>
        <line x1="79.22" y1="49.15" x2=".5" y2="49.15"/>
      </>;  
    default:
      return <></>;
  }
}

type ArrowProps = {
  className:string;
  width:number | string;
  height:number | string;
  stroke:string;
  strokeColor:string;
  orientation:string;
  opacity?:number;
  inactive?: boolean;
  onClick?:() => void;
}

function Arrow(props:ArrowProps) {
  const style: CSSProperties   = {
    fill: "none",
    stroke: props.strokeColor,
    strokeLinecap: "round",
    strokeMiterlimit: "10",
    strokeWidth: props.stroke,
    width: props.width === "auto" ? "auto" : props.width.toString() + "px",
    height: props.height === "auto" ? "auto" : props.height.toString() + "px",
    opacity: props.opacity ?? 1,
    cursor: props.inactive ? "default" : "pointer"
  }
  return (
    <div onClick={props.onClick} className={props.className}>
      <svg style={style} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        {getArrow(props.orientation)}
      </svg>
    </div>

  )
}

export default Arrow