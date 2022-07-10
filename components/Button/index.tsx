import styled from "styled-components";
import { darken, lighten } from "polished";

export interface BaseButtonProps {
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  opacity?: string;
}

export const BaseButton = styled.button.attrs<BaseButtonProps>(({ type }) => ({
  type: type ?? "button",
}))<BaseButtonProps>`
  width: auto;
  height: auto;
  padding: 0.625rem 1rem;
  margin: 0rem;
  background-color: transparent;
  border-width: 0.1rem;
  border-style: solid;
  border-color: transparent;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  text-align: center;
  line-height: 1;
  color: #fff;
  text-transform: none;
  font-weight: 600;
  font-family: "Rubik", sans-serif;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  text-decoration: none;
  transition: all 0.25s ease-in-out;
  opacity: ${({ disabled, opacity }) =>
    disabled ? 0.5 : opacity ? opacity : 1};
  &:hover {
    text-decoration: none;
  }
  &:focus {
    outline: 0px;
  }
`;

export const ConnectButton = styled(BaseButton)`
  background-color: rgba(21, 61, 111, 0.44);
  padding: 0.25rem 0.5rem;
  font-weight: 500;
  color: rgb(80, 144, 234);
  transition: all 0.5s ease;
  border-radius: 0.75rem;
  border: 0.1rem solid rgba(21, 61, 111, 0.44);
  &:hover {
    border: 0.1rem solid rgba(49, 95, 154, 0.44);
    color: rgb(57, 130, 231);
  }
`;

export const SelectButton = styled(ConnectButton)<{
  transparent?: boolean;
}>`
  background-color: ${({ theme, transparent }) =>
    transparent === true ? "transparent" : theme.bg200};
  color: ${({ theme }) => theme.text200};
  margin: 0rem;
  &:hover {
    border: 0.1rem solid ${({ theme }) => theme.bg200};
    color: ${({ theme }) => theme.text200};
  }
  max-width: 9rem;
  white-space: nowrap;
  border-radius: 0.5rem;
  height: 2.5rem;
`;

export const MenuButton = styled(BaseButton)`
  background-color: ${({ theme }) => theme.bg100};
  padding: 0.25rem 0.5rem;
  height: 2.4rem;
  margin-left: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text300};
  transition: all 0.5s ease;
  border-radius: 0.75rem;
  &:hover {
    background-color: ${({ theme }) => lighten(0.1, theme.bg200)};
  }
`;

export const PrimaryButton = styled(BaseButton)`
  width: 100%;
  height: 3rem;
  background-color: ${({ theme }) => theme.bg500};
  padding: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.white};
  transition: all 0.5s ease;
  border-radius: 0.25rem;
  &:hover {
    background-color: ${({ theme }) => darken(0.1, theme.bg500)};
  }
`;

export const IconButton = styled(BaseButton)`
  color: ${({ theme }) => theme.text300};
  padding: 0rem;
  :hover {
    color: ${({ theme }) => darken(0.4, theme.text300)};
  }
`;
