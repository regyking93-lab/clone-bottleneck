import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MESSENGER_URL } from "@/lib/messenger";
import { cn } from "@/lib/utils";

type MessengerButtonProps = {
  size?: "default" | "sm" | "lg";
  variant?: "default" | "outline" | "secondary";
  className?: string;
  label?: string;
  fullWidth?: boolean;
};

export function MessengerButton({
  size = "lg",
  variant = "default",
  className,
  label = "Message Us on Messenger",
  fullWidth,
}: MessengerButtonProps) {
  return (
    <Button
      render={<Link href={MESSENGER_URL} target="_blank" rel="noopener noreferrer" />}
      size={size}
      variant={variant}
      nativeButton={false}
      className={cn(
        "max-w-full min-w-0 shrink whitespace-normal text-center",
        "rounded-2xl px-4 py-5 text-base font-semibold shadow-md sm:px-6 sm:py-6",
        fullWidth ? "w-full" : "w-full sm:w-auto",
        className
      )}
    >
      <MessageCircle className="size-5" />
      {label}
    </Button>
  );
}
