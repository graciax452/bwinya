import React from "react";
import type { ReactNode } from "react";

export interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Card = ({ children, className = "", onClick }: CardProps) => (
  <div
    className={`bg-white rounded-2xl shadow border border-gray-200 ${className}`}
    onClick={onClick}
    tabIndex={onClick ? 0 : undefined}
    role={onClick ? "button" : undefined}
    style={{ cursor: onClick ? "pointer" : undefined }}
  >
    {children}
  </div>
);

export const CardContent = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <div className={`w-full ${className}`}>{children}</div>
);
