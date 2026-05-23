"use client";

import { useCallback, useMemo, useState } from "react";
import type { Puppy } from "@/lib/types";

export const PUPPY_PAGE_SIZE = 3;

export function usePuppyPagination(
  puppies: Puppy[],
  initialPage = 0,
  pageSize = PUPPY_PAGE_SIZE
) {
  const [page, setPage] = useState(initialPage);

  const totalPages = Math.max(1, Math.ceil(puppies.length / pageSize));

  const safePage = Math.min(page, totalPages - 1);

  const pagePuppies = useMemo(() => {
    const start = safePage * pageSize;
    return puppies.slice(start, start + pageSize);
  }, [puppies, safePage, pageSize]);

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
    goNext,
    goPrev,
    resetPage,
    canGoPrev: safePage > 0,
    canGoNext: safePage < totalPages - 1,
  };
}
