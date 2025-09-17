// components/QuizStep.tsx
"use client";

type Option = { label: string; value: string };
type QuizStepProps = {
  question: string;
  options: Option[];
  onSelect: (value: string) => void;
  onBack?: () => void;
  step?: number;
  totalSteps?: number;
};

export default function QuizStep({ question, options, onSelect, onBack, step, totalSteps }: QuizStepProps) {
  return (
    <div className="flex flex-col items-center justify-center  px-6 text-center">
      {step && totalSteps && (
        <p className="mb-4 text-gray-500">
          Step {step} of {totalSteps}
        </p>
      )}
      <h2 className="text-3xl font-serif mb-8">{question}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl w-full">
        {options.map((opt) => (
          <button
            key={opt.value}
            onClick={() => onSelect(opt.value)}
            className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition font-medium"
          >
            {opt.label}
          </button>
        ))}
      </div>
      {onBack && (
        <button
          onClick={onBack}
          className="mt-8 text-gray-500 hover:text-gray-800 transition"
        >
          ← Back
        </button>
      )}
    </div>
  );
}
