import Tippy from "@tippyjs/react";
import { MdHelp } from "react-icons/md";
import styled from "styled-components";

const ToolTipWrapper = styled.span`
  font-size: 1rem;
  color: ${({ theme }) => theme.text200};
  margin-right: 0.25rem;
  cursor: pointer;
  vertical-align: middle;
`;

interface ToolTipProps {
  content: string;
}

export const ToolTip = (props: ToolTipProps) => {
  return (
    <Tippy content={props.content} theme="tooltip" arrow>
      <ToolTipWrapper>
        <MdHelp />
      </ToolTipWrapper>
    </Tippy>
  );
};
