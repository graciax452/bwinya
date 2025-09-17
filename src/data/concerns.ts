export type Option = { label: string; value: string };
export type SubQuestion = { id: string; question: string; options: Option[] };
export type Concern = {
  id: string;
  label: string;
  maskIds: number[];      // recommended products
  subQuestions?: SubQuestion[];
};

export const concerns: Concern[] = [
  {
    id: "dryness",
    label: "Dryness",
    maskIds: [1, 6, 7],
    subQuestions: [
      {
        id: "dryness-type",
        question: "What type of dryness do you experience?",
        options: [
          { label: "Dehydration", value: "dehydration" },
          { label: "Flakiness", value: "flakiness" },
          { label: "Aging-related", value: "aging" },
        ],
      },
      {
        id: "dryness-season",
        question: "When is your skin driest?",
        options: [
          { label: "Winter", value: "winter" },
          { label: "Year-round", value: "year-round" },
          { label: "After cleansing", value: "after-cleansing" },
        ],
      },
      {
        id: "dryness-product-preference",
        question: "Do you prefer lightweight or rich textures?",
        options: [
          { label: "Lightweight", value: "lightweight" },
          { label: "Rich & creamy", value: "rich" },
        ],
      },
    ],
  },
  {
    id: "dullness",
    label: "Dullness",
    maskIds: [2, 3, 6],
    subQuestions: [
      {
        id: "dullness-type",
        question: "Is your dullness due to:",
        options: [
          { label: "Dead skin buildup", value: "dead-skin" },
          { label: "Lack of glow", value: "lack-of-glow" },
        ],
      },
      {
        id: "dullness-goal",
        question: "What is your main goal?",
        options: [
          { label: "Radiance", value: "radiance" },
          { label: "Even tone", value: "even-tone" },
        ],
      },
    ],
  },
  {
    id: "acne",
    label: "Acne / Blemishes",
    maskIds: [3, 9],
    subQuestions: [
        { id: "acne-type", question: "What type of acne do you have?", options: [ { label: "Whiteheads/Blackheads", value: "white-black-heads" }, { label: "Cystic", value: "cystic" }, { label: "Hormonal", value: "hormonal" } ] },
        { id: "acne-severity", question: "How severe is your acne?", options: [ { label: "Mild", value: "mild" }, { label: "Moderate", value: "moderate" }, { label: "Severe", value: "severe" } ] },
    ],
  },
  {
    id: "sensitivity",
    label: "Sensitivity",
    maskIds: [4, 10],
    subQuestions: [ 
        { id: "sensitivity-trigger", question: "What triggers your sensitivity?", options: [ { label: "Redness", value: "redness" }, { label: "Irritation", value: "irritation" }, { label: "Dry patches", value: "dry-patches" } ] },
        { id: "sensitivity-frequency", question: "How often do you experience sensitivity?", options: [ { label: "Occasionally", value: "occasionally" }, { label: "Frequently", value: "frequently" }, { label: "Constantly", value: "constantly" } ] },
    ],
  },
  {
    id: "aging",
    label: "Anti-aging / Fine Lines",
    maskIds: [5, 8, 7],
    subQuestions: [
        { id: "aging-concern", question: "What is your primary anti-aging concern?", options: [ { label: "Fine lines", value: "fine-lines" }, { label: "Loss of firmness", value: "loss-of-firmness" }, { label: "Dullness", value: "dullness" } ] },
        { id: "aging-prevention", question: "Are you looking for prevention or treatment?", options: [ { label: "Prevention", value: "prevention" }, { label: "Treatment", value: "treatment" } ] },
    ],
  },
];
