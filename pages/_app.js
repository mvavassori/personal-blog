import "../styles/globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        id="gtm-script-1"
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_ID}`}
      />

      <Script id="gtm-script-2" strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.GOOGLE_ANALYTICS_ID}', {
              page_path: window.location.pathname,
            });
                `}
      </Script>

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
