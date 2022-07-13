import create from "zustand";
import { CHAIN_INFO } from "constants/chain-info";
import type { Currency, Blockchain, Bridge } from "types";

export enum ModalView {
  Currency,
  Fromchain,
  ToChain,
}

type ApplicationModal = ModalView | null;

interface State {
  activeModal: ApplicationModal;
  supportedBridge: Bridge[];
  blockchains: Blockchain[];
  fromChain: Blockchain;
  toChain: Blockchain;
  currency: Currency;
  setActiveModal: (activeModal: ApplicationModal) => void;
  setSupportedBridge: (supportedBridge: Bridge[]) => void;
  setFromChain: (fromChain: Blockchain) => void;
  setToChain: (toChain: Blockchain) => void;
  setCurrency: (currency: Currency) => void;
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
  symbol: "USDC",
  name: "USD coin",
};

export const useStore = create<State>((set) => ({
  activeModal: null,
  supportedBridge: [],
  blockchains: blockchains,
  fromChain: defaultFromChain,
  toChain: defaultToChain,
  currency: defaultCurrency,
  setActiveModal: (activeModal) => set({ activeModal }),
  setSupportedBridge: (supportedBridge) => set({ supportedBridge }),
  setFromChain: (fromChain) => set({ fromChain }),
  setToChain: (toChain) => set({ toChain }),
  setCurrency: (currency) => set({ currency }),
}));
