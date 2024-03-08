'use client'

import { useEffect, useRef } from "react";

const VideoWithAlpha = ({src, className}:{src:string, className: string}) => {
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
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      controls={false}
      className={className}
      style={{zIndex:"10"}}
    >
      <source src={"/media/phone-mock/" + src + ".webm"} type="video/webm" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoWithAlpha;