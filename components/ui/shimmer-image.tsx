"use client";

import { useState } from "react";
import Image, { type ImageProps } from "next/image";

export function ShimmerImage(props: ImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && (
        <div className="absolute inset-0 z-10 overflow-hidden bg-[#ede8e0]" aria-hidden>
          <span className="shimmer-sweep" />
        </div>
      )}
      <Image {...props} onLoad={() => setLoaded(true)} />
    </>
  );
}
