"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HeroSection({
  onExploreMasks,
  onFindRitual,
}: {
  onExploreMasks: () => void;
  onFindRitual: () => void;
}) {
  return (
    <section className="relative flex flex-col items-center justify-center h-screen px-6 text-center bg-gradient-to-tr from-champagne via-ivory to-blush overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-tr from-[#fffaf5] via-[#f5eee6] to-[#faf9f7] opacity-40 pointer-events-none"></div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative text-5xl sm:text-6xl md:text-7xl font-serif text-foreground mb-6 max-w-4xl leading-tight"
      >
        Timeless Beauty, Reimagined
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="relative max-w-2xl text-lg sm:text-xl text-[#5C5B59] mb-12"
      >
        Inspired by the timeless beauty rituals of Asia and the nourishing botanicals of Africa, each mask is crafted to enhance your natural radiance.
      </motion.p>

      <div className="flex flex-col sm:flex-row gap-6 z-10">
        <Button
          variant="default"
          onClick={() => {
            const el = document.getElementById("products");
            if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
        >
          Explore Masks
        </Button>

        <Button
          variant="outline"
          onClick={() => {
            const el = document.getElementById("quiz");
            if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
        >
          Find Your Ritual
        </Button>
      </div>
    </section>
  );
}
