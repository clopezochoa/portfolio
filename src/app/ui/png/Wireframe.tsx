'use client'

import Image from "next/image";

const Wireframe = ({src, className, margin}:{src:string, className: string, margin:string}) => {
  const src_list = Array.from(Array(4)).map((item, index) => {
    return(src +"-0" + (index +1).toString());
  })
  return (
  <div className={className}>
      {src_list.map((srcItem, key) => {
        return (<div style={{margin:margin}} key={key}>
          <Image src= {"/png/" + srcItem + ".png"} alt={src} width={1000} height={1000}/>
        </div>)
      })}
    </div>
  );
};

export default Wireframe;