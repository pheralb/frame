"use client";

import React from "react";

import { cn } from "@/utils";
import { cva, type VariantProps } from "class-variance-authority";

// Global styles for input & textarea:
const inputVariants = cva(
  "px-4 py-2 rounded-md border border-neutral-400 dark:border-neutral-700/60 bg-neutral-300 dark:bg-neutral-800/30 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-neutral-400 dark:focus:ring-neutral-700"
);

// Input:
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(inputVariants({ className }))}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input, inputVariants };
