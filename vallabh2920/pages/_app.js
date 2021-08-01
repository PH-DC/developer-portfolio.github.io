import "../public/css/style.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>
          Vallabh Ingle | I’m UI/UX Designer & Developer.
        </title>
        <link rel="shortcut icon" href="./img/title.svg" type="image/x-icon" />
        <meta
          name="title"
          content=" I’m UI/UX Designer & Developer."
        />
        <meta
          name="description"
          content="Develop myself with the opportunities provided."
        />  
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;