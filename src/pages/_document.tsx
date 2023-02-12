import BackgroundFlash from "@/components/BackgroundFlash";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <BackgroundFlash />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
