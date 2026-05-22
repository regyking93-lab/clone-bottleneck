import Image from "next/image";
import { Dog } from "lucide-react";
import { MessengerButton } from "@/components/MessengerButton";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
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

  return (
    <Card className="min-w-0 overflow-hidden border-border/60 bg-card/80 shadow-sm backdrop-blur-sm">
      <AspectRatio ratio={4 / 5} className="relative overflow-hidden bg-muted">
        <Image
          src={imageSrc}
          alt={`${genderLabel} Pomeranian puppy — ${puppy.personality.slice(0, 80)} — Emma's Rogers Pomeranians`}
          fill
          priority={priority}
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        {!puppy.imageUrl && <PlaceholderOverlay />}
      </AspectRatio>
      <CardHeader className="space-y-2">
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary" className="rounded-full bg-blush/40 text-foreground">
            {genderLabel}
          </Badge>
          <Badge variant="outline" className="rounded-full border-gold/40 text-gold">
            Available
          </Badge>
        </div>
        <CardTitle className="font-heading text-xl">
          {puppy.name || "Available Puppy"}
        </CardTitle>
        <CardDescription className="text-base leading-relaxed">
          {genderLabel} — {puppy.personality}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Message us for current availability
        </p>
      </CardContent>
      <CardFooter>
        <MessengerButton size="default" className="w-full" label="Ask About This Puppy" />
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
