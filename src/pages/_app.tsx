import type { AppProps } from "next/app";

// Styles/UI:
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import { cn } from "@/utils/cn";
import { Toaster } from "sonner";

// Layout:
import Header from "@/layout/header";

// Fonts:
import { Inter } from "next/font/google";
import localFont from "next/font/local";
const InterFont = Inter({
  subsets: ["latin"],
  variable: "--inter-font",
  weight: ["400", "900"],
  display: "swap",
  preload: true,
});
const jetBrainsMono = localFont({
  variable: "--jetBrainsMono-font",
  src: "../fonts/JetBrainsMono-Regular.woff2",
  weight: "500",
  display: "swap",
  preload: true,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --inter-font: ${InterFont.style.fontFamily};
            --jetBrainsMono-font: ${jetBrainsMono.style.fontFamily};
          }
        `}
      </style>
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
    </>
  );
}
