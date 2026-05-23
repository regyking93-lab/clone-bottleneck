import Image from "next/image";
import Link from "next/link";
import { Dog } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { MESSENGER_URL } from "@/lib/messenger";
import { media } from "@/lib/media";
import type { Puppy } from "@/lib/types";

type PuppyCardProps = {
  puppy: Puppy;
  /** Preload when this card can be the LCP element (e.g. first card on page 0). */
  priority?: boolean;
};

export function PuppyCard({ puppy, priority = false }: PuppyCardProps) {
  const imageSrc = puppy.imageUrl || media.puppyPlaceholder;
  const genderLabel = puppy.gender === "male" ? "Male" : "Female";
  const displayName = puppy.name?.trim() || "Our little companion";

  return (
    <Card className="min-w-0 overflow-hidden border-border/60 bg-card/80 shadow-sm backdrop-blur-sm">
      <AspectRatio ratio={4 / 5} className="relative overflow-hidden bg-muted">
        <Image
          src={imageSrc}
          alt={`${displayName}, ${genderLabel} Pomeranian puppy. ${puppy.personality.slice(0, 80)}`}
          fill
          priority={priority}
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        {!puppy.imageUrl && <PlaceholderOverlay />}
      </AspectRatio>
      <CardHeader className="space-y-2">
        <Badge variant="secondary" className="w-fit rounded-full bg-blush/40 text-foreground">
          {genderLabel}
        </Badge>
        <CardTitle className="font-heading text-xl">{displayName}</CardTitle>
        <CardDescription className="text-base leading-relaxed">
          {puppy.personality}
        </CardDescription>
      </CardHeader>
      <CardFooter className="pt-0">
        <Link
          href={MESSENGER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-gold underline-offset-4 hover:underline"
        >
          Ask about {displayName}
        </Link>
      </CardFooter>
    </Card>
  );
}

function PlaceholderOverlay() {
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-charcoal/5">
      <Dog className="size-12 text-gold/70" aria-hidden />
    </div>
  );
}
