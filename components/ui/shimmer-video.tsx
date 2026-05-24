"use client";

import { useState, useEffect, useRef, type VideoHTMLAttributes } from "react";

export function ShimmerVideo(props: VideoHTMLAttributes<HTMLVideoElement>) {
  const [loaded, setLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (video.readyState >= 3) {
      setLoaded(true);
    } else {
      const done = () => setLoaded(true);
      video.addEventListener("canplay", done, { once: true });
      video.addEventListener("loadeddata", done, { once: true });
    }

    if (props.autoPlay) {
      video.play().catch(() => {});
    }
  }, [props.autoPlay]);

  return (
    <>
      {!loaded && (
        <div className="absolute inset-0 z-10 overflow-hidden" aria-hidden>
          <span className="loading-bar bg-white/50" />
        </div>
      )}
      <video ref={videoRef} {...props} />
    </>
  );
}
