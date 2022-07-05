import { CoinbaseWallet } from "@web3-react/coinbase-wallet";
import { initializeConnector } from "@web3-react/core";
import { NETWORK_URLS } from "../constants/chain-info";

export const [coinbaseWallet, coinbaseWalletHooks] =
  initializeConnector<CoinbaseWallet>(
    (actions) =>
      new CoinbaseWallet({
        actions,
        options: {
          url: NETWORK_URLS[1],
          appName: "CassavaLand",
        },
      })
  );
