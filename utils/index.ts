import { SupportedChainId } from "../constants/chains";
import type { Blockchain, Currency } from "types";

export function getTokenFilter<T extends Currency>(
  query: string
): (token: T) => boolean {
  const queryParts = query
    .toLowerCase()
    .split(/\s+/)
    .filter((s) => s.length > 0);

  const match = (s: string): boolean => {
    const parts = s
      .toLowerCase()
      .split(/\s+/)
      .filter((s) => s.length > 0);

    return queryParts.every(
      (p) =>
        p.length === 0 || parts.some((sp) => sp.startsWith(p) || sp.endsWith(p))
    );
  };

  return ({ name, symbol }: T): boolean =>
    Boolean((symbol && match(symbol)) || (name && match(name)));
}

export function getFilter<T extends Blockchain>(
  query: string
): (chain: T) => boolean {
  const queryParts = query
    .toLowerCase()
    .split(/\s+/)
    .filter((s) => s.length > 0);

  const match = (s: string): boolean => {
    const parts = s
      .toLowerCase()
      .split(/\s+/)
      .filter((s) => s.length > 0);

    return queryParts.every(
      (p) =>
        p.length === 0 || parts.some((sp) => sp.startsWith(p) || sp.endsWith(p))
    );
  };

  return ({ name }: T): boolean => Boolean(name && match(name));
}

export const getMultiChainTokens = async (chainId: string) => {
  const res = await fetch(
    `https://bridgeapi.anyswap.exchange/v4/tokenlistv4/${chainId}`
  );

  return await res.json();
};

export const getSynapseChainTokens = async (chainId: string) => {
  const res = await fetch(`/api/synapse?chainId=${chainId}`);

  return res.json();
};

export const getMeterChainTokens = async (chainId: string) => {
  const nameMap = () => {
    switch (parseInt(chainId)) {
      case SupportedChainId.AVALANCHE_C_CHAIN: {
        return "avalanche";
      }
      case SupportedChainId.BINANCE_SMART_CHAIN: {
        return "bsc";
      }
      case SupportedChainId.MOONBEAM: {
        return "moonbeam";
      }
      case SupportedChainId.MOONRIVER: {
        return "moonriver";
      }
      case SupportedChainId.POLYGON_CHAIN: {
        return "polygon";
      }
      case SupportedChainId.ETHEREUM: {
        return "ethereum";
      }

      default: {
        return null;
      }
    }
  };

  if (!nameMap()) {
    return null;
  }

  const res = await fetch(
    `https://raw.githubusercontent.com/meterio/token-list/master/generated/chain-configs/${nameMap()}.json`
  );

  return await res.json();
};
