import type { WalletInfo } from "../types";
import { metaMask } from "./metamask";

//Only MetaMask supported at the moment

export const SUPPORTED_WALLETS: { [key: string]: WalletInfo } = {
  METAMASK: {
    connector: metaMask,
    name: "MetaMask",
    iconURL: "/metaMask.png",
    description: "Easy-to-use browser extension.",
    href: null,
    disabled: false,
  },
};
