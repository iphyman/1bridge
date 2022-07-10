import create from "zustand";
import { CHAIN_INFO } from "constants/chain-info";

type Blockchain = {
  logo: string;
  name: string;
  chainId: string;
};

type Currency = {
  logo: string;
  name: string;
};

interface State {
  blockchains: Blockchain[];
  fromChain: Blockchain;
  toChain: Blockchain;
  currency: Currency;
  currencies: Currency[];
  setFromChain: (fromChain: Blockchain) => void;
  setToChain: (toChain: Blockchain) => void;
  setCurrency: (currency: Currency) => void;
  setCurrencies: (currencies: Currency[]) => void;
}

const blockchains: Blockchain[] = [];

Object.keys(CHAIN_INFO).map((chainId) => {
  blockchains.push({
    logo: CHAIN_INFO[parseInt(chainId)].iconUrls[0],
    name: CHAIN_INFO[parseInt(chainId)].chainName,
    chainId: chainId,
  });
});

const defaultFromChain = {
  logo: blockchains[0].logo,
  name: blockchains[0].name,
  chainId: blockchains[0].chainId,
};

const defaultToChain = {
  logo: blockchains[2].logo,
  name: blockchains[2].name,
  chainId: blockchains[2].chainId,
};

const defaultCurrency = {
  logo: "https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png",
  name: "USDC",
};

export const useStore = create<State>((set) => ({
  blockchains: blockchains,
  fromChain: defaultFromChain,
  toChain: defaultToChain,
  currency: defaultCurrency,
  currencies: [defaultCurrency],
  setFromChain: (fromChain) => set({ fromChain }),
  setToChain: (toChain) => set({ toChain }),
  setCurrency: (currency) => set({ currency }),
  setCurrencies: (currencies) => set({ currencies }),
}));
