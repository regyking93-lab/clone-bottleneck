"use client";

import { useState, type VideoHTMLAttributes } from "react";

export function ShimmerVideo(props: VideoHTMLAttributes<HTMLVideoElement>) {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && (
        <div className="absolute inset-0 z-10 overflow-hidden bg-[#ede8e0]" aria-hidden>
          <span className="shimmer-sweep" />
        </div>
      )}
      <video {...props} onLoadedData={() => setLoaded(true)} />
    </>
  );
}
