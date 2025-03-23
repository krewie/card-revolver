import React, { useEffect, useRef, useState } from "react";
import { Slide } from "./Slide";

type CardProps = {
  slides: React.ReactNode[];
  scrollRef?: (ref: HTMLDivElement | null) => void;
  sharedHeader?: React.ReactNode;
};

export const Card = ({ slides, scrollRef, sharedHeader }: CardProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const ref = containerRef.current;
    if (scrollRef && ref) scrollRef(ref);
    if (!ref) return;

    const handleScroll = () => setScrollY(ref.scrollTop);
    ref.addEventListener("scroll", handleScroll);
    return () => ref.removeEventListener("scroll", handleScroll);
  }, [scrollRef]);

  return (
    <div
      ref={containerRef}
      className="relative h-full w-full overflow-y-scroll snap-y snap-mandatory"
    >
      {slides.map((slide, index) => (
        <Slide key={index} sharedHeader={sharedHeader} scrollY={scrollY}>
          {slide}
        </Slide>
      ))}
    </div>
  );
};