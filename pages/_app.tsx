import type { AppProps } from "next/app";
import Head from "next/head";
import dynamic from "next/dynamic";
import { ThemeProvider } from "contexts/theme";
import { GlobalStyle } from "styles/globalStyle";
import { Navbar } from "components/Navbar";

const CurrencyModal = dynamic(() => import("components/CurrencyModal"), {
  ssr: false,
});

const BlockchainModal = dynamic(() => import("components/BlockchainModal"), {
  ssr: false,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>
          1Bridge - Cross blockchain bridge aggregator for Avalanche, Binance
          Chain, Ethereum, MoonBeam, MoonRiver, Fantom, Gnosis
        </title>
      </Head>
      <ThemeProvider>
        <GlobalStyle />
        <Navbar />
        <Component {...pageProps} />
        <CurrencyModal />
        <BlockchainModal />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
