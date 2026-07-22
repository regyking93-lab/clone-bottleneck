"use client";

import { useState, useEffect, useRef } from "react";
import Image, { type ImageProps } from "next/image";

export function ShimmerImage({ onLoad, ...props }: ImageProps) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Dismiss immediately if image is already cached on mount
  useEffect(() => {
    const img = imgRef.current;
    if (img?.complete && img.naturalWidth > 0) setLoaded(true);
  }, []);

  return (
    <>
      {!loaded && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-beige" aria-hidden>
          <div className="relative h-1 w-3/5 overflow-hidden rounded-full bg-blush/50">
            <span className="loading-bar bg-gold" />
          </div>
        </div>
      )}
      <Image
        {...props}
        ref={imgRef}
        onLoad={(e) => {
          setLoaded(true);
          onLoad?.(e);
        }}
      />
    </>
  );
}
