"use client";
import { motion } from "framer-motion";

export default function HeroSection({
  onExploreMasks,
  onFindRitual,
}: {
  onExploreMasks: () => void;
  onFindRitual: () => void;
}) {
  return (
    <section
      className="relative flex flex-col items-center justify-center h-screen px-6 text-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #F7E7CE 0%, #FFFCF9 50%, #F5E4E2 100%)",
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative text-5xl sm:text-6xl md:text-7xl font-serif text-[#2E2D2B] mb-6 max-w-4xl leading-tight"
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
        {/* Explore Masks Button with inline gradient */}
        <button
          onClick={onExploreMasks}
          style={{
            backgroundImage: "linear-gradient(to right, #F7E7CE, #E6CBA8)",
          }}
          className="inline-flex items-center justify-center font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-full px-10 py-4 text-lg text-[#2E2D2B] shadow-lg hover:opacity-90"
        >
          Explore Masks
        </button>

        {/* Find Your Ritual Button */}
        <button
          onClick={onFindRitual}
          className="inline-flex items-center justify-center font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-full px-10 py-4 text-lg border border-[#E6CBA8] text-[#2E2D2B] bg-transparent hover:bg-[#F5E4E2]"
        >
          Find Your Ritual
        </button>
      </div>
    </section>
  );
}
