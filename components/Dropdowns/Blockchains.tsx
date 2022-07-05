import styled from "styled-components";
import { useState } from "react";
import Tippy from "@tippyjs/react";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";
import { CHAIN_INFO } from "constants/chain-info";
import { SelectButton, BaseButton } from "../Button";

const DropdownWrapper = styled.div`
  min-width: 13.75rem;
  width: 100%;
  height: 15rem;
  background-color: ${({ theme }) => theme.bg200};
  border-radius: 0rem 0rem 0.5rem 0.5rem;
  border: 0.1rem solid ${({ theme }) => theme.bg200};
  overflow-y: auto;
`;

const DropdownItem = styled(BaseButton)`
  width: 100%;
  line-height: 1;
  padding: 1rem;
  flex: 1;
  justify-content: flex-start;
  font-weight: 500;
  color: ${({ theme }) => theme.text200};
  &:hover {
    color: ${({ theme }) => theme.text300};
    background-color: ${({ theme }) => theme.bg100};
  }
  :not(:last-child) {
    border-bottom: 0.0625rem solid ${({ theme }) => theme.bg300};
  }
`;

const BlockchainName = styled.div`
  font-size: 1rem;
  color: ${({ theme }) => theme.text200};
  margin-left: 0.5rem;
  margin-right: 0.25rem;
`;

const TippyBox = styled.div`
  height: 100%;
`;

const SelectChainDropdown = ({ hide }: { hide: any }) => {
  const handleSelection = () => {
    hide();
  };

  return (
    <DropdownWrapper>
      {Object.keys(CHAIN_INFO).map((chainId, index) => (
        <DropdownItem key={index} onClick={handleSelection}>
          <Image
            src={`/${chainId}.png`}
            width="24"
            height="24"
            alt="blockchain"
          />
          <BlockchainName>
            {CHAIN_INFO[parseInt(chainId)].chainName}
          </BlockchainName>
        </DropdownItem>
      ))}
    </DropdownWrapper>
  );
};

export const NavbarSelectChain = () => {
  const [tippyInst, setTippyInst] = useState<any>(null);

  return (
    <Tippy
      content={tippyInst ? <SelectChainDropdown hide={tippyInst.hide} /> : ""}
      placement="bottom-start"
      interactive
      allowHTML
      arrow={false}
      onCreate={setTippyInst}
      offset={[0, 10]}
    >
      <TippyBox>
        <SelectButton>
          <Image src="/56.png" width="24" height="24" alt="blockchain" />
          <BlockchainName>Avalanche</BlockchainName>
          <FaChevronDown />
        </SelectButton>
      </TippyBox>
    </Tippy>
  );
};
