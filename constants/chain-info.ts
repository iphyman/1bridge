import type { BaseChainInfo } from "../types";
import { SupportedChainId } from "./chains";

export const CHAIN_INFO: { [chainId: number]: BaseChainInfo } = {
  [SupportedChainId.ETHEREUM]: {
    blockExplorerUrls: ["https://etherscan.io"],
    chainName: "Ethereum",
    iconUrls: [`/${SupportedChainId.ETHEREUM}.png`],
    rpcUrls: ["https://rpc.api.moonbeam.network"],
    nativeCurrency: { name: "Ethereum", symbol: "ETH", decimals: 18 },
  },
  [SupportedChainId.OPTIMISIM]: {
    blockExplorerUrls: [""],
    chainName: "Optimisim",
    iconUrls: [`/${SupportedChainId.OPTIMISIM}.png`],
    rpcUrls: ["https://mainnet.optimism.io"],
    nativeCurrency: { name: "Ethereum", symbol: "ETH", decimals: 18 },
  },
  [SupportedChainId.CRAB_NETWORK]: {
    blockExplorerUrls: ["https://crab.subscan.io"],
    chainName: "Darwinia Crab Network",
    iconUrls: [`/${SupportedChainId.CRAB_NETWORK}.png`],
    rpcUrls: ["https://crab-rpc.darwinia.network"],
    nativeCurrency: { name: "Darwinia Crab", symbol: "CRAB", decimals: 18 },
  },
  [SupportedChainId.BINANCE_SMART_CHAIN]: {
    blockExplorerUrls: ["https://bscscan.com"],
    chainName: "Binance Smart Chain",
    iconUrls: [`/${SupportedChainId.BINANCE_SMART_CHAIN}.png`],
    rpcUrls: ["https://bsc-dataseed.binance.org"],
    nativeCurrency: { name: "Binance Chain", symbol: "BNB", decimals: 18 },
  },
  [SupportedChainId.SYSCOIN]: {
    blockExplorerUrls: ["https://explorer.syscoin.org"],
    chainName: "Syscoin Mainnet",
    iconUrls: [`/${SupportedChainId.SYSCOIN}.png`],
    rpcUrls: ["https://rpc.syscoin.org"],
    nativeCurrency: { name: "Syscoin", symbol: "SYS", decimals: 18 },
  },
  [SupportedChainId.ONTOLOGY]: {
    blockExplorerUrls: ["https://explorer.ont.io"],
    chainName: "Ontology Mainnet",
    iconUrls: [`/${SupportedChainId.ONTOLOGY}.png`],
    rpcUrls: ["https://dappnode1.ont.io:10339"],
    nativeCurrency: { name: "Ontology", symbol: "ONG", decimals: 18 },
  },
  [SupportedChainId.OKEX_CHAIN]: {
    blockExplorerUrls: ["https://www.oklink.com/en/okc"],
    chainName: "OKXChain Mainnet",
    iconUrls: [`/${SupportedChainId.OKEX_CHAIN}.png`],
    rpcUrls: ["https://exchainrpc.okex.org"],
    nativeCurrency: { name: "Okex", symbol: "OKT", decimals: 18 },
  },
  [SupportedChainId.GNOSIS_CHAIN]: {
    blockExplorerUrls: ["https://blockscout.com/xdai/mainnet"],
    chainName: "Gnosis",
    iconUrls: [`/${SupportedChainId.GNOSIS_CHAIN}.png`],
    rpcUrls: ["https://rpc.gnosischain.com"],
    nativeCurrency: { name: "Gnosis", symbol: "xDAI", decimals: 18 },
  },
  [SupportedChainId.HUOBI_ECO_CHAIN]: {
    blockExplorerUrls: ["https://hecoinfo.com"],
    chainName: "Huobi ECO Chain Mainnet",
    iconUrls: [`/${SupportedChainId.HUOBI_ECO_CHAIN}.png`],
    rpcUrls: ["https://http-mainnet.hecochain.com"],
    nativeCurrency: { name: "Heco", symbol: "HT", decimals: 18 },
  },
  [SupportedChainId.POLYGON_CHAIN]: {
    blockExplorerUrls: ["https://polygonscan.com"],
    chainName: "Polygon Mainnet",
    iconUrls: [`/${SupportedChainId.POLYGON_CHAIN}.png`],
    rpcUrls: ["https://rpc.ankr.com/polygon"],
    nativeCurrency: { name: "Polygon", symbol: "MATIC", decimals: 18 },
  },
  [SupportedChainId.FANTOM]: {
    blockExplorerUrls: ["https://ftmscan.com"],
    chainName: "Fantom Opera",
    iconUrls: [`/${SupportedChainId.FANTOM}.png`],
    rpcUrls: ["https://rpc.ftm.tools"],
    nativeCurrency: { name: "Fantom", symbol: "FTM", decimals: 18 },
  },
  [SupportedChainId.BOBA]: {
    blockExplorerUrls: ["https://blockexplorer.boba.network"],
    chainName: "Boba Network",
    iconUrls: [`/${SupportedChainId.BOBA}.png`],
    rpcUrls: ["https://mainnet.boba.network"],
    nativeCurrency: { name: "Ethereum", symbol: "ETH", decimals: 18 },
  },
  [SupportedChainId.SHIDEN]: {
    blockExplorerUrls: ["https://blockscout.com/shiden"],
    chainName: "Shiden Network",
    iconUrls: [`/${SupportedChainId.SHIDEN}.png`],
    rpcUrls: ["https://shiden.api.onfinality.io/public"],
    nativeCurrency: { name: "Shiden", symbol: "SDN", decimals: 18 },
  },
  [SupportedChainId.SX]: {
    blockExplorerUrls: ["https://explorer.sx.technology"],
    chainName: "SX Network Mainnet",
    iconUrls: [`/${SupportedChainId.SX}.png`],
    rpcUrls: ["https://rpc.sx.technology"],
    nativeCurrency: { name: "SX", symbol: "SX", decimals: 18 },
  },
  [SupportedChainId.ASTAR]: {
    blockExplorerUrls: ["https://astar.subscan.io"],
    chainName: "Astar",
    iconUrls: [`/${SupportedChainId.ASTAR}.png`],
    rpcUrls: ["https://rpc.astar.network:8545"],
    nativeCurrency: { name: "Astar", symbol: "ASTR", decimals: 18 },
  },
  [SupportedChainId.CLV_PARACHAIN]: {
    blockExplorerUrls: ["clvscan.com"],
    chainName: "CLV Parachain",
    iconUrls: [`/${SupportedChainId.CLV_PARACHAIN}.png`],
    rpcUrls: ["https://api-para.clover.finance"],
    nativeCurrency: { name: "CLV", symbol: "CLV", decimals: 18 },
  },
  [SupportedChainId.CONFLUX_ESPACE]: {
    blockExplorerUrls: ["https://evm.confluxscan.net"],
    chainName: "Conflux eSpace",
    iconUrls: [`/${SupportedChainId.CONFLUX_ESPACE}.png`],
    rpcUrls: ["https://api-para.clover.finance"],
    nativeCurrency: { name: "Conflux", symbol: "CFX", decimals: 18 },
  },
  [SupportedChainId.METIS_ANDROMEDA]: {
    blockExplorerUrls: ["https://andromeda-explorer.metis.io"],
    chainName: "Metis Andromeda Mainnet",
    iconUrls: [`/${SupportedChainId.METIS_ANDROMEDA}.png`],
    rpcUrls: ["https://andromeda.metis.io/?owner=1088"],
    nativeCurrency: { name: "Metis", symbol: "METIS", decimals: 18 },
  },
  [SupportedChainId.MOONBEAM]: {
    blockExplorerUrls: ["https://moonscan.io"],
    chainName: "Moonbeam",
    iconUrls: [`/${SupportedChainId.MOONBEAM}.png`],
    rpcUrls: ["https://rpc.api.moonbeam.network"],
    nativeCurrency: { name: "Moonbeam", symbol: "GLMR", decimals: 18 },
  },
  [SupportedChainId.MOONRIVER]: {
    blockExplorerUrls: ["https://moonriver.moonscan.io"],
    chainName: "Moonriver",
    iconUrls: [`/${SupportedChainId.MOONRIVER}.png`],
    rpcUrls: ["https://rpc.api.moonriver.moonbeam.network"],
    nativeCurrency: {
      name: "Moonriver",
      symbol: "MOVR",
      decimals: 18,
    },
  },
  [SupportedChainId.MOONBASE_ALPHA]: {
    blockExplorerUrls: ["https://moonbase.moonscan.io"],
    chainName: "Moonbase Alpha",
    iconUrls: [`/${SupportedChainId.MOONBASE_ALPHA}.png`],
    rpcUrls: ["https://rpc.api.moonbase.moonbeam.network"],
    nativeCurrency: {
      name: "Dev",
      symbol: "DEV",
      decimals: 18,
    },
  },
  [SupportedChainId.MILKOMEDA_C1_MAINNET]: {
    blockExplorerUrls: [
      "https://explorer-mainnet-cardano-evm.c1.milkomeda.com",
    ],
    chainName: "Milkomeda C1 Mainnet",
    iconUrls: [`/${SupportedChainId.MILKOMEDA_C1_MAINNET}.png`],
    rpcUrls: ["https://rpc-mainnet-cardano-evm.c1.milkomeda.com"],
    nativeCurrency: { name: "Milkomeda", symbol: "mADA", decimals: 18 },
  },
  [SupportedChainId.KAVA_EVM]: {
    blockExplorerUrls: ["https://explorer.kava.io"],
    chainName: "Kava EVM Co-Chain",
    iconUrls: [`/${SupportedChainId.KAVA_EVM}.png`],
    rpcUrls: ["https://evm.kava.io"],
    nativeCurrency: { name: "Kava", symbol: "KAVA", decimals: 18 },
  },
  [SupportedChainId.EVMOS]: {
    blockExplorerUrls: ["https://evm.evmos.org"],
    chainName: "Evmos",
    iconUrls: [`/${SupportedChainId.EVMOS}.png`],
    rpcUrls: ["https://eth.bd.evmos.org:8545"],
    nativeCurrency: { name: "Evmos", symbol: "EVMOS", decimals: 18 },
  },
  [SupportedChainId.APECHAIN]: {
    blockExplorerUrls: ["https://explorer.bas.metaapesgame.com"],
    chainName: "Ape Chain",
    iconUrls: [`/${SupportedChainId.APECHAIN}.png`],
    rpcUrls: ["https://bas.metaapesgame.com/bas_mainnet_full_rpc"],
    nativeCurrency: { name: "Peel", symbol: "PEEL", decimals: 18 },
  },
  [SupportedChainId.ARBITRUM]: {
    blockExplorerUrls: ["https://arbiscan.io"],
    chainName: "Arbitrum One",
    iconUrls: [`/${SupportedChainId.ARBITRUM}.png`],
    rpcUrls: ["https://arb1.arbitrum.io/rpc"],
    nativeCurrency: { name: "Ethereum", symbol: "ETH", decimals: 18 },
  },
  [SupportedChainId.CELO_MAINNET]: {
    blockExplorerUrls: ["https://explorer.celo.org"],
    chainName: "Celo Mainnet",
    iconUrls: [`/${SupportedChainId.CELO_MAINNET}.png`],
    rpcUrls: ["https://forno.celo.org"],
    nativeCurrency: { name: "Celo", symbol: "CELO", decimals: 18 },
  },
  [SupportedChainId.OASIS_MAINNET]: {
    blockExplorerUrls: ["https://explorer.bas.metaapesgame.com"],
    chainName: "Oasis Chain Mainnet",
    iconUrls: [`/${SupportedChainId.OASIS_MAINNET}.png`],
    rpcUrls: ["https://scan.oasischain.io"],
    nativeCurrency: { name: "Oasis", symbol: "OAC", decimals: 18 },
  },
  [SupportedChainId.AVALANCHE_C_CHAIN]: {
    blockExplorerUrls: ["https://explorer.avax.network/"],
    chainName: "Avalanche C-Chain",
    iconUrls: [`/${SupportedChainId.AVALANCHE_C_CHAIN}.png`],
    rpcUrls: ["https://api.avax.network/ext/bc/C/rpc"],
    nativeCurrency: { name: "Avax", symbol: "AVAX", decimals: 18 },
  },
  [SupportedChainId.REI_CHAIN_MAINNET]: {
    blockExplorerUrls: ["https://scan.rei.network"],
    chainName: "REI Network",
    iconUrls: [`/${SupportedChainId.REI_CHAIN_MAINNET}.png`],
    rpcUrls: ["https://rpc.rei.network"],
    nativeCurrency: { name: "Rei", symbol: "REI", decimals: 18 },
  },
  [SupportedChainId.SWIMMER_NETWORK]: {
    blockExplorerUrls: ["https://explorer.swimmer.network"],
    chainName: "Swimmer Network",
    iconUrls: [`/${SupportedChainId.SWIMMER_NETWORK}.png`],
    rpcUrls: ["https://subnets.avax.network/swimmer/mainnet/rpc"],
    nativeCurrency: { name: "Swimmer", symbol: "TUS", decimals: 18 },
  },
  [SupportedChainId.PLATON]: {
    blockExplorerUrls: ["https://scan.platon.network"],
    chainName: "PlatON",
    iconUrls: [`/${SupportedChainId.PLATON}.png`],
    rpcUrls: ["https://openapi2.platon.network/rpc"],
    nativeCurrency: { name: "PlatON", symbol: "LAT", decimals: 18 },
  },
  [SupportedChainId.AURORA]: {
    blockExplorerUrls: ["https://aurorascan.dev"],
    chainName: "Aurora",
    iconUrls: [`/${SupportedChainId.AURORA}.png`],
    rpcUrls: ["https://mainnet.aurora.dev"],
    nativeCurrency: { name: "Aurora Ether", symbol: "aETH", decimals: 18 },
  },
};

export const getAddChainParameters = (chainId: number) => {
  const info = CHAIN_INFO[chainId];

  return {
    chainId,
    chainName: info.chainName,
    rpcUrls: info.rpcUrls,
    nativeCurrency: info.nativeCurrency,
    blockExplorerUrls: info.blockExplorerUrls,
  };
};

export const NETWORK_URLS: { [chainId: number]: string } = Object.keys(
  CHAIN_INFO
).reduce<{ [chainId: number]: string }>((accumulator, chainId) => {
  const validRpcurls: string[] = CHAIN_INFO[Number(chainId)].rpcUrls;

  if (validRpcurls.length) {
    accumulator[Number(chainId)] = validRpcurls[0];
  }

  return accumulator;
}, {});

export const EXPLORER_URLS: { [chainId: number]: string } = Object.keys(
  CHAIN_INFO
).reduce<{ [chainId: number]: string }>((accumulator, chainId) => {
  const validUrl: string[] = CHAIN_INFO[Number(chainId)].blockExplorerUrls;

  if (validUrl.length) {
    accumulator[Number(chainId)] = validUrl[0];
  }

  return accumulator;
}, {});
