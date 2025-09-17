"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { concerns } from "@/data/concerns";
import { products, Product } from "@/data/products";
import HeroSection from "@/components/HeroSection";
import QuizStep from "@/components/QuizStep";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Head from "next/head";
import Image from "next/image";

export default function HomePage() {
  // ----- State -----
  const [step, setStep] = useState(0); // quiz step
  const [selectedConcern, setSelectedConcern] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showFloatingBtn, setShowFloatingBtn] = useState(false);
  const [showCartPopup, setShowCartPopup] = useState(false);

  // ----- Current concern & quiz -----
  const currentConcern = concerns.find((c) => c.id === selectedConcern);
  const subQuestions = currentConcern?.subQuestions || [];
  const subStepIndex = step - 2;
  const currentSubQuestion = subQuestions[subStepIndex];

  const recommendedProducts =
    selectedConcern && step > subQuestions.length + 1
      ? products.filter((p) => currentConcern?.maskIds.includes(p.id)).slice(0, 3)
      : [];

  const headerImage =
    step === 1
      ? "/images/concerns/quiz-header.jpg"
      : currentConcern?.image || "/images/concerns/quiz-header.jpg";

  // ----- Handlers -----
  const handlePickConcern = (concernId: string) => {
    setSelectedConcern(concernId);
    setStep(subQuestions.length ? 2 : subQuestions.length + 2);
  };

  const handleAnswer = (value: string) => {
    if (!currentSubQuestion) return;
    setAnswers({ ...answers, [currentSubQuestion.id]: value });
    if (subStepIndex + 1 < subQuestions.length) {
      setStep(step + 1);
    } else {
      setStep(subQuestions.length + 2);
    }
  };

  const handleBack = () => {
    if (step === 1) {
      setStep(0);
      setSelectedConcern(null);
      setIsModalOpen(false);
    } else if (step === 2) {
      setStep(1);
    } else if (step > 2) {
      setStep(step - 1);
    }
  };

  const handleAddToCart = (product: Product) => {
    setShowCartPopup(true);
    setTimeout(() => setShowCartPopup(false), 1500);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileMenuOpen(false);
  };

  // ----- Floating Button Visibility -----
  useEffect(() => {
    const handleScroll = () => {
      const heroEl = document.getElementById("hero");
      if (!heroEl) return;
      const heroBottom = heroEl.getBoundingClientRect().bottom;
      setShowFloatingBtn(heroBottom < 0 && !isModalOpen);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isModalOpen]);

  return (
    <>
      <Head>
        <title>bwinya - Glow with Ritual Masks</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-ivory text-foreground relative">
        {/* ================= Top Navigation ================= */}
        <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-sm">
          <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
            {/* Logo */}
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection("hero")}>
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#D4AF37] via-[#E6CBA8] to-[#F7E7CE] shadow-lg shadow-[#D4AF37]/60 animate-pulse" />
              <span className="font-serif text-2xl font-bold tracking-widest lowercase text-[#E6CBA8]">bwinya</span>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex gap-6 text-lg font-medium">
              <button onClick={() => scrollToSection("about")} className="hover:text-softgold transition">About</button>
              <button onClick={() => scrollToSection("products")} className="hover:text-softgold transition">Shop Masks</button>
              <button onClick={() => { setIsModalOpen(true); setStep(1); }} className="hover:text-softgold transition">Find Your Ritual</button>
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                <Menu size={28} />
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="md:hidden bg-white shadow-md">
                <div className="flex flex-col gap-4 px-6 py-4">
                  <button onClick={() => scrollToSection("about")} className="hover:text-softgold transition text-left">About</button>
                  <button onClick={() => scrollToSection("products")} className="hover:text-softgold transition text-left">Shop Masks</button>
                  <button onClick={() => { setIsModalOpen(true); setStep(1); setMobileMenuOpen(false); }} className="hover:text-softgold transition text-left">Find Your Ritual</button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        {/* ================= Hero Section ================= */}
        <div id="hero">
          <HeroSection
            onExploreMasks={() => scrollToSection("products")}
            onFindRitual={() => { setIsModalOpen(true); setStep(1); }}
          />
        </div>

        {/* ================= About Section ================= */}
        <section id="about" className="py-20 px-6 bg-ivory max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif text-center mb-8">About bwinya</h2>
          <p className="text-center max-w-3xl mx-auto text-lg leading-relaxed">
            bwinya (a Shona word meaning <strong>&quot;to glow&quot;</strong>) celebrates timeless beauty rituals inspired by Asia and nourishing botanicals from Africa. 
            Our masks are designed to enhance your natural radiance and bring ritualistic self-care into your daily life.
          </p>
        </section>

        {/* ================= Floating "Find Your Ritual" Button ================= */}
        <AnimatePresence>
          {showFloatingBtn && !isModalOpen && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} className="fixed bottom-6 right-6 z-50">
              <Button
                style={{
                  background: "linear-gradient(90deg, #E6CBA8 0%, #F7E7CE 100%)",
                  color: "#2E2D2B",
                  borderRadius: "9999px",
                  padding: "1rem 2rem",
                  fontSize: "1rem",
                  fontWeight: 600,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                  transition: "all 0.3s ease",
                }}
                onClick={() => { setIsModalOpen(true); setStep(1); }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.opacity = "0.85"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.opacity = "1"; }}
              >
                Find Your Ritual
              </Button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ================= Added to Cart Popup ================= */}
        <AnimatePresence>
          {showCartPopup && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50"
            >
              <div
                style={{
                  background: "linear-gradient(90deg, #E6CBA8 0%, #F7E7CE 100%)",
                  color: "#2E2D2B",
                  borderRadius: "9999px",
                  padding: "1rem 2rem",
                  fontSize: "1rem",
                  fontWeight: 600,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                  transition: "all 0.3s ease",
                }}
              >
                Added to cart!
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ================= Quiz Modal ================= */}
        <AnimatePresence>
          {isModalOpen && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-40 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
              <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 50, opacity: 0 }} transition={{ duration: 0.3 }} className="bg-white rounded-3xl shadow-xl max-w-5xl w-full p-8 relative overflow-y-auto max-h-[90vh]">
                {/* Modal Header */}
                <div className="relative mb-4">
                  <Image
                    src={headerImage}
                    alt="Find Your Ritual"
                    width={800}
                    height={300}
                    className="w-full h-48 object-cover rounded-2xl"
                  />

                  <h2 className="absolute bottom-4 left-6 text-3xl sm:text-4xl font-serif text-white drop-shadow-lg">
                    {currentConcern ? `Your ${currentConcern.label} Ritual` : "Find Your Ritual"}
                  </h2>
                </div>

                {/* Close Button */}
                <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold" onClick={() => setIsModalOpen(false)}>×</button>

                {/* Step 1: Pick Concern */}
                {step === 1 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {concerns.map((c) => (
                      <div key={c.id} className="cursor-pointer rounded-2xl shadow hover:shadow-lg transition overflow-hidden bg-champagne" onClick={() => handlePickConcern(c.id)}>
                        {c.image && <Image
                                      src={c.image}
                                      alt={c.label}
                                      width={400}
                                      height={300}
                                      className="w-full h-48 object-cover"
                                    />
                        }
                        <div className="p-4 text-lg font-medium">{c.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Sub-questions */}
                {currentSubQuestion && <QuizStep question={currentSubQuestion.question} options={currentSubQuestion.options} onSelect={handleAnswer} onBack={handleBack} />}

                {/* Recommendations in Modal */}
                {recommendedProducts.length > 0 && (
                  <div className="mt-6">
                    <h3 className="text-2xl font-serif mb-4">Your Best Mask Matches</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {recommendedProducts.map((p) => (
                        <ProductCard key={p.id} product={p} onAddToCart={handleAddToCart} />
                      ))}
                    </div>
                    <button className="mt-6 rounded-2xl px-6 py-3 border border-softgold text-foreground" onClick={() => setStep(step - 1)}>← Back</button>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ================= Product Section ================= */}
        <section id="products" className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-serif text-center mb-12">Our Facemasks</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {products.map((p) => (
                <ProductCard key={p.id} product={p} onAddToCart={handleAddToCart} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
