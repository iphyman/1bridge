import styled from "styled-components";
import type { Colors } from "./styled";

interface RowProps {
  width?: string;
  align?: string;
  justify?:
    | "stretch"
    | "center"
    | "start"
    | "end"
    | "flex-start"
    | "flex-end"
    | "space-between";
  padding?: string;
  border?: string;
  borderRadius?: string;
  disabled?: boolean;
  gap?: "sm" | "md" | "lg" | string;
}

type StyledLogoProp = {
  size?: string;
};

type TextProps = {
  size?: string;
  weight?: number;
  color?: keyof Colors;
};

export const Row = styled.div<RowProps>`
  width: ${({ width }) => width ?? "100%"};
  display: flex;
  padding: 0;
  align-items: ${({ align }) => align ?? "center"};
  justify-content: ${({ justify }) => justify ?? "flex-start"};
  padding: ${({ padding }) => padding};
  border: ${({ border }) => border};
  border-radius: ${({ borderRadius }) => borderRadius};
`;

export const RowBetween = styled(Row)`
  justify-content: space-between;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const AutoColumn = styled.div<Pick<RowProps, "gap" | "justify">>`
  display: grid;
  grid-auto-rows: auto;
  grid-row-gap: ${({ gap }) =>
    (gap === "sm" && "0.5rem") ||
    (gap === "md" && "0.75rem") ||
    (gap === "lg" && "1.5rem") ||
    gap};
  justify-items: ${({ justify }) => justify && justify};
`;

export const StyledLogo = styled.div<StyledLogoProp>`
  position: relative;
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  background: radial-gradient(
    white 50%,
    #ffffff00 calc(75% + 1px),
    #ffffff00 100%
  );
  border-radius: 50%;
  box-shadow: 0 0 0.1rem black;
  border: 0rem solid rgba(255, 255, 255, 0);
`;

export const Text = styled.div<TextProps>`
  font-size: ${({ size }) => (size ? size : "1rem")};
  color: ${({ color, theme }) => (color ? theme[color] : theme.text200)};
  font-weight: ${({ weight }) => (weight ? weight : 400)};
`;

export const AutoRow = styled(Row)`
  flex-wrap: wrap;
  margin: ${({ gap }) => gap && `-${gap}`};
  justify-content: ${({ justify }) => justify && justify};
  & > * {
    margin: ${({ gap }) => gap} !important;
  }
`;

export const ModalContentWrapper = styled(Column)`
  width: 100%;
  flex: 1 1;
  position: relative;
`;

export const SearchInput = styled.input`
  position: relative;
  display: flex;
  padding: 1rem;
  align-items: center;
  width: 100%;
  white-space: nowrap;
  background: none;
  border: none;
  outline: none;
  border-radius: 1rem;
  color: ${({ theme }) => theme.text200};
  border-style: solid;
  border: 0.1rem solid ${({ theme }) => theme.bg200};
  -webkit-appearance: none;
  font-size: 18px;
  ::placeholder {
    color: ${({ theme }) => theme.text200};
  }
  transition: border 100ms;
  :focus {
    border: 0.1 solid ${({ theme }) => theme.primary100};
    outline: none;
  }
`;

export const Separator = styled.div`
  width: 100%;
  height: 0.1rem;
  background-color: ${({ theme }) => theme.bg200};
`;

export const MenuItem = styled(RowBetween)`
  height: 3.5rem;
  padding: 0.25rem 1.25rem;
  display: grid;
  grid-template-columns: auto minmax(auto, 1fr) auto minmax(0, 4.5rem);
  grid-gap: 1rem;
  cursor: ${({ disabled }) => !disabled && "pointer"};
  pointer-events: ${({ disabled }) => disabled && "none"};
  :hover {
    background-color: ${({ theme, disabled }) => !disabled && theme.bg200};
  }
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

export const BlockchainName = styled(Text)`
  margin-left: 0.5rem;
  margin-right: 0.25rem;
  font-weight: 500;
  width: calc(100% - 45px);
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
`;
