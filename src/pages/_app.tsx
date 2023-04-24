import type { AppProps } from "next/app";

// Styles/UI:
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import { cn } from "@/utils/cn";
import { Toaster, toast } from "sonner";

// Layout:
import Header from "@/layout/header";

// Font:
import { Inter } from "next/font/google";
const InterFont = Inter({
  subsets: ["latin"],
  variable: "--inter-font",
  weight: ["400", "900"],
  display: "swap",
  preload: true,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <main
        className={cn(
          `${InterFont.variable} h-screen w-screen font-sans text-sm`
        )}
      >
        <Header />
        <Component {...pageProps} />
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#171717",
              color: "#fff",
              border: "1px solid #262626",
            },
            className: "font-sans",
          }}
        />
      </main>
    </ThemeProvider>
  );
}
