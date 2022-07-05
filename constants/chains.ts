export enum SupportedChainId {
  ETHEREUM = 1,
  OPTIMISIM = 10,
  CRAB_NETWORK = 44,
  BINANCE_SMART_CHAIN = 56,
  SYSCOIN = 57,
  ONTOLOGY = 58,
  OKEX_CHAIN = 66,
  GNOSIS_CHAIN = 100,
  HUOBI_ECO_CHAIN = 128,
  POLYGON_CHAIN = 137,
  FANTOM = 250,
  BOBA = 288,
  SHIDEN = 336,
  SX = 416,
  ASTAR = 592,
  CLV_PARACHAIN = 1024,
  CONFLUX_ESPACE = 1030,
  METIS_ANDROMEDA = 1088,
  MOONBEAM = 1284,
  MOONRIVER = 1285,
  MOONBASE_ALPHA = 1287,
  MILKOMEDA_C1_MAINNET = 2001,
  KAVA_EVM = 2222,
  EVMOS = 9001,
  APECHAIN = 16350,
  OASIS_MAINNET = 26863,
  ARBITRUM = 42161,
  CELO_MAINNET = 42220,
  AVALANCHE_C_CHAIN = 43114,
  REI_CHAIN_MAINNET = 47805,
  SWIMMER_NETWORK = 73772,
  PLATON = 210425,
  AURORA = 1313161554,
}

/**
 * Array of all the supported chain IDs
 */
export const ALL_SUPPORTED_CHAIN_IDS: SupportedChainId[] = Object.values(
  SupportedChainId
).filter((id) => typeof id === "number") as SupportedChainId[];

/**
 * Array of supported chains per connector
 */
