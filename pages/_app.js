import "../styles/globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Head from "next/head";
import Script from "next/script";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`} //
      />

      <Script id="gtm-script" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');
        `}
      </Script>

      <Head>
        <link rel="shortcut icon" href="/image/favicon.ico" />
      </Head>

      <div className="dark:bg-slate-900 dark:text-white flex flex-col min-h-screen">
        <Navbar />
        <hr />
        <div className="flex-grow">
          <Component {...pageProps} className="flex-grow" />
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default MyApp;
// className={router.pathname === "/" ? "w-full absolute bottom-0" : {}}
