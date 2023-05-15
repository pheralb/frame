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
            border: "1px solid #262626",
            color: theme === "dark" ? "#E6E6E6" : "#171717",
          },
          className: "font-sans",
        }}
      />
    </>
  );
};

export default OtherProviders;
