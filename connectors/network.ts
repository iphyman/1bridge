import { initializeConnector } from "@web3-react/core";
import { Network } from "@web3-react/network";
import { NETWORK_URLS } from "../constants/chain-info";

export const [network, networkHooks] = initializeConnector<Network>(
  (actions) => new Network({ actions, urlMap: NETWORK_URLS })
);
