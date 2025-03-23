// components/Card.tsx
import React, { useEffect, useRef } from "react";

type CardProps = {
  slides: React.ReactNode[];
  scrollRef?: (ref: HTMLDivElement | null) => void;
};

export const Card = ({ slides, scrollRef }: CardProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ref = containerRef.current;
    if (scrollRef && ref) scrollRef(ref);
  }, [scrollRef]);

  return (
    <div
      ref={containerRef}
      className="relative h-full w-full overflow-y-scroll snap-y snap-mandatory"
    >
      {slides.map((slide, index) => (
        <React.Fragment key={index}>{slide}</React.Fragment>
      ))}
    </div>
  );
};
