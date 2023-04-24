import type { ReactNode } from "react";

interface SidebarSectionProps {
  title?: string;
  children: ReactNode;
}

const SidebarSection = (props: SidebarSectionProps) => {
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

export default SidebarSection;
