import { Separator } from "@/components/ui/separator";
import { SITE_URL } from "@/lib/messenger";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-beige/30 px-5 py-12 md:px-8">
      <div className="mx-auto max-w-6xl">
        <Separator className="mb-8" />
        <div className="flex flex-col gap-4 text-center md:text-left">
          <p className="font-heading text-lg font-semibold text-charcoal">
            Emma&apos;s Rogers Pomeranians
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Home-raised teacup Pomeranians carefully matched with loving families.
            All placements are handled personally through Messenger — no online checkout.
          </p>
          <p className="text-xs text-muted-foreground">
            © {year} Emma&apos;s Rogers Pomeranians · {SITE_URL.replace(/^https?:\/\//, "")}
          </p>
        </div>
      </div>
    </footer>
  );
}
