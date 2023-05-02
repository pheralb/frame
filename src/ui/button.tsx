import React from "react";

import { cn } from "@/utils";
import { cva, type VariantProps } from "class-variance-authority";
import Spinner from "./spinner";

const buttonVariants = cva(
  "flex items-center justify-center rounded-md px-4 py-2 font-medium dark:text-white transition-all duration-200 ease-in-out  hover:shadow-md outline-none focus:outline-none focus:ring-2 focus:ring-opacity-50 border border-neutral-400 dark:border-neutral-700/60 bg-neutral-300 hover:bg-neutral-300/30 dark:bg-neutral-800 dark:hover:bg-neutral-800/50 focus:ring-neutral-700 cursor-pointer",
  {
    variants: {
      variant: {
        default: "",
        link: "",
        loading: "text-neutral-500 cursor-default",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  icon?: React.ReactNode;
  loadingText?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, icon, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, className }))}
        disabled={variant === "loading"}
        {...props}
      >
        {variant === "loading" ? (
          <div className="mr-2">
            <Spinner size={14} />
          </div>
        ) : icon ? (
          <div className="mr-2">{icon}</div>
        ) : null}
        {variant === "loading" ? props.loadingText : props.children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
