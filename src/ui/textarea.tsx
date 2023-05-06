"use client";

import React from "react";

import { cn } from "@/utils";
import { cva, type VariantProps } from "class-variance-authority";

// Global styles for input & textarea:
const textareaVariants = cva(
  "px-4 py-2 rounded-md border border-neutral-700/60 bg-neutral-800/30 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-neutral-700 w-full"
);

export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(textareaVariants({ className }))}
        {...props}
      />
    );
  }
);
TextArea.displayName = "TextArea";

export { TextArea, textareaVariants };
