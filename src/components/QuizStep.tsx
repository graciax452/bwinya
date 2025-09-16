"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

type Option = {
  label: string;
  value: string;
};

type Props = {
  question: string;
  options: Option[];
  onSelect: (value: string) => void;
};

export default function QuizStep({ question, options, onSelect }: Props) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <h2 className="text-3xl font-serif mb-6">{question}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {options.map((opt) => (
          <Card
            key={opt.value}
            className="cursor-pointer hover:shadow-xl transition"
            onClick={() => onSelect(opt.value)}
          >
            <CardContent className="p-6">
              <p className="text-lg font-medium">{opt.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </motion.div>
  );
}
