import { useCallback, useEffect } from "react";
import shallow from "zustand/shallow";
import { find, includes } from "lodash";
import type { Bridge } from "types";
import { useStore } from "../state";
import {
  getMultiChainTokens,
  getSynapseChainTokens,
  getMeterChainTokens,
} from "../utils";

export const useBridge = () => {
  const [
    fromChain,
    toChain,
    fromCurrency,
    supportedBridge,
    setSupportedBridge,
  ] = useStore(
    (state) => [
      state.fromChain,
      state.toChain,
      state.currency,
      state.supportedBridge,
      state.setSupportedBridge,
    ],
    shallow
  );
  const SupportedBridge: Bridge[] = [];

  const isMultiChainSupported = useCallback(
    async (chainId: string, symbol: string) => {
      const data = await getMultiChainTokens(chainId);

      if (!data) return false;
      const result = find(data, { symbol: symbol });

      if (result) {
        const destChains = Object.keys(result.destChains);
        return includes(destChains, toChain.chainId);
      } else {
        return false;
      }
    },
    [toChain.chainId]
  );

  const isSynapseSupported = useCallback(
    async (chainId: string, symbol: string) => {
      const data = await getSynapseChainTokens(chainId);

      if (!data) return false;
      const result = find(data, { symbol: symbol });

      if (result) {
        const destChains = Object.keys(result.addresses);
        return includes(destChains, toChain.chainId);
      } else {
        return false;
      }
    },
    [toChain.chainId]
  );

  const isMeterSupported = useCallback(
    async (chainId: string, symbol: string) => {
      const data = await getMeterChainTokens(chainId);

      if (!data) return false;
      const result = find(data, { symbol: symbol });

      if (result) {
        return true;
      } else {
        return false;
      }
    },
    []
  );

  useEffect(() => {
    const load = async () => {
      const spBridge: Bridge[] = [];

      if (await isMultiChainSupported(fromChain.chainId, fromCurrency.symbol)) {
        spBridge.push(
          {
            name: "Connext",
            logo: "/connext.png",
            redirectUrl: `https://bridge.connext.network/?sendingChainId=${fromChain.chainId}&receivingChainId=${toChain.chainId}`,
            estimatedArrival: "",
          },
          {
            name: "Multichain",
            logo: "/multichain.png",
            redirectUrl: `https://app.multichain.org/#/router`,
            estimatedArrival: "10-30 minutes",
          }
        );
      }

      if (await isSynapseSupported(fromChain.chainId, fromCurrency.symbol)) {
        spBridge.push({
          name: "Synapse",
          logo: "/synapse.png",
          redirectUrl: `https://synapseprotocol.com/?inputCurrency=${fromCurrency.symbol}&inputChain=${fromChain.chainId}&outputChain=${toChain.chainId}`,
          estimatedArrival: "NA",
        });
      }

      if (await isMeterSupported(fromChain.chainId, fromCurrency.symbol)) {
        spBridge.push({
          name: "Meter Passport",
          logo: "/meterpassport.png",
          redirectUrl: `https://passport.meter.io`,
          estimatedArrival: "NA",
        });
      }

      setSupportedBridge(spBridge);
    };

    load();
  }, [
    fromChain.chainId,
    toChain.chainId,
    isMultiChainSupported,
    isSynapseSupported,
    isMeterSupported,
    fromCurrency.symbol,
    setSupportedBridge,
  ]);
};
