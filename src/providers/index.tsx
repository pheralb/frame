"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import type { ThemeProviderProps } from "next-themes/dist/types";
import { Toaster } from "sonner";

export function Providers({ children, ...props }: ThemeProviderProps) {
  const { theme } = useTheme();
  return (
    <NextThemesProvider {...props}>
      {children}
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
    </NextThemesProvider>
  );
}
