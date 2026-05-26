import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MESSENGER_URL } from "@/lib/messenger";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full overflow-x-hidden border-b border-border/50 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl min-w-0 items-center justify-between gap-3 px-5 py-4 md:px-8">
        <Link
          href="/"
          className="min-w-0 shrink font-heading text-base leading-tight font-semibold text-charcoal sm:text-lg md:text-xl"
        >
          Emma&apos;s Rodgers <span className="text-gold">Pomeranians</span>
        </Link>
        <Button
          nativeButton={false}
          render={<Link href={MESSENGER_URL} target="_blank" rel="noopener noreferrer" />}
          className="hidden shrink-0 rounded-2xl md:inline-flex"
        >
          <MessageCircle className="size-4" />
          Say hi
        </Button>
      </div>
    </header>
  );
}
