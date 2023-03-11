import type { ReactNode } from "react";

interface ExternalLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
}

export const ExternalLink = (props: ExternalLinkProps) => {
  return (
    <a
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${props.className}`}
    >
      {props.children}
    </a>
  );
};
