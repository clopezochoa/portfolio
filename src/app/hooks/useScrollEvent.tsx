'use client'

import { useEffect, useState } from 'react'

function useScrollEvent(pageUp?: () => void, pageDown?: () => void, reverseWheel?: boolean) {
  const scrollSensibility = 7;
  const debounceDelay = 500;
  const [debounce, setDebounce] = useState(true); 
  const [count, setCount] = useState(0);
  const [latestEvent, setLatestEvent] = useState<string>();

  useEffect(() => {
    setTimeout(() => 
      setDebounce(false), debounceDelay);
  }, [])

  useEffect(() => {
    if(reverseWheel || latestEvent !== "wheel") {      
      if (count > 2) {
        pageDown ? pageDown() : null;
      }
      if(count < -2) {
        pageUp ? pageUp() : null;
      }
    } else {
      if (count > 2) {
        pageUp ? pageUp() : null;
      }
      if(count < -2) {
        pageDown ? pageDown() : null;
      }
    }
  }, [count])

  useEffect(() => {
    const setCountByDelta = (deltaY: number) => {
      if (deltaY > scrollSensibility) {
        setCount((count) => count + 1);
      } else if (deltaY < -scrollSensibility) {
        setCount((count) => count - 1);
      }
    }

    let touchStartY: number

    const handleTouchStart = (event: TouchEvent) => {
      if(debounce) return;
      touchStartY = event.touches[0].clientY;
    };

    const handleTouchMove = (event: TouchEvent) => {
      if(debounce) return;
      const touchEndY = event.touches[0].clientY;
      const deltaY = touchStartY - touchEndY;
      if(pageDown ? (deltaY > 0): false) setCountByDelta(deltaY);
      if(pageUp ? (deltaY < 0) : false) setCountByDelta(deltaY);  
      touchStartY = touchEndY;
      setLatestEvent(event.type);
    };

    const handleWheel = (event: WheelEvent) => {
      if(debounce) return;
      const deltaY = event.deltaY;
      if(reverseWheel) {
        if(pageUp ? (deltaY < 0) : false) setCountByDelta(deltaY);
        if(pageDown ? (deltaY > 0): false) setCountByDelta(deltaY);
      } else {
        if(pageUp ? (deltaY > 0): false) setCountByDelta(deltaY);
        if(pageDown ? (deltaY < 0) : false) setCountByDelta(deltaY);  
      }

      setLatestEvent(event.type);
    };

    window.addEventListener("wheel", handleWheel);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);
    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [debounce]);
}

export default useScrollEvent