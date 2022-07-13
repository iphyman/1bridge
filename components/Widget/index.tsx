import styled from "styled-components";
import shallow from "zustand/shallow";
import Image from "next/image";
import { FaCog, FaArrowRight, FaChevronDown } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import { IconButton, SelectButton } from "components/Button";
import { useStore } from "state";
import type { Bridge } from "types";
import { useModal } from "hooks/useModal";
import { useBridge } from "hooks/useBridge";
import { BlockchainName, Column, Text } from "styles/styleds";
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
  margin-right: 0.5rem;
  width: 3rem;
  height: 3rem;
`;

const ImageBox = styled.div`
  width: 4rem;
  height: 4rem;
  position: relative;
  margin: 1.2rem auto;
`;

const StyledDiv = styled.div``;

const BridgeName = styled(BlockchainName)`
  color: ${({ theme }) => theme.text300};
  font-weight: 600;
  width: auto;
`;

const BridgeTime = styled(BlockchainName)`
  font-size: 0.75rem;
  width: auto;
`;

interface ShowBridgeProps {
  bridges: Bridge[];
}

const ShowBridges = (props: ShowBridgeProps) => {
  const { bridges } = props;

  return (
    <ListItems>
      {bridges && bridges.length > 0 ? (
        bridges.map((bridge, index) => {
          return (
            <ListItem href={bridge.redirectUrl} target="_blank" key={index}>
              <Flex>
                <ListImage>
                  <Image src={bridge.logo} layout="fill" alt={bridge.name} />
                </ListImage>
                <StyledDiv>
                  <BridgeName>{bridge.name}</BridgeName>
                  <BridgeTime>
                    Estimated Arrival {bridge.estimatedArrival}
                  </BridgeTime>
                </StyledDiv>
              </Flex>
              <BiLinkExternal size={24} />
            </ListItem>
          );
        })
      ) : (
        <Column style={{ padding: "1.25rem", height: "100%" }}>
          <Text
            color="text300"
            style={{ textAlign: "center", marginBottom: "1.25rem" }}
          >
            No Compatible bridge found
          </Text>
        </Column>
      )}
    </ListItems>
  );
};

export const Widget = () => {
  const [fromChain, currency, toChain, supportedBridges] = useStore(
    (state) => [
      state.fromChain,
      state.currency,
      state.toChain,
      state.supportedBridge,
    ],
    shallow
  );

  const { toggleCurrencyModal, toggleFromChainModal, toggleToChainModal } =
    useModal();

  useBridge();

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
            <SelectButton
              style={{ height: "2.5rem" }}
              onClick={toggleFromChainModal}
            >
              <Image
                src={fromChain.logo}
                width="24"
                height="24"
                alt={fromChain.name}
                objectFit="cover"
              />
              <BlockchainName>{fromChain.name}</BlockchainName>
              <FaChevronDown />
            </SelectButton>
          </StyledDiv>
          <StyledDiv>
            <ToLabel>To Chain</ToLabel>
            <ImageBox>
              <Image layout="fill" alt={toChain.name} src={toChain.logo} />
            </ImageBox>
            <SelectButton
              style={{ height: "2.5rem" }}
              onClick={toggleToChainModal}
            >
              <Image
                src={toChain.logo}
                width="24"
                height="24"
                alt={toChain.name}
                objectFit="cover"
              />
              <BlockchainName>{toChain.name}</BlockchainName>
              <FaChevronDown />
            </SelectButton>
          </StyledDiv>
        </WidgetContainer>
        <WidgetContainer>
          <FromLabel>Token to Bridge</FromLabel>
          <InputWrapper>
            <SelectButton
              style={{ height: "4rem", borderRadius: "1rem" }}
              onClick={toggleCurrencyModal}
            >
              <Image
                src={currency.logo}
                width="24"
                height="24"
                alt={currency.name}
                objectFit="cover"
              />
              <BlockchainName>{currency.name}</BlockchainName>
              <FaChevronDown />
            </SelectButton>
            <StyledInput placeholder="0.00" />
          </InputWrapper>
        </WidgetContainer>
        <ShowBridges bridges={supportedBridges} />
      </CardBody>
    </Card>
  );
};
