import { initializeConnector } from "@web3-react/core";
import { WalletConnect } from "@web3-react/walletconnect";
import { NETWORK_URLS } from "../constants/chain-info";

export const [walletConnect, walletConnectHooks] =
  initializeConnector<WalletConnect>(
    (actions) =>
      new WalletConnect({
        actions,
        options: {
          rpc: NETWORK_URLS,
        },
      })
  );
