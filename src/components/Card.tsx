// src/components/Card.tsx
import React, { useEffect, useRef } from "react";
import { Slide } from "./Slide";

type CardProps = {
  slides: React.ReactNode[];
  scrollRef?: (ref: HTMLDivElement | null) => void;
};

export const Card = ({ slides, scrollRef }: CardProps) => {
  const localRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef) {
      scrollRef(localRef.current);
    }
  }, [scrollRef]);

  return (
    <div
      ref={localRef}
      className="h-full w-full overflow-y-scroll snap-y snap-mandatory"
    >
      {slides.map((slide, index) => (
        <Slide key={index}>{slide}</Slide>
      ))}
    </div>
  );
};
