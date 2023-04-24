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
    <div className="fixed top-0 left-0 h-full pb-10 overflow-x-hidden overflow-y-auto w-60 mt-[70px]">
      <div className="px-6">{props.children}</div>
    </div>
  );
};

export const SidebarSection = (props: SidebarSectionProps) => {
  return (
    <div className="flex flex-col pb-3 border-b border-neutral-800">
      {props.title && (
        <div className="mt-4 mb-4">
          <span className="text-neutral-400">{props.title}</span>
        </div>
      )}
      {props.children}
    </div>
  );
};
