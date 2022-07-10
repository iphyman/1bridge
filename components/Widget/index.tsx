import styled from "styled-components";
import shallow from "zustand/shallow";
import Image from "next/image";
import {
  FaChevronDown,
  FaCog,
  FaArrowDown,
  FaArrowRight,
} from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import { SelectButton, IconButton } from "components/Button";
import { Dropdown } from "components/Dropdowns";
import { useStore } from "state";
import { Card, CardBody, CardHeader, TextLabel } from "styles/home";

const FullWidth = styled.div`
  width: 100%;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
`;

export const WidgetContainer = styled(Flex)`
  position: relative;
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: ${({ theme }) => theme.bg100};
  border-radius: 1rem;
  border: 0.1rem solid ${({ theme }) => theme.bg300};
  justify-content: space-between;
`;

const FromLabel = styled.div`
  position: absolute;
  top: -0.75rem;
  background-color: ${({ theme }) => theme.bg100};
  color: ${({ theme }) => theme.text200};
  font-weight: 700;
  font-size: 0.75rem;
  padding: 0.25rem;
  border-radius: 1rem;
  border: 0.1rem solid ${({ theme }) => theme.bg300};
`;

const ToLabel = styled(FromLabel)`
  right: 1.5rem;
`;

const InputWrapper = styled(Flex)`
  width: 100%;
  height: 4rem;
  justify-content: space-between;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  padding-right: 1rem;
  border: 0.1rem solid ${({ theme }) => theme.bg300};
  border-radius: 1rem;
`;

const StyledInput = styled.input`
  width: 0rem;
  flex: 1 1 auto;
  background-color: transparent;
  color: ${({ theme }) => theme.white};
  font-size: 1.5rem;
  border: none;
  outline: none;
  text-align: right;
`;

const SwitchButton = styled(IconButton)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 100%;
  width: 2rem;
  height: 2rem;
  margin: 0rem auto 0.25rem;
  padding: 0.5rem;
  z-index: 200;
`;

const ListItems = styled(Flex)`
  width: 100%;
  flex-direction: column;
  border: 0.2rem solid ${({ theme }) => theme.bg300};
  border-radius: 1rem;
  margin-top: 1.5rem;
`;

const ListItem = styled.a`
  width: 100%;
  padding: 1rem 1.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: ${({ theme }) => theme.text200};
`;

const ListImage = styled.div`
  position: relative;
  margin-right: 1rem;
  width: 3rem;
  height: 3rem;
`;

const StyledSelectBtn = styled(SelectButton)`
  border-width: 0rem;
  height: 100%;
  margin-right: 0rem;
  :hover {
    border-width: 0rem;
    background-color: ${({ theme }) => theme.bg200};
  }
`;

const ImageBox = styled.div`
  width: 4rem;
  height: 4rem;
  position: relative;
  margin: 1.2rem auto;
`;

const StyledDiv = styled.div``;

const ShowBridges = () => {
  return (
    <ListItems>
      <ListItem href="/">
        <Flex>
          <ListImage>
            <Image src="/connext.png" layout="fill" alt="logo" />
          </ListImage>
        </Flex>
        <BiLinkExternal size={24} />
      </ListItem>
    </ListItems>
  );
};

export const Widget = () => {
  const [
    blockchains,
    fromChain,
    setFromChain,
    currencies,
    currency,
    setCurrency,
    toChain,
    setToChain,
  ] = useStore(
    (state) => [
      state.blockchains,
      state.fromChain,
      state.setFromChain,
      state.currencies,
      state.currency,
      state.setCurrency,
      state.toChain,
      state.setToChain,
    ],
    shallow
  );

  return (
    <Card>
      <CardHeader>
        <TextLabel>Bridge</TextLabel>
        <IconButton>
          <FaCog size={20} />
        </IconButton>
      </CardHeader>
      <CardBody>
        <WidgetContainer>
          <SwitchButton>
            <FaArrowRight size={20} />
          </SwitchButton>
          <StyledDiv>
            <FromLabel>From Chain</FromLabel>
            <ImageBox>
              <Image layout="fill" alt={fromChain.name} src={fromChain.logo} />
            </ImageBox>
            <Dropdown
              items={blockchains}
              active={fromChain}
              onClick={setFromChain}
              placeholder="Search network name"
            />
          </StyledDiv>
          <StyledDiv>
            <ToLabel>To Chain</ToLabel>
            <ImageBox>
              <Image layout="fill" alt={toChain.name} src={toChain.logo} />
            </ImageBox>
            <Dropdown
              items={blockchains}
              active={toChain}
              onClick={setToChain}
              placeholder="Search network name"
            />
          </StyledDiv>
        </WidgetContainer>
        <WidgetContainer>
          <FromLabel>Token to Bridge</FromLabel>
          <InputWrapper>
            <Dropdown
              items={currencies}
              active={currency}
              onClick={setCurrency}
              h="4rem"
              placeholder="Search currency name or symbol"
            />
            <StyledInput placeholder="0.00" />
          </InputWrapper>
        </WidgetContainer>
        <ShowBridges />
      </CardBody>
    </Card>
  );
};
