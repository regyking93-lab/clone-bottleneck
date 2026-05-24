"use client";

import { useState, type VideoHTMLAttributes } from "react";

export function ShimmerVideo(props: VideoHTMLAttributes<HTMLVideoElement>) {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && (
        <div className="absolute inset-0 z-10 overflow-hidden" aria-hidden>
          <span className="loading-bar bg-white/60" />
        </div>
      )}
      <video {...props} onCanPlay={() => setLoaded(true)} />
    </>
  );
}
