import "./globals.css";
import type { Metadata } from "next";

import { Playfair_Display, Inter } from "next/font/google";


const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "bwinya - Personalized Skincare Masks",
  description: "Discover your perfect skincare match with our luxurious Asian & African facemasks.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
