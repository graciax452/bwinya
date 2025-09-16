// src/data/concerns.ts # all concerns & sub-questions
export type SubQuestion = {
  id: string;
  question: string;
  options: { label: string; value: string }[];
};

export type Concern = {
  id: string;
  label: string;
  maskIds: number[]; // recommended mask IDs
  subQuestions?: SubQuestion[]; // further questions to refine selection
};

export const concerns: Concern[] = [
  {
    id: "dryness",
    label: "Dryness",
    maskIds: [1, 2], // IDs in products.ts
    subQuestions: [
      {
        id: "dryness-type",
        question: "What is the main cause of your dryness?",
        options: [
          { label: "Dehydration", value: "dehydration" },
          { label: "Flakiness", value: "flakiness" },
          { label: "Aging", value: "aging" },
        ],
      },
    ],
  },
  {
    id: "dullness",
    label: "Dullness",
    maskIds: [2, 3],
  },
  {
    id: "acne",
    label: "Acne / Blemishes",
    maskIds: [3, 4],
  },
  {
    id: "sensitivity",
    label: "Sensitivity",
    maskIds: [4],
  },
  {
    id: "aging",
    label: "Anti-aging / Fine Lines",
    maskIds: [5],
  },
];
