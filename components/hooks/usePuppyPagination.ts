"use client";

import { useCallback, useMemo, useState } from "react";
import type { Puppy } from "@/lib/types";

export const PUPPY_PAGE_SIZE = 3;

export function usePuppyPagination(puppies: Puppy[], initialPage = 0) {
  const [page, setPage] = useState(initialPage);

  const totalPages = Math.max(1, Math.ceil(puppies.length / PUPPY_PAGE_SIZE));

  const safePage = Math.min(page, totalPages - 1);

  const pagePuppies = useMemo(() => {
    const start = safePage * PUPPY_PAGE_SIZE;
    return puppies.slice(start, start + PUPPY_PAGE_SIZE);
  }, [puppies, safePage]);

  const rangeLabel = useMemo(() => {
    if (puppies.length === 0) return "";
    const start = safePage * PUPPY_PAGE_SIZE + 1;
    const end = Math.min((safePage + 1) * PUPPY_PAGE_SIZE, puppies.length);
    return `Showing ${start}–${end} of ${puppies.length}`;
  }, [puppies.length, safePage]);

  const goNext = useCallback(() => {
    setPage((p) => Math.min(p + 1, totalPages - 1));
  }, [totalPages]);

  const goPrev = useCallback(() => {
    setPage((p) => Math.max(p - 1, 0));
  }, []);

  const resetPage = useCallback(() => {
    setPage(0);
  }, []);

  return {
    page: safePage,
    setPage,
    totalPages,
    pagePuppies,
    rangeLabel,
    goNext,
    goPrev,
    resetPage,
    canGoPrev: safePage > 0,
    canGoNext: safePage < totalPages - 1,
  };
}
