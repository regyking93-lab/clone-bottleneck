"use client";

import { useState } from "react";
import { PuppiesCarousel } from "@/components/PuppiesCarousel";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { Puppy } from "@/lib/types";

type PuppiesGalleryModalProps = {
  puppies: Puppy[];
};

export function PuppiesGalleryModal({ puppies }: PuppiesGalleryModalProps) {
  const [open, setOpen] = useState(false);
  const [session, setSession] = useState(0);

  if (puppies.length <= 3) return null;

  const handleOpenChange = (next: boolean) => {
    setOpen(next);
    if (next) setSession((s) => s + 1);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger
        render={
          <Button
            type="button"
            variant="outline"
            className="mt-6 w-full rounded-2xl md:hidden"
          />
        }
      >
        View more puppies
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] w-[calc(100%-2rem)] max-w-lg overflow-x-hidden overflow-y-auto p-5 sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="font-heading text-xl">
            All Available Puppies
          </DialogTitle>
          <DialogDescription>
            Browse our companions — message us on Messenger for availability.
          </DialogDescription>
        </DialogHeader>
        <PuppiesCarousel
          puppies={puppies}
          compact
          resetKey={session}
          className="mt-4"
        />
      </DialogContent>
    </Dialog>
  );
}
