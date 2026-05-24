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
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-[#ede8e0]" aria-hidden>
          <div className="relative h-1 w-3/5 overflow-hidden rounded-full bg-[#d9d0c4]">
            <span className="loading-bar bg-[#c9a962]" />
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
