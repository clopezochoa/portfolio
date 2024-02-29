'use client'

import { useEffect, useState } from 'react'

export interface ScrollEventArgs {
  pageUp?: () => void,
  pageDown?: () => void,
  pageLeft?: () => void,
  pageRight?: () => void,
}

function useScrollEvent(scrollEventArgs: ScrollEventArgs) {
  const scrollSensibility = 7;
  const scrollLimit = 10;
  const debounceDelay = 100;
  const debounce = Date.now(); 
  const [count, setCount] = useState(0);
  const [latestAxis, setLatestAxis] = useState<string>("y");

  useEffect(() => {
    if (count > scrollLimit) {
      if(latestAxis === "x") {
        scrollEventArgs.pageRight ? scrollEventArgs.pageRight() : null;
      } else {
        scrollEventArgs.pageDown ? scrollEventArgs.pageDown() : null;
      }
    }
    if(count < -scrollLimit) {
      if(latestAxis === "x") {
        scrollEventArgs.pageLeft ? scrollEventArgs.pageLeft() : null;
      } else {
        scrollEventArgs.pageUp ? scrollEventArgs.pageUp() : null;
      }
    }
  }, [count])

  useEffect(() => {
    const setCountByDelta = (deltaX: number, deltaY: number) => {
      if (deltaY > scrollSensibility) {
        setCount((count) => count + 1);
        setLatestAxis("y");
      } else if (deltaY < -scrollSensibility) {
        setCount((count) => count - 1);
        setLatestAxis("y");
      } else if (deltaX > scrollSensibility) {
        setCount((count) => count + 1);
        setLatestAxis("x");
      } else if (deltaX < -scrollSensibility) {
        setCount((count) => count - 1);
        setLatestAxis("x");
      }
    }

    let touchStartX: number
    let touchStartY: number

    const handleTouchStart = (event: TouchEvent) => {
      touchStartX = event.touches[0].clientX;
      touchStartY = event.touches[0].clientY;
    };

    const handleTouchMove = (event: TouchEvent) => {
      const touchEndX = event.touches[0].clientX;
      const touchEndY = event.touches[0].clientY;
      const deltaX = touchStartX - touchEndX;
      
      const deltaY = touchStartY - touchEndY;
      if(scrollEventArgs.pageRight ? (deltaX > 0): false) setCountByDelta(deltaX, 0);
      if(scrollEventArgs.pageLeft ? (deltaX < 0) : false) setCountByDelta(deltaX, 0);  
      if(scrollEventArgs.pageDown ? (deltaY > 0): false) setCountByDelta(0, deltaY);
      if(scrollEventArgs.pageUp ? (deltaY < 0) : false) setCountByDelta(0, deltaY);  
      touchStartX = touchEndX;
      touchStartY = touchEndY;
    };

    const handleWheel = (event: WheelEvent) => {
      if(Date.now() < debounce + debounceDelay) return;
      const deltaY = event.deltaY;
      if(scrollEventArgs.pageUp ? (deltaY < 0) : false) setCountByDelta(0, deltaY);
      if(scrollEventArgs.pageDown ? (deltaY > 0): false) setCountByDelta(0, deltaY);
    };

    window.removeEventListener("wheel", handleWheel);
    window.removeEventListener("touchstart", handleTouchStart);
    window.removeEventListener("touchmove", handleTouchMove);

    window.addEventListener("wheel", handleWheel);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);
    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);
}

export default useScrollEvent