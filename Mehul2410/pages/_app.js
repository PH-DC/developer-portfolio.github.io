import "../public/css/style.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>
          Mehul | Hi There, I’m Mehul Gawhale UI/UX Designer & Developer
        </title>
     <meta name="theme-color" content="#DBE2EF" />
        <link
          rel="shortcut icon"
          href="./img/favicon.ico"
          type="image/x-icon"
        />
       
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="title"
          content="Hi There, I’m Mehul Gawhale UI/UX Designer & Developer."
        />
        <meta
          name="description"
          content="I follow the path of never giving up to do things which'll make me proud"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mehul.vercel.app" />
        <meta
          property="og:title"
          content="Hi There, I’m Mehul Gawhale UI/UX Designer & Developer."
        />
        <meta
          property="og:description"
          content="I follow the path of never giving up to do things which'll make me proud"
        />
        <meta property="og:image" content="./img/favicon.ico" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.mehul.vercel.app" />
        <meta
          property="twitter:title"
          content="Hi There, I’m Mehul Gawhale UI/UX Designer & Developer."
        />
        <meta
          property="twitter:description"
          content="I follow the path of never giving up to do things which'll make me proud"
        />
        <meta property="twitter:image" content="./img/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
