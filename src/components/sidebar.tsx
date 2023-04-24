import type { ReactNode } from "react";

interface SidebarProps {
  children: ReactNode;
}

interface SidebarSectionProps {
  title?: string;
  children: ReactNode;
}

export const Sidebar = (props: SidebarProps) => {
  return (
    <div className="fixed left-0 top-0 mt-[70px] h-full w-60 overflow-y-auto overflow-x-hidden pb-10">
      <div className="px-6">{props.children}</div>
    </div>
  );
};

export const SidebarSection = (props: SidebarSectionProps) => {
  return (
    <div className="flex flex-col border-b border-neutral-800 pb-3">
      {props.title && (
        <div className="mb-4 mt-4">
          <span className="text-neutral-400">{props.title}</span>
        </div>
      )}
      {props.children}
    </div>
  );
};
