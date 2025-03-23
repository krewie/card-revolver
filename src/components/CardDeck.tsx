// CardDeck.tsx
import React, { useRef } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

interface CardWithScrollRef {
  scrollRef?: (ref: HTMLDivElement | null) => void;
}

type CardDeckProps<T> = {
  data: T[];
  renderCard: (item: T, index: number) => React.ReactElement<CardWithScrollRef>;
  minReadyCards?: number;
  loadingFallback?: React.ReactNode;
};

export const CardDeck = <T,>({
  data,
  renderCard,
  minReadyCards = 2,
  loadingFallback = <div className="w-screen h-screen flex items-center justify-center text-xl">Loading cards...</div>,
}: CardDeckProps<T>) => {
  const scrollRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    mode: "snap",
    slides: { perView: 1 },
    slideChanged(slider) {
      const current = scrollRefs.current[slider.track.details.rel];
      if (current) current.scrollTo({ top: 0 });
    },
  });

  if (!data || data.length < minReadyCards) {
    return <>{loadingFallback}</>;
  }

  return (
    <div ref={sliderRef} className="keen-slider w-screen h-screen">
      {data.map((item, index) => {
        const card = renderCard(item, index);
        return (
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
        );
      })}
    </div>
  );
};
