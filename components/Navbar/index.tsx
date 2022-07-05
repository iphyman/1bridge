import styled from "styled-components";
import { ConnectButton, MenuButton } from "components/Button";
import { NavbarSelectChain } from "components/Dropdowns";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { CgMenuGridR } from "react-icons/cg";

const StyledNav = styled.nav`
  width: 100%;
  height: 4.5rem;
  background-color: ${({ theme }) => theme.bg100};
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const GroupMenuLeft = styled.div`
  display: flex;
  align-items: center;
  justify-self: start;
`;

const GroupMenuRight = styled(GroupMenuLeft)`
  justify-self: flex-end;
`;

const StyledLogo = styled.a`
  font-size: 1.8rem;
  font-family: "Rubik", sans-serif;
  color: ${({ theme }) => theme.text200};
  text-decoration: none;
  font-weight: 700;
`;

export const Navbar = () => {
  return (
    <StyledNav>
      <Container>
        <GroupMenuLeft>
          <StyledLogo href="/">1Bridge</StyledLogo>
        </GroupMenuLeft>
        <GroupMenuRight>
          <NavbarSelectChain />
          <ConnectButton>
            <MdOutlineAccountBalanceWallet size={24} />{" "}
            <span style={{ marginLeft: "0.5rem" }}>Connect Wallet</span>
          </ConnectButton>
          <MenuButton>
            <CgMenuGridR size="24" />
          </MenuButton>
        </GroupMenuRight>
      </Container>
    </StyledNav>
  );
};
