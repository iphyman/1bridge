import type { MetaMask } from "@web3-react/metamask";
import type { Network } from "@web3-react/network";
import type { CoinbaseWallet } from "@web3-react/coinbase-wallet";
import type { WalletConnect } from "@web3-react/walletconnect";

export type Connectors = MetaMask | Network | CoinbaseWallet | WalletConnect;
export type ConnectorName =
  | "MetaMask"
  | "Network"
  | "CoinbaseWallet"
  | "WalletConnect";

export interface BaseChainInfo {
  readonly blockExplorerUrls: string[];
  readonly chainName: string;
  readonly iconUrls: string[];
  readonly rpcUrls: string[];
  readonly nativeCurrency: {
    name: string;
    symbol: string;
    decimals: 18;
  };
}

export interface WalletInfo {
  connector?: Connectors;
  name: string;
  iconURL: string;
  description: string;
  href: string | null;
  disabled: boolean;
  primary?: boolean;
  mobile?: boolean;
  mobileOnly?: boolean;
}
