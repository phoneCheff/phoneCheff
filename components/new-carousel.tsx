"use client";

import Slide1 from "@/components/slides/slide1";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import Slide2 from "./slides/slide2";

export function BannerCarousel() {
  const plugin = useRef(Autoplay({ delay: 6000, stopOnInteraction: false }));

  const slides = [
    { id: 1, component: <Slide1 key="slide1" /> },
    { id: 2, component: <Slide2 key="slide2" /> },
    { id: 3, component: <Slide1 key="slide3" /> },
    { id: 4, component: <Slide1 key="slide4" /> },
  ];

  return (
    <div className="w-full overflow-hidden">
      <Carousel opts={{ loop: true }} plugins={[plugin.current]}>
        <CarouselContent>
          {slides.map((slide) => (
            <CarouselItem key={slide.id} className="basis-full">
              <div className="w-full">{slide.component}</div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 hidden sm:flex" />
        <CarouselNext className="right-4 hidden sm:flex" />
      </Carousel>
    </div>
  );
}
