"use client";

import { cn } from "@/utils";
import { ArrowTr } from "iconoir-react";
import type { ReactNode } from "react";

interface ExternalLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
  arrow?: boolean;
  underline?: boolean;
}

export const ExternalLink = (props: ExternalLinkProps) => {
  return (
    <a
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "flex items-center space-x-2",
        props.underline && "hover:underline",
        props.className
      )}
    >
      {props.children}
      {props.arrow && <ArrowTr height={12} />}
    </a>
  );
};
