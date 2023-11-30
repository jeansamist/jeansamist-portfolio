"use client";
import React, {
  FunctionComponent,
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from "react";

export const VisibilityDetector: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const targetRef = useRef(null);
  const [show, setshow] = useState(false);
  useEffect(() => {
    const { current } = targetRef;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!show) {
            setshow(true);
          }
        }
      },
      { threshold: 0.5 } // Ajustez la valeur selon vos besoins
    );

    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [show]);

  return <div ref={targetRef}>{show && children}</div>;
};
