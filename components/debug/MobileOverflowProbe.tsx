"use client";

import { useEffect } from "react";

/** Debug-only: logs elements wider than the viewport on mobile layouts. */
export function MobileOverflowProbe() {
  useEffect(() => {
    const probe = () => {
      const viewport = document.documentElement.clientWidth;
      const scrollW = document.documentElement.scrollWidth;
      const offenders: { tag: string; cls: string; w: number }[] = [];

      document.querySelectorAll<HTMLElement>("body *").forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.width > viewport + 1) {
          offenders.push({
            tag: el.tagName.toLowerCase(),
            cls: (el.className || "").toString().slice(0, 80),
            w: Math.round(rect.width),
          });
        }
      });

      offenders.sort((a, b) => b.w - a.w);
      const top = offenders.slice(0, 8);

      // #region agent log
      // removed telemetry fetch to prevent console errors when server isn't running
      // #endregion
    };

    probe();
    window.addEventListener("resize", probe);
    return () => window.removeEventListener("resize", probe);
  }, []);

  return null;
}
