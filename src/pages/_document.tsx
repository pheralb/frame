import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-light font-sans text-mini text-dark antialiased dark:bg-dark dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
