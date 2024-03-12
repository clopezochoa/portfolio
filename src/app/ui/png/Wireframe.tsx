'use client'

import Image from "next/image";
import { CSSProperties } from "react";

const Wireframe = ({itemStyle, containerStyle, src, margin, count, format, pick}:{pick?:number, itemStyle:CSSProperties, containerStyle:CSSProperties, src:string, margin:string, count:number, format:string}) => {
  const src_list = Array.from(Array(count)).map((item, index) => {
    return(src +"-0" + (index +1).toString());
  });

  const content = pick ?
    <div style={containerStyle}>
        <div style={{margin:margin}}>
          <Image style={itemStyle} src= {`/${format}/` + src_list[pick -1] + `.${format}`} alt={src} width={1000} height={1000}/>
        </div>
    </div>
    : 
    <div style={containerStyle}>
      {src_list.map((srcItem, key) => {
        return (<div style={{margin:margin}} key={key}>
          <Image style={itemStyle} src= {`/${format}/` + srcItem + `.${format}`} alt={src} width={1000} height={1000}/>
        </div>)
      })}
    </div>;
  return (content);
};

export default Wireframe;