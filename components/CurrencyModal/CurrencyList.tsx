import { MutableRefObject, useCallback, useMemo } from "react";
import { FixedSizeList } from "react-window";
import { CSSProperties } from "styled-components";
import { isEqual } from "lodash";
import type { Currency } from "types";
import { Logo } from "components/Logo";
import { LoadingRows } from "components/Loader";
import { Column, Text, MenuItem } from "styles/styleds";

interface CurrencyListItemProps {
  currency: Currency;
  onSelect: () => void;
  isSelected: boolean;
  style: CSSProperties;
}

const CurrencyRow = (props: CurrencyListItemProps) => {
  const { currency, isSelected, onSelect, style } = props;

  return (
    <MenuItem
      tabIndex={0}
      onKeyDown={(e) => (!isSelected && e.key === "Enter" ? onSelect() : null)}
      onClick={() => (isSelected ? null : onSelect())}
      disabled={isSelected}
      style={style}
    >
      <Logo src={currency.logo} />
      <Column>
        <Text weight={500} color="text300">
          {currency.name}
        </Text>
        <Text size="0.75rem">{currency.symbol}</Text>
      </Column>
    </MenuItem>
  );
};

export const CurrencyList = ({
  height,
  currencies,
  selectedCurrency,
  onCurrencySelect,
  fixedListRef,
  isLoading,
}: {
  height: number;
  currencies: Currency[];
  selectedCurrency?: Currency | null;
  onCurrencySelect: (currency: Currency) => void;
  fixedListRef?: MutableRefObject<FixedSizeList | undefined>;
  isLoading: boolean;
}) => {
  const itemData: Currency[] = useMemo(() => {
    return currencies;
  }, [currencies]);

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
      const row: Currency = data[index];
      const currency = row;

      const isSelected = Boolean(
        currency && selectedCurrency && isEqual(currency, selectedCurrency)
      );
      const handleSelect = () => currency && onCurrencySelect(currency);

      if (isLoading) {
        return (
          <LoadingRows>
            <div />
            <div />
            <div />
          </LoadingRows>
        );
      } else if (currency) {
        return (
          <CurrencyRow
            currency={currency}
            isSelected={isSelected}
            onSelect={handleSelect}
            style={style}
          />
        );
      } else {
        return null;
      }
    },
    [isLoading, onCurrencySelect, selectedCurrency]
  );

  const itemKey = useCallback((index: number, data: typeof itemData) => {
    const currency = data[index];
    return currency.symbol.toLowerCase() + "-" + index;
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
