import { MutableRefObject, useCallback, useMemo } from "react";
import { FixedSizeList } from "react-window";
import { CSSProperties } from "styled-components";
import { isEqual } from "lodash";
import type { Blockchain } from "types";
import { Logo } from "components/Logo";
import { Column, Text, MenuItem } from "styles/styleds";

interface ChainListItemProps {
  blockchain: Blockchain;
  onSelect: () => void;
  isFromSelected: boolean;
  isToSelected: boolean;
  style: CSSProperties;
}

const ChainListRow = (props: ChainListItemProps) => {
  const { blockchain, isFromSelected, isToSelected, onSelect, style } = props;

  return (
    <MenuItem
      tabIndex={0}
      onKeyDown={(e) =>
        !isFromSelected && e.key === "Enter" ? onSelect() : null
      }
      onClick={() => (isFromSelected ? null : onSelect())}
      disabled={isFromSelected || isToSelected}
      style={style}
    >
      <Logo src={blockchain.logo} />
      <Column>
        <Text weight={500} color="text300">
          {blockchain.name}
        </Text>
      </Column>
    </MenuItem>
  );
};

export const ChainList = ({
  height,
  blockchains,
  selectedFromChain,
  selectedToChain,
  onChainSelect,
  fixedListRef,
}: {
  height: number;
  blockchains: Blockchain[];
  selectedFromChain?: Blockchain | null;
  selectedToChain?: Blockchain | null;
  onChainSelect: (blockchain: Blockchain) => void;
  fixedListRef?: MutableRefObject<FixedSizeList | undefined>;
  isLoading: boolean;
}) => {
  const itemData: Blockchain[] = useMemo(() => {
    return blockchains;
  }, [blockchains]);

  const Row = useCallback(
    function TokenRow({
      data,
      index,
      style,
    }: {
      data: any;
      index: number;
      style: any;
    }) {
      const row: Blockchain = data[index];
      const blockchain = row;

      const isFromSelected = isEqual(blockchain, selectedFromChain);
      const isToSelected = isEqual(blockchain, selectedToChain);
      const handleSelect = () => blockchain && onChainSelect(blockchain);

      if (blockchain) {
        return (
          <ChainListRow
            blockchain={blockchain}
            isFromSelected={isFromSelected}
            isToSelected={isToSelected}
            onSelect={handleSelect}
            style={style}
          />
        );
      } else {
        return null;
      }
    },
    [selectedFromChain, selectedToChain, onChainSelect]
  );

  const itemKey = useCallback((index: number, data: typeof itemData) => {
    const blockchain = data[index];
    return blockchain.name.toLowerCase().replace("", "-") + "-" + index;
  }, []);

  return (
    <FixedSizeList
      width="100%"
      height={height}
      ref={fixedListRef as any}
      itemCount={itemData.length}
      itemSize={56}
      itemData={itemData}
      itemKey={itemKey}
    >
      {Row}
    </FixedSizeList>
  );
};
