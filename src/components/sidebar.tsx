import type { ReactNode } from "react";

interface SidebarProps {
  children: ReactNode;
}

const Sidebar = (props: SidebarProps) => {
  return (
    <div className="fixed top-0 left-0 h-full pb-10 overflow-x-hidden overflow-y-auto w-60 pt-16">
      <div className="px-6">{props.children}</div>
    </div>
  );
};

export default Sidebar;
