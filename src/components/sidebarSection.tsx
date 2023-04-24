import type { ReactNode } from "react";

interface SidebarSectionProps {
  title?: string;
  children: ReactNode;
}

const SidebarSection = (props: SidebarSectionProps) => {
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

export default SidebarSection;
