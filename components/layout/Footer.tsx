import Link from "next/link";
import { SITE_URL } from "@/lib/messenger";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-cream px-5 py-12 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center text-sm text-muted-foreground">
        <p className="font-heading text-lg font-semibold text-charcoal">
          Emma&apos;s Rodgers <span className="text-gold">Pomeranians</span>
        </p>
        <p className="max-w-md">
          Home-raised teacup Pomeranians, placed with care. All placements are handled
          personally through Messenger. No online checkout.
        </p>
        <p>
          © {year}{" "}
          <Link href={SITE_URL} className="text-gold hover:underline">
            Emma&apos;s Rodgers Pomeranians
          </Link>
        </p>
      </div>
    </footer>
  );
}
