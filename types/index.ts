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

export type Currency = {
  name: string;
  logo: string;
  symbol: string;
};

export type Blockchain = {
  name: string;
  logo: string;
  chainId: string;
};

export type Bridge = {
  name: string;
  logo: string;
  redirectUrl: string;
};
