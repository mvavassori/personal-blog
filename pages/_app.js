import "../styles/globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/image/favicon.ico" />
      </Head>

      <div className="dark:bg-slate-900 dark:text-white">
        <Navbar />
        <hr />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
