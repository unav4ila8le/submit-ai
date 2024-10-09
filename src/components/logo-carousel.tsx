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

    const ul = logosRef.current;
    if (ul && ul.parentNode) {
      const clonedUl = ul.cloneNode(true) as HTMLUListElement;
      clonedUl.setAttribute("aria-hidden", "true");
      ul.parentNode.appendChild(clonedUl);
    }
  }, []);

  if (!mounted) {
    return null;
  }

  const getImageSrc = (logo: string) => {
    return resolvedTheme === "dark"
      ? `/logos/${logo}-dark.webp`
      : `/logos/${logo}.webp`;
  };

  return (
    <div className="inline-flex h-24 w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul
        ref={logosRef}
        className="animate-infinite-scroll flex items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-6"
      >
        <li className="h-full">
          <Image
            src={getImageSrc("berkeley")}
            alt="Berkeley logo"
            width={256}
            height={144}
            className="h-full w-56 object-contain"
          />
        </li>
        <li className="h-full">
          <Image
            src={getImageSrc("cambridge")}
            alt="Cambridge logo"
            width={256}
            height={170}
            className="h-full w-56 object-contain"
          />
        </li>
        <li className="h-full">
          <Image
            src={getImageSrc("mit")}
            alt="MIT logo"
            width={256}
            height={170}
            className="h-full w-56 object-contain"
          />
        </li>
        <li className="h-full">
          <Image
            src={getImageSrc("oxford")}
            alt="Oxford logo"
            width={256}
            height={108}
            className="h-full w-56 object-contain"
          />
        </li>
        <li className="h-full">
          <Image
            src={getImageSrc("penn")}
            alt="Penn logo"
            width={256}
            height={170}
            className="h-full w-56 object-contain"
          />
        </li>
        <li className="h-full">
          <Image
            src={getImageSrc("stanford")}
            alt="Stanford logo"
            width={256}
            height={112}
            className="h-full w-56 object-contain"
          />
        </li>
        <li className="h-full">
          <Image
            src={getImageSrc("yale")}
            alt="Yale logo"
            width={256}
            height={103}
            className="h-full w-56 object-contain"
          />
        </li>
      </ul>
    </div>
  );
};
export default LogoCarousel;
