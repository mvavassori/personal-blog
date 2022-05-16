import "../styles/globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-3DYECJJTT7`} //${process.env.GOOGLE_ANALYTICS_ID}
      />

      <Script id="gtm-script" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3DYECJJTT7');
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
