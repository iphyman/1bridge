import styled from "styled-components";
import Image from "next/image";
import { FaChevronDown, FaCog } from "react-icons/fa";
import { SelectButton, IconButton } from "components/Button";
import {
  BlockchainName,
  Card,
  CardBody,
  CardHeader,
  TextLabel,
} from "styles/home";

const FullWidth = styled.div`
  width: 100%;
`;

const Flex = styled(FullWidth)`
  display: flex;
  align-items: center;
`;

export const WidgetContainer = styled(FullWidth)`
  position: relative;
  padding: 1rem;
  margin-bottom: 0.5rem;
  background-color: ${({ theme }) => theme.bg100};
  border-radius: 1rem;
  border: 0.1rem solid ${({ theme }) => theme.bg300};
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

const InputWrapper = styled(Flex)`
  justify-content: space-between;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

const StyledInput = styled.input`
  width: 0rem;
  flex: 1 1 auto;
  background-color: transparent;
  color: ${({ theme }) => theme.white};
  font-size: 1.5rem;
  border: none;
  outline: none;
`;

const FromWidget = () => {
  return (
    <WidgetContainer>
      <FromLabel>From</FromLabel>
      <SelectButton transparent>
        <Image src="/56.png" width="24" height="24" alt="blockchain" />
        <BlockchainName>Avalanche</BlockchainName>
        <FaChevronDown />
      </SelectButton>
      <InputWrapper>
        <StyledInput />
        <SelectButton transparent>
          <Image src="/1.png" width="24" height="24" alt="blockchain" />
          <BlockchainName>USDC</BlockchainName>
          <FaChevronDown />
        </SelectButton>
      </InputWrapper>
    </WidgetContainer>
  );
};

const ToWidget = () => {
  return (
    <WidgetContainer>
      <FromLabel>To</FromLabel>
      <SelectButton transparent>
        <Image src="/288.png" width="24" height="24" alt="blockchain" />
        <BlockchainName>Boba Network</BlockchainName>
        <FaChevronDown />
      </SelectButton>
      <InputWrapper>
        {/* <StyledInput /> */}
        <SelectButton transparent>
          <Image src="/1.png" width="24" height="24" alt="blockchain" />
          <BlockchainName>USDC</BlockchainName>
          <FaChevronDown />
        </SelectButton>
      </InputWrapper>
    </WidgetContainer>
  );
};

export const Widget = () => {
  return (
    <Card>
      <CardHeader>
        <TextLabel>Bridge</TextLabel>
        <IconButton>
          <FaCog size={20} />
        </IconButton>
      </CardHeader>
      <CardBody>
        <FromWidget />
        <ToWidget />
      </CardBody>
    </Card>
  );
};
