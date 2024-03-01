'use client'

import Image from "next/image";

const Diagram = ({src, className}:{src:string, className: string}) => {
  return (
    <div className={className} style={{zIndex:"10"}}>
      <Image src= {"/svg/" + src + ".svg"} alt={src} width={1000} height={1000}/>
    </div>
  );
};

export default Diagram;