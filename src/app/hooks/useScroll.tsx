import { MutableRefObject, useEffect, useRef, useState } from "react";
import debounce from 'lodash/debounce';

export const useScroll = (refs: Array<MutableRefObject<null>>) => {
  const handleScroll = debounce(() => {
    if(typeof window !== undefined && window) {
      const scrollTop = window.scrollY;
      let minDistance = Infinity;
      let nearestWindowIndex = -1;
      refs.forEach((ref, index) => {
        const element = ref?.current;
        if(element) {
          const windowTop = (element as HTMLDivElement).offsetTop;
          const distance = Math.abs(scrollTop - windowTop);
    
          if (distance < minDistance) {
            minDistance = distance;
            nearestWindowIndex = index;
          }
        }
      });
      const nearestWindow = refs[nearestWindowIndex]?.current;
      if(nearestWindow) {
        window.scrollTo({ top: (nearestWindow as HTMLDivElement).offsetTop, behavior: "smooth" })
      }
    }
  }, 1000);

  useEffect(() => {
    if(typeof window !== undefined && window) {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      return () => null;
    }
  }, []);

  return;
};