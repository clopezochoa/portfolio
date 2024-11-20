import React, { useState } from 'react'

function useSwipe({callback, invert}: {callback: () => void, invert?: boolean}) {
  const [startX, setStartX] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const endX = e.changedTouches[0].clientX;
    const deltaX = startX - endX;

    if (invert ? deltaX < -50 : deltaX > 50) {
      callback();
    }
  };

  return { handleTouchStart, handleTouchEnd };

}

export default useSwipe