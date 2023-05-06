"use client";

import { useTheme } from "next-themes";
import { Toaster } from "sonner";

interface OtherProviderProps {
  children: React.ReactNode;
}

const OtherProviders = (props: OtherProviderProps) => {
  const { theme } = useTheme();
  return (
    <>
      {props.children}
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: theme === "dark" ? "#171717" : "#E6E6E6",
            color: theme === "dark" ? "#E6E6E6" : "#171717",
            border:
              theme === "dark" ? "1px solid #E6E6E6" : "1px solid #171717",
          },
          className: "font-sans",
        }}
      />
    </>
  );
};

export default OtherProviders;
