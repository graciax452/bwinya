// src/data/products.ts # all mask product data
//Adding new masks: just append to this array with a new id. Make sure IDs match those in concerns.ts
export type Product = {
  id: number;
  name: string;
  description: string;
  image: string;
  price: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Hydrating Silk Mask",
    description: "Luxurious hydration for dry skin.",
    image: "/images/hydrating.jpg",
    price: "$15",
  },
  {
    id: 2,
    name: "Radiance Brightening Mask",
    description: "Brings glow and clarity to dull skin.",
    image: "/images/brightening.jpg",
    price: "$18",
  },
  {
    id: 3,
    name: "Clarifying Green Tea Mask",
    description: "Purifies blemish-prone skin.",
    image: "/images/green-tea.jpg",
    price: "$16",
  },
  {
    id: 4,
    name: "Soothing Rice Water Mask",
    description: "Gentle care for sensitive skin.",
    image: "/images/rice-water.jpg",
    price: "$17",
  },
  {
    id: 5,
    name: "Firming Ginseng Mask",
    description: "Helps reduce fine lines and firm skin.",
    image: "/images/ginseng.jpg",
    price: "$20",
  },

  // ✅ Add more products easily below
  {
    id: 6,
    name: "Revitalizing Lotus Mask",
    description: "Restores natural radiance and softness.",
    image: "/images/lotus.jpg",
    price: "$22",
  },
  {
    id: 7,
    name: "Hydrating Pearl Mask",
    description: "Deep hydration and luminous glow.",
    image: "/images/pearl.jpg",
    price: "$24",
  },
  {
    id: 8,
    name: "Anti-Aging Red Ginseng Mask",
    description: "Smooths fine lines and firms skin.",
    image: "/images/red-ginseng.jpg",
    price: "$25",
  },
  {
    id: 9,
    name: "Balancing Charcoal Mask",
    description: "Detoxifies and clarifies skin.",
    image: "/images/charcoal.jpg",
    price: "$19",
  },
  {
    id: 10,
    name: "Calming Green Tea & Aloe Mask",
    description: "Soothes redness and irritation.",
    image: "/images/green-tea-aloe.jpg",
    price: "$21",
  },
];
