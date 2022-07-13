import { useEffect } from "react";

type Token = {
  logo: string;
  name: string;
};
export const BridgeData = () => {
  const tokens: Token[] = [];

  const getMultiChainTokens = async (chainId: string) => {
    const res = await fetch(
      `https://bridgeapi.anyswap.exchange/v4/tokenlistv4/${chainId}`
    );

    const data = await res.json();

    Object.keys(data).map((item) => {
      tokens.push({
        logo: data[item].logoUrl,
        name: data[item].symbol,
      });
    });

    return tokens;
  };

  const getTokens = async (fromChainId: string): Promise<Token[]> => {
    await getMultiChainTokens(fromChainId);

    return tokens;
  };

  return { getTokens };
};
