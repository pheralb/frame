// Styles/UI:
import "@/styles/globals.css";
import { cn } from "@/utils/cn";

// Layout:
import Header from "@/layout/header";

// Providers:
import { ThemeProvider } from "@/providers/theme";
import OtherProviders from "@/providers/others";

// Fonts:
import { Inter } from "next/font/google";
const InterFont = Inter({
  subsets: ["latin"],
  variable: "--inter-font",
  weight: ["400", "900"],
  display: "swap",
  preload: true,
});

export const metadata = {
  // -----
  // Metadata:
  title: "frame - Generate images with beautiful gradients.",
  description: "Generate images with beautiful gradients",
  themeColor: "#121212",
  category: "Utilities",
  // -----
  // Open Graph:
  openGraph: {
    title: "frame",
    description: "Generate images with beautiful gradients.",
    url: "https://myframe.vercel.app",
    siteName: "frame",
    locale: "en-US",
    type: "website",
    images: [
      {
        url: "https://myframe.vercel.app/images/og_image.png",
        width: 1856,
        height: 1010,
      },
    ],
  },
  // -----
  // Icons:
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/images/logo.png",
    },
  },
  // -------
  // Twitter:
  twitter: {
    card: "summary_large_image",
    title: "frame",
    description: "Generate images with beautiful gradients",
    creator: "@pheralb_",
    images: ["https://myframe.vercel.app/images/og_image.png"],
  },
  // -------
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          `${InterFont.variable} h-screen w-screen bg-light font-sans text-mini text-sm text-dark antialiased dark:bg-neutral-900 dark:text-white`
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <OtherProviders>
            <Header />
            <main>{children}</main>
          </OtherProviders>
        </ThemeProvider>
      </body>
    </html>
  );
}
