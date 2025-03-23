import React, { useRef } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

interface CardWithScrollRef {
  scrollRef?: (ref: HTMLDivElement | null) => void;
}

type CardDeckProps = {
  cards: React.ReactElement<CardWithScrollRef>[];
};

export const CardDeck = ({ cards }: CardDeckProps) => {
  const scrollRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    mode: "snap",
    slides: { perView: 1 },
    slideChanged(slider) {
      const current = scrollRefs.current[slider.track.details.rel];
      if (current) current.scrollTo({ top: 0 });
    },
  });

  return (
    <div ref={sliderRef} className="keen-slider w-screen h-screen">
      {cards.map((card, index) => (
        <div
          key={index}
          className="keen-slider__slide w-screen h-screen flex-shrink-0"
        >
          {React.cloneElement(card, {
            scrollRef: (ref: HTMLDivElement | null) => {
              scrollRefs.current[index] = ref;
            },
          })}
        </div>
      ))}
    </div>
  );
};