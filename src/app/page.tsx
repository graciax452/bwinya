"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import QuizStep from "@/components/QuizStep";
import { concerns } from "@/data/concerns";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

export default function HomePage() {
  // Main UI state
  const [view, setView] = useState<"home" | "products">("home");
  const [step, setStep] = useState(0);

  // Quiz state
  const [selectedConcern, setSelectedConcern] = useState<string | null>(null);
  const [subAnswer, setSubAnswer] = useState<string | null>(null);

  const currentConcern = concerns.find((c) => c.id === selectedConcern);

  // Top 3 recommended masks for selected concern
  const recommendedProducts = selectedConcern
    ? products
        .filter((p) => currentConcern?.maskIds.includes(p.id))
        .slice(0, 3)
    : [];

  // Product detail state
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#faf9f7] text-gray-900">

      {/* Hero Section */}
      {view === "home" && step === 0 && (
        <section className="flex flex-col items-center justify-center h-screen px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-serif text-gray-800 mb-6"
          >
            Luxury Asian Facemasks
          </motion.h1>
          <p className="max-w-xl text-lg text-gray-600 mb-8">
            Discover the timeless beauty rituals of Asia through elegant facemasks
            crafted to meet your unique skin needs.
          </p>
          <div className="flex gap-4">
            <Button
              className="rounded-2xl px-6 py-3 text-lg"
              onClick={() => setView("products")}
            >
              Shop Masks
            </Button>
            <Button
              variant="outline"
              className="rounded-2xl px-6 py-3 text-lg border-gray-400"
              onClick={() => setStep(1)}
            >
              Find Your Match
            </Button>
          </div>
        </section>
      )}

      {/* Quiz Section */}
      {step > 0 && view === "home" && (
        <section className="py-20 px-6 bg-white">
          <div className="max-w-3xl mx-auto text-center">
            {step === 1 && (
              <QuizStep
                question="What is your main skin concern?"
                options={concerns.map((c) => ({ label: c.label, value: c.id }))}
                onSelect={(val) => {
                  setSelectedConcern(val);
                  if (currentConcern?.subQuestions?.length) setStep(2);
                  else setStep(3);
                }}
              />
            )}

            {step === 2 && currentConcern?.subQuestions && (
              <QuizStep
                question={currentConcern.subQuestions[0].question}
                options={currentConcern.subQuestions[0].options}
                onSelect={(val) => {
                  setSubAnswer(val);
                  setStep(3);
                }}
              />
            )}

            {step === 3 && recommendedProducts.length > 0 && (
              <div className="mt-10">
                <h2 className="text-4xl font-serif mb-8">Your Best Mask Matches</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {recommendedProducts.map((p) => (
                    <ProductCard key={p.id} product={p} />
                  ))}
                </div>
                <div className="mt-8">
                  <Button
                    variant="outline"
                    className="rounded-2xl px-6 py-3"
                    onClick={() => {
                      setStep(0);
                      setSelectedConcern(null);
                      setSubAnswer(null);
                    }}
                  >
                    ← Back to Home
                  </Button>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Product Listing */}
      {view === "products" && !selectedProduct && (
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-serif text-center mb-12">
              Our Facemasks
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {products.map((product) => (
                <Card
                  key={product.id}
                  className="hover:shadow-lg transition cursor-pointer"
                  onClick={() => setSelectedProduct(product.id)}
                >
                  <CardContent className="p-6 text-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover rounded-xl mb-4"
                    />
                    <h3 className="text-xl font-medium mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-2">{product.description}</p>
                    <p className="text-gray-800 font-semibold">{product.price}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Product Detail */}
      {view === "products" && selectedProduct && (
        <section className="py-20 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <Button
              variant="outline"
              className="mb-6"
              onClick={() => setSelectedProduct(null)}
            >
              ← Back to Products
            </Button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <img
                src={products.find((p) => p.id === selectedProduct)?.image}
                alt={products.find((p) => p.id === selectedProduct)?.name}
                className="w-full h-96 object-cover rounded-2xl"
              />
              <div>
                <h2 className="text-3xl font-serif mb-4">
                  {products.find((p) => p.id === selectedProduct)?.name}
                </h2>
                <p className="text-gray-600 mb-4">
                  {products.find((p) => p.id === selectedProduct)?.description}
                </p>
                <p className="text-2xl font-semibold mb-6">
                  {products.find((p) => p.id === selectedProduct)?.price}
                </p>
                <Button className="rounded-2xl px-6 py-3 text-lg">
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
