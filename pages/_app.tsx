import type { AppProps } from "next/app";
import Head from "next/head";
import { Web3ReactProvider } from "@web3-react/core";
import { ThemeProvider } from "@contexts/theme";
import { connectors } from "@connectors";
import { GlobalStyle } from "@styles/globalStyle";
import { Navbar } from "@components/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>
          1Bridge - Cross blockchain bridge aggregator for Avalanche, Binance
          Chain, Ethereum, MoonBeam, MoonRiver, Fantom, Gnosis
        </title>
      </Head>
      <Web3ReactProvider connectors={connectors}>
        <ThemeProvider>
          <GlobalStyle />
          <Navbar />
          <Component {...pageProps} />
        </ThemeProvider>
      </Web3ReactProvider>
    </>
  );
}

export default MyApp;
