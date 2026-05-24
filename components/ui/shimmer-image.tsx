"use client";

import { useState, useEffect, useRef } from "react";
import Image, { type ImageProps } from "next/image";

export function ShimmerImage(props: ImageProps) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;
    if (img.complete && img.naturalWidth > 0) {
      setLoaded(true);
      return;
    }
    const done = () => setLoaded(true);
    img.addEventListener("load", done);
    return () => img.removeEventListener("load", done);
  }, []);

  return (
    <>
      {!loaded && (
        <div className="absolute inset-0 z-10 overflow-hidden bg-[#ede8e0]" aria-hidden>
          <span className="loading-bar bg-[#c9a962]" />
        </div>
      )}
      <Image {...props} ref={imgRef} />
    </>
  );
}
