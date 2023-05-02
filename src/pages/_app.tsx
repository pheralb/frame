import Head from "next/head";
import type { AppProps } from "next/app";

// Styles/UI:
import "@/styles/globals.css";
import { cn } from "@/utils/cn";
import { Toaster } from "sonner";
import { ThemeProvider, useTheme } from "next-themes";

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
  const { theme } = useTheme();
  return (
    <>
      <Head>
        <title>frame - Generate images with beautiful gradients.</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" href="/images/logo_svg.svg" />
      </Head>
      <style jsx global>
        {`
          :root {
            --inter-font: ${InterFont.style.fontFamily};
            --jetBrainsMono-font: ${jetBrainsMono.style.fontFamily};
          }
        `}
      </style>
      <ThemeProvider enableSystem={true} attribute="class">
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
                background: theme === "dark" ? "#171717" : "#E6E6E6",
                color: theme === "dark" ? "#E6E6E6" : "#171717",
                border:
                  theme === "dark" ? "1px solid #E6E6E6" : "1px solid #171717",
              },
              className: "font-sans",
            }}
          />
        </main>
      </ThemeProvider>
    </>
  );
}
