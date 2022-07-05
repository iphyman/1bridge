import { Web3ReactHooks } from "@web3-react/core";
import { Network } from "@web3-react/network";
import { WalletConnect } from "@web3-react/walletconnect";
import type { Connectors, ConnectorName } from "../types";
import { coinbaseWallet, coinbaseWalletHooks } from "./coinbase-wallet";
import { metaMask, metaMaskHooks } from "./metamask";
import { network, networkHooks } from "./network";
import { walletConnect, walletConnectHooks } from "./wallet-connect";

export const connectors: [Connectors, Web3ReactHooks][] = [
  [metaMask, metaMaskHooks],
  [walletConnect, walletConnectHooks],
  [coinbaseWallet, coinbaseWalletHooks],
  [network, networkHooks],
];

export const isWalletConnector = (connector: Connectors) =>
  connector instanceof WalletConnect;

export const isNetworkConnector = (connector: Connectors) =>
  connector instanceof Network;

export const getConnectorByName = (connectorName: ConnectorName) => {
  switch (connectorName) {
    case "CoinbaseWallet": {
      return coinbaseWallet;
    }
    case "Network": {
      return network;
    }
    case "WalletConnect": {
      return walletConnect;
    }
    case "MetaMask": {
      return metaMask;
    }

    default:
      return undefined;
  }
};

export {
  metaMask,
  metaMaskHooks,
  walletConnect,
  walletConnectHooks,
  coinbaseWallet,
  coinbaseWalletHooks,
  network,
  networkHooks,
};
