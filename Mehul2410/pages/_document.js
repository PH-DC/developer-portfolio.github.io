import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en-IN">
        <Head>
          <link rel="manifest" href="./manifest.json" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="application-name" content="Mehul" />
          <meta name="apple-mobile-web-app-title" content="Mehul" />
          <meta name="theme-color" content="#dbe2ef" />
          <meta name="msapplication-navbutton-color" content="#dbe2ef" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="black-translucent"
          />
          <meta name="msapplication-starturl" content="/" />

          <link rel="icon" sizes="512x512" href="./img/icon-512.png" />
          <link
            rel="apple-touch-icon"
            sizes="512x512"
            href="./img/icon-512x512.png"
          />
          <link rel="icon" sizes="192x192" href="./img/icon-192.png" />
          <link
            rel="apple-touch-icon"
            sizes="192x192"
            href="./img/icon-192.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
