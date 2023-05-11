import type { ComponentProps, FC } from "react";

const Logo: FC<ComponentProps<"svg">> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 256 256"
    {...props}
  >
    <path d="M160 80H48a16 16 0 00-16 16v112a16 16 0 0016 16h112a16 16 0 0016-16V96a16 16 0 00-16-16zm0 128H48V96h112zM136 40a8 8 0 018-8h16a8 8 0 010 16h-16a8 8 0 01-8-8zm88 8v8a8 8 0 01-16 0v-8h-8a8 8 0 010-16h8a16 16 0 0116 16zm0 48v16a8 8 0 01-16 0V96a8 8 0 0116 0zm0 56v8a16 16 0 01-16 16h-8a8 8 0 010-16h8v-8a8 8 0 0116 0zM80 56v-8a16 16 0 0116-16h8a8 8 0 010 16h-8v8a8 8 0 01-16 0z"></path>
  </svg>
);

export default Logo;
