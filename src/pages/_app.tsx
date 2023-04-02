import type { AppProps } from "next/app";

// Styles:
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";

// Layout:
import Header from "@/layout/header";

// Font:
import { Heebo } from "next/font/google";
const heebo = Heebo({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-heebo",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <main className={`${heebo.variable} font-sans w-screen h-screen`}>
        <Header />
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
