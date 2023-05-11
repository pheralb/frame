import React from "react";
import { cn } from "@/utils";

interface GradientBtnProps {
  gradient: string;
  onClick: () => void;
  selected?: boolean;
}

const GradientBtn = (props: GradientBtnProps) => {
  return (
    <button
      onClick={props.onClick}
      className={cn(
        "rounded-md p-4 transition-all duration-150 hover:scale-105",
        props.gradient,
        props.selected
          ? "ring-1 ring-neutral-500 ring-opacity-60 ring-offset-2 ring-offset-neutral-400"
          : null
      )}
    />
  );
};

export default GradientBtn;
