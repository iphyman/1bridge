import styled from "styled-components";
import { isEqual } from "lodash";
import { AutoColumn, AutoRow, Text } from "styles/styleds";
import { Logo } from "components/Logo";
import type { Currency } from "types";
import media from "styles/media";

const Container = styled(AutoColumn)`
  ${media.mobileL`
    display: none;
`};
`;

const BaseWrapper = styled.div<{ disabled?: boolean }>`
  border: 0.1rem solid
    ${({ theme, disabled }) => (disabled ? "transparent" : theme.bg200)};
  border-radius: 0.625rem;
  display: flex;
  padding: 0.375rem;
  align-items: center;
  :hover {
    cursor: ${({ disabled }) => !disabled && "pointer"};
    background-color: ${({ theme, disabled }) => !disabled && theme.bg300};
  }
  color: ${({ theme, disabled }) => disabled && theme.text200};
  background-color: ${({ theme, disabled }) => disabled && theme.bg200};
  filter: ${({ disabled }) => disabled && "grayscale(1)"};
`;

export const CommonBase = ({
  chainId,
  onSelect,
  selectedCurrency,
}: {
  chainId?: number;
  selectedCurrency?: Currency | null;
  onSelect: (currency: Currency) => void;
}) => {
  const bases = typeof chainId !== "undefined" ? [] : [];

  return bases.length > 0 ? (
    <Container gap="md">
      <AutoRow gap="0.25rem">
        {bases.map((currency: Currency, index) => {
          const isSelected = Boolean(
            currency && selectedCurrency && isEqual(currency, selectedCurrency)
          );

          return (
            <BaseWrapper
              tabIndex={0}
              onKeyDown={(e) =>
                !isSelected && e.key === "Enter" ? onSelect(currency) : null
              }
              onClick={() => (isSelected ? null : onSelect(currency))}
              disabled={isSelected}
              key={index}
            >
              <Logo src={currency.logo} alt={currency.symbol} />
              <Text weight={500} style={{ marginLeft: "0.5rem" }}>
                {currency.symbol}
              </Text>
            </BaseWrapper>
          );
        })}
      </AutoRow>
    </Container>
  ) : null;
};
