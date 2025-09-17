// src/components/ui/button.tsx
import React from "react";
import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "default" | "outline" | "secondary";
  className?: string;
}

export const Button = ({
  children,
  variant = "default",
  className = "",
  ...props
}: ButtonProps) => {
  const base =
    "inline-flex items-center justify-center font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-full px-10 py-4 text-lg";

  const variants = {
    default: "bg-gradient-to-r from-champagne to-softgold text-foreground shadow-lg hover:from-softgold hover:to-champagne",
    outline: "border border-softgold text-foreground bg-transparent hover:bg-blush hover:text-foreground",
    secondary: "bg-blush text-foreground hover:bg-champagne",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
