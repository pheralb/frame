"use client";

import type { ReactNode } from "react";
import { cn } from "@/utils";

interface SidebarProps {
  children: ReactNode;
}

interface SidebarSectionProps {
  title?: string;
  border?: boolean;
  children: ReactNode;
}

export const Sidebar = (props: SidebarProps) => {
  return (
    <div className="fixed left-0 top-0 h-full w-60 overflow-y-auto overflow-x-hidden pb-10 pt-[70px]">
      <div className="px-6">{props.children}</div>
    </div>
  );
};

export const SidebarSection = (props: SidebarSectionProps) => {
  return (
    <div
      className={cn(
        "flex flex-col pb-3",
        props.border && "border-b-2 border-neutral-400 dark:border-neutral-800"
      )}
    >
      {props.title && (
        <div className="mb-4 mt-4">
          <span className="text-neutral-600 dark:text-neutral-500">
            {props.title}
          </span>
        </div>
      )}
      {props.children}
    </div>
  );
};
