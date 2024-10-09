"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";

const LogoCarousel = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const getImageSrc = (logo: string) => {
    return resolvedTheme === "dark"
      ? `/logos/${logo}-dark.webp`
      : `/logos/${logo}.webp`;
  };

  const logos = [
    { name: "berkeley", width: 256, height: 144 },
    { name: "cambridge", width: 256, height: 170 },
    { name: "mit", width: 256, height: 170 },
    { name: "oxford", width: 256, height: 108 },
    { name: "penn", width: 256, height: 170 },
    { name: "stanford", width: 256, height: 112 },
    { name: "yale", width: 256, height: 103 },
  ];

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[AutoScroll({ startDelay: 0, speed: 1 })]}
      className="[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
    >
      <CarouselContent>
        {logos.map((logo) => (
          <CarouselItem
            key={logo.name}
            className="lg::basis-1/5 basis-1/2 sm:basis-1/3 md:basis-1/4"
          >
            <Image
              src={getImageSrc(logo.name)}
              alt={`${logo.name} logo`}
              width={logo.width}
              height={logo.height}
              className="h-24 w-56 object-contain"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default LogoCarousel;
