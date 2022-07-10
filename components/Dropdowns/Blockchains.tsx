import styled from "styled-components";
import { useState } from "react";
import Tippy from "@tippyjs/react";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";
import { SelectButton, BaseButton } from "../Button";

const Container = styled.div`
  width: 100%;
  padding: 1rem;
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.bg200};
  z-index: 20;
`;

const DropdownWrapper = styled.div`
  position: relative;
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
  width: calc(100% - 45px);
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
`;

const TippyBox = styled.div`
  height: 100%;
`;

const SearchBox = styled.div`
  width: 100%;
  height: 2.5rem;
  display: flex;
  justify-content: space-between;
  border: 0.2rem solid ${({ theme }) => theme.bg300};
  border-radius: 0.5rem;
`;

const StyledInput = styled.input`
  width: 0rem;
  flex: 1 1 auto;
  background-color: transparent;
  color: ${({ theme }) => theme.text200};
  font-size: 1rem;
  padding: 0.25rem 1rem;
  border: none;
  outline: none;
`;

interface DropdownProps {
  hide?: any;
  active?: {
    logo: string;
    name: string;
  };
  items: {
    logo: string;
    name: string;
    chainId?: string;
  }[];
  onClick?: (payload: any) => void;
  h?: string;
  placeholder?: string;
}

const SelectDropdown = (props: DropdownProps) => {
  const { hide, items, onClick, placeholder } = props;

  const handleSelection = (payload: any) => {
    if (onClick) {
      onClick(payload);
    }
    hide();
  };

  return (
    <DropdownWrapper>
      <Container>
        <SearchBox>
          <StyledInput placeholder={placeholder} />
        </SearchBox>
      </Container>
      {items.map((item, index) => (
        <DropdownItem key={index} onClick={() => handleSelection(item)}>
          <Image src={item.logo} width="24" height="24" alt={item.name} />
          <BlockchainName>{item.name}</BlockchainName>
        </DropdownItem>
      ))}
    </DropdownWrapper>
  );
};

export const Dropdown = (props: Omit<DropdownProps, "hide">) => {
  const { active, items, onClick, h, placeholder } = props;
  const [tippyInst, setTippyInst] = useState<any>(null);

  return (
    <>
      <Tippy
        content={
          tippyInst ? (
            <SelectDropdown
              items={items}
              hide={tippyInst.hide}
              onClick={onClick}
              placeholder={placeholder}
            />
          ) : (
            ""
          )
        }
        placement="bottom-start"
        trigger="click"
        interactive
        allowHTML
        arrow={false}
        onCreate={setTippyInst}
        offset={[0, 10]}
      >
        <TippyBox>
          {active && (
            <SelectButton style={{ height: h }}>
              <Image
                src={active.logo}
                width="24"
                height="24"
                alt={active.name}
                objectFit="cover"
              />
              <BlockchainName>{active.name}</BlockchainName>
              <FaChevronDown />
            </SelectButton>
          )}
        </TippyBox>
      </Tippy>
    </>
  );
};
