"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

const LogoCarousel = () => {
  const logosRef = useRef<HTMLUListElement | null>(null);
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
    <div className="inline-flex h-24 w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul
        ref={logosRef}
        className="animate-infinite-scroll flex items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-6"
      >
        {logos.map((logo) => (
          <li key={logo.name} className="h-full">
            <Image
              src={getImageSrc(logo.name)}
              alt={`${logo.name} logo`}
              width={logo.width}
              height={logo.height}
              className="h-full w-56 object-contain"
            />
          </li>
        ))}
        {logos.map((logo) => (
          <li
            key={`${logo.name}-duplicate`}
            className="h-full"
            aria-hidden="true"
          >
            <Image
              src={getImageSrc(logo.name)}
              alt={`${logo.name} logo`}
              width={logo.width}
              height={logo.height}
              className="h-full w-56 object-contain"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LogoCarousel;
