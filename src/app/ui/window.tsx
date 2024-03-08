'use client'

import { ReactNode, forwardRef, useEffect, useState } from "react"
import "@/styles/utils.css"
import "@/styles/window.css"
import { useIsClient } from "../providers/client"

type WindowProps = {
  children: ReactNode,
  className?: string,
}

const WindowWithRef = forwardRef<HTMLDivElement, WindowProps>(
  function Window({ className, children }: WindowProps, ref) {
    const [height, setHeight] = useState(1080);
    const isClient = useIsClient();
    
    useEffect(() => {
      if (typeof window !== 'undefined') {
        setHeight(window.innerHeight);
      } else {
        setHeight(1080)
      }
    }, [isClient]);

    useEffect(() => {
      addEventListener("resize", () => setHeightProtected());
      return () => removeEventListener("resize", () => setHeightProtected());
    }, []);

    const setHeightProtected = () => {
      if (typeof window !== 'undefined') {
        setHeight(window.innerHeight);
      } else {
        setHeight(1080)
      }
    };

    return (
      <>
        {isClient ? (
          <div className={className ?? ""} style={{ height: height }} ref={ref}>
            {children}
          </div>
        ) : null}
      </>
    );
  }
);

export default WindowWithRef;