import { RefObject, useEffect, useState } from "react";

export function useIsVisible(ref: RefObject<HTMLDivElement | null>) {
    const [isIntersecting, setIntersecting] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
          setIntersecting(entry.isIntersecting)
      } , {threshold: 0.1}
      );
      if(ref.current)
        observer.observe(ref.current);
      return () => {
        observer.disconnect();
      };
    }, [ref]);
  
    return isIntersecting;
  }