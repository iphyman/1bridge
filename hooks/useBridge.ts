import { useCallback, useEffect } from "react";
import shallow from "zustand/shallow";
import { find, includes } from "lodash";
import type { Bridge } from "types";
import { useStore } from "../state";
import { getMultiChainTokens } from "../utils";

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

  useEffect(() => {
    const load = async () => {
      const spBridge: Bridge[] = [];

      if (await isMultiChainSupported(fromChain.chainId, fromCurrency.symbol)) {
        spBridge.push({
          name: "Connext",
          logo: "/connext.png",
          redirectUrl: `https://bridge.connext.network/?sendingChainId=${fromChain.chainId}`,
        });
      }

      setSupportedBridge(spBridge);
    };

    load();
  }, [
    fromChain.chainId,
    isMultiChainSupported,
    fromCurrency.symbol,
    setSupportedBridge,
  ]);
};
