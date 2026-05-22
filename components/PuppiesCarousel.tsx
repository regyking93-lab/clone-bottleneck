"use client";

import { useCallback, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PuppyCard } from "@/components/PuppyCard";
import { usePuppyPagination } from "@/components/hooks/usePuppyPagination";
import { Button } from "@/components/ui/button";
import type { Puppy } from "@/lib/types";
import { cn } from "@/lib/utils";

type PuppiesCarouselProps = {
  puppies: Puppy[];
  className?: string;
  compact?: boolean;
  /** When this value changes, pagination resets to page 0 (e.g. modal open). */
  resetKey?: string | number;
};

export function PuppiesCarousel({
  puppies,
  className,
  compact,
  resetKey,
}: PuppiesCarouselProps) {
  const {
    page,
    pagePuppies,
    rangeLabel,
    goNext,
    goPrev,
    canGoNext,
    canGoPrev,
    totalPages,
    resetPage,
  } = usePuppyPagination(puppies);

  const gridRef = useRef<HTMLDivElement>(null);

  const scrollToCards = useCallback(() => {
    if (!window.matchMedia("(max-width: 767px)").matches) return;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    gridRef.current?.scrollIntoView({
      behavior: reduced ? "auto" : "smooth",
      block: "start",
    });
  }, []);

  const handleNext = useCallback(() => {
    goNext();
    scrollToCards();
  }, [goNext, scrollToCards]);

  const handlePrev = useCallback(() => {
    goPrev();
    scrollToCards();
  }, [goPrev, scrollToCards]);

  useEffect(() => {
    if (resetKey !== undefined) resetPage();
  }, [resetKey, resetPage]);

  if (puppies.length === 0) {
    return (
      <p className="text-center text-muted-foreground">
        Message us for current puppy availability and photos.
      </p>
    );
  }

  return (
    <div className={cn("min-w-0 space-y-8", className)}>
      <AnimatePresence mode="wait">
        <motion.div
          ref={gridRef}
          key={page}
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -12 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="grid min-w-0 scroll-mt-20 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {pagePuppies.map((puppy, index) => (
            <PuppyCard
              key={puppy._id}
              puppy={puppy}
              priority={!compact && page === 0 && index === 0}
            />
          ))}
        </motion.div>
      </AnimatePresence>

      {totalPages > 1 && (
        <div
          className={cn(
            "flex flex-col items-center gap-4 sm:flex-row sm:justify-between",
            compact && "gap-3"
          )}
        >
          <p className="text-sm text-muted-foreground">{rangeLabel}</p>
          <div className="flex items-center gap-2">
            <Button
              type="button"
              variant="outline"
              size={compact ? "sm" : "default"}
              className="rounded-2xl"
              onClick={handlePrev}
              disabled={!canGoPrev}
              aria-label="Previous puppies"
            >
              <ChevronLeft className="size-4" />
              Previous
            </Button>
            <Button
              type="button"
              variant="outline"
              size={compact ? "sm" : "default"}
              className="rounded-2xl"
              onClick={handleNext}
              disabled={!canGoNext}
              aria-label="Next puppies"
            >
              Next
              <ChevronRight className="size-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
