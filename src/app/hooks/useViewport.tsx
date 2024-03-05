'use client'

import { useEffect, useRef } from "react";
import { useInViewport } from "react-in-viewport";

export function useViewportClass(className: string) {
  const ref = useRef(null);
  const {inViewport} = useInViewport(ref);

  useEffect(() => {
    if(inViewport) document.body.className = className
    return;
  }, [inViewport])
  return ref;
}

export function useViewportFunction(onView: () => void) {
  const ref = useRef(null);
  const {inViewport} = useInViewport(ref);
  
  useEffect(() => {
    if(inViewport) onView();
    return;
  }, [inViewport])
  return ref;
}