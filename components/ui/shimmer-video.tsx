"use client";

import { useState, useEffect, useRef, type VideoHTMLAttributes } from "react";

export function ShimmerVideo({ autoPlay, ...props }: VideoHTMLAttributes<HTMLVideoElement>) {
  const [loaded, setLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let dismissed = false;
    const dismiss = () => {
      if (dismissed) return;
      dismissed = true;
      setLoaded(true);
    };

    if (video.readyState >= 2) {
      dismiss();
      return () => { dismissed = true; };
    }

    // timeupdate fires as soon as currentTime advances — most reliable signal
    // that frames are actually rendering, catches what canplay/playing can miss
    const events = ["timeupdate", "canplay", "playing", "loadeddata"] as const;
    events.forEach(e => video.addEventListener(e, dismiss, { once: true }));

    if (autoPlay) video.play().catch(() => {});

    return () => {
      dismissed = true;
      events.forEach(e => video.removeEventListener(e, dismiss));
    };
  }, [autoPlay]);

  return (
    <>
      {!loaded && (
        <div className="absolute inset-0 z-10 flex items-center justify-center" aria-hidden>
          <div className="relative h-1 w-3/5 overflow-hidden rounded-full bg-white/20">
            <span className="loading-bar bg-white/60" />
          </div>
        </div>
      )}
      <video ref={videoRef} autoPlay={autoPlay} {...props} />
    </>
  );
}
