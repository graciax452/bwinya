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
    <section className="relative flex flex-col items-center justify-center h-screen px-6 text-center overflow-hidden">

  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center z-0"
    style={{ backgroundImage: "url('/images/hero/hero-bg3.jpg')" }}
  />

  {/* Neutral dark overlay for contrast */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent z-0"></div>

  {/* Content */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="relative z-10 max-w-4xl"
  >
    <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif text-white mb-6 leading-tight">
      Timeless Beauty, Reimagined
    </h1>
    <p className="text-lg sm:text-xl text-white/90 mb-12">
      Inspired by the timeless beauty rituals of Asia and the nourishing botanicals of Africa, each mask is crafted to enhance your natural radiance.
    </p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center">
  {/* Explore Masks */}
  <button
  style={{
    background: "linear-gradient(90deg, #E6CBA8 0%, #F7E7CE 100%)",
    color: "#2E2D2B",
    borderRadius: "9999px",
    padding: "1rem 3rem",
    fontSize: "1.125rem",
    fontWeight: 600,
    boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
    transition: "all 0.3s ease",
  }}
  onMouseEnter={(e) => {
    const btn = e.currentTarget as HTMLButtonElement;
    btn.style.background = "transparent";
    btn.style.color = "#FFFFFF";
    btn.style.border = "2px solid #E6CBA8";
  }}
  onMouseLeave={(e) => {
    const btn = e.currentTarget as HTMLButtonElement;
    btn.style.background = "linear-gradient(90deg, #E6CBA8 0%, #F7E7CE 100%)";
    btn.style.color = "#2E2D2B";
    btn.style.border = "none";
  }}
  onClick={onExploreMasks}
>
  Explore Masks
</button>


  {/* Find Your Ritual */}
  <button
    className="rounded-full px-12 py-4 text-lg font-semibold 
               text-white border-2 border-[#E6CBA8] bg-transparent 
               transition duration-300 
               hover:bg-gradient-to-r hover:from-[#E6CBA8] hover:to-[#F7E7CE] hover:text-[#2E2D2B] 
               focus:outline-none"
    onClick={onFindRitual}
  >
    Find Your Ritual
  </button>
</div>





  </motion.div>
</section>


  );
}
