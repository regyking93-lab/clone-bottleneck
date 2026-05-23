"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MESSENGER_URL } from "@/lib/messenger";

export function StickyMessenger() {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.8, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed right-0 bottom-0 left-0 z-50 box-border w-full max-w-[100vw] border-t border-border/50 bg-background/95 p-3 backdrop-blur-md md:hidden"
    >
      <Button
        nativeButton={false}
        render={<Link href={MESSENGER_URL} target="_blank" rel="noopener noreferrer" />}
        className="w-full max-w-full min-w-0 whitespace-normal rounded-2xl py-5 text-base font-semibold"
        size="lg"
      >
        <MessageCircle className="size-5" />
        Say hi on Messenger
      </Button>
    </motion.div>
  );
}
