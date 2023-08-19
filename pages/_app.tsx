import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

import "../src/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <Component {...pageProps} />;
    </ThemeProvider>
  );
}
