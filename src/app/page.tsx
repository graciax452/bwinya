"use client";
import { useState } from "react";
import { concerns } from "@/data/concerns";
import { products } from "@/data/products";
import HeroSection from "@/components/HeroSection";
import QuizStep from "@/components/QuizStep";
import { ProductCard } from "@/components/ProductCard";

export default function HomePage() {
  const [step, setStep] = useState(0); // 0 = hero
  const [selectedConcern, setSelectedConcern] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const currentConcern = concerns.find((c) => c.id === selectedConcern);
  const subQuestions = currentConcern?.subQuestions || [];

  const subStepIndex = step - 2; // first sub-question
  const currentSubQuestion = subQuestions[subStepIndex];

  const recommendedProducts =
    selectedConcern && step > subQuestions.length + 1
      ? products.filter((p) => currentConcern?.maskIds.includes(p.id)).slice(0, 3)
      : [];

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
      setStep(subQuestions.length + 2); // go to recommendations
    }
  };

  const handleBack = () => {
    if (step === 1) {
      setStep(0); // back to Hero
      setSelectedConcern(null);
    } else if (step === 2) {
      setStep(1); // back to concern picker
    } else if (step > 2) {
      setStep(step - 1); // previous sub-question
    }
  };

  return (
    <div className="min-h-screen bg-ivory text-foreground">

      {/* Hero Section */}
      <HeroSection
        onExploreMasks={() => {
          const el = document.getElementById("products");
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        }}
        onFindRitual={() => {
          setStep(1);
          const el = document.getElementById("quiz");
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        }}
      />

      {/* Quiz Section */}
      <section id="quiz" className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">

          {/* Step 1: Concern Picker with images */}
          {step === 1 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {concerns.map((c) => (
                <div
                  key={c.id}
                  className="cursor-pointer rounded-2xl shadow hover:shadow-lg transition overflow-hidden bg-champagne"
                  onClick={() => handlePickConcern(c.id)}
                >
                  {c.image && (
                    <img
                      src={c.image}
                      alt={c.label}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-4 text-lg font-medium">{c.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* Sub-questions */}
          {currentSubQuestion && (
            <QuizStep
              question={currentSubQuestion.question}
              options={currentSubQuestion.options}
              onSelect={handleAnswer}
              onBack={handleBack}
            />
          )}

          {/* Recommendations */}
          {recommendedProducts.length > 0 && (
            <div className="mt-10">
              <h2 className="text-4xl font-serif mb-8">Your Best Mask Matches</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {recommendedProducts.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
              <button
                className="mt-8 rounded-2xl px-6 py-3 border border-softgold text-foreground"
                onClick={() => setStep(step - 1)}
              >
                ← Back
              </button>
            </div>
          )}

        </div>
      </section>

      {/* Full Product Section */}
      <section id="products" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif text-center mb-12">Our Facemasks</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
