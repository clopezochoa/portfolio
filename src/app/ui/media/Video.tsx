'use client'

import { useEffect, useRef } from "react";

const VideoWithAlpha = ({src, width, height}:{src:string, width: number | string, height: number | string}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoRef.current) {
      return;
    }

    videoRef.current.play();
    videoRef.current.loop = true;
    videoRef.current.muted = true;
    videoRef.current.playsInline = true;
    videoRef.current.controls = false;
  }, []);

  return (
    <div style={{zIndex:"10", width: width !== "auto" ? width.toString() + "px" : "auto", height: height !== "auto" ? height.toString() + "px" : "auto"}}>
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        controls={false}
      >
        <source src={"/media/phone-mock/" + src + ".webm"} type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoWithAlpha;