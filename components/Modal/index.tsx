import { ReactNode, RefObject } from "react";
import styled, { css } from "styled-components";
import { animated, useTransition } from "@react-spring/web";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import media from "@styles/media";

const isMobile = false;

const AnimatedDialogOverlay = animated(DialogOverlay);

const StyledDialogOverlay = styled(AnimatedDialogOverlay)`
  &[data-reach-dialog-overlay] {
    z-index: 2000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem 0rem;
    background-color: rgba(18, 18, 18, 0.8);
  }
`;

const AnimatedDialogContent = animated(DialogContent);

const StyledDialogContent = styled(
  ({ minHeight, maxHeight, width, mobile, isOpen, ...rest }) => (
    <AnimatedDialogContent {...rest} />
  )
).attrs({ "aria-label": "dialog" })`
  overflow-y: auto;
  &[data-reach-dialog-content] {
    margin: 0 0 2rem 0;
    background-color: ${({ theme }) => theme.bg200};
    border: 0.1rem solid ${({ theme }) => theme.bg300};
    box-shadow: 0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.15);
    padding: 0px;
    width: ${({ width }) => (width ? width : "50vw")};
    overflow-y: auto;
    overflow-x: hidden;
    align-self: ${({ mobile }: { mobile?: boolean }) =>
      mobile ? "flex-end" : "center"};
    max-width: 420px;
    ${({ maxHeight }: { maxHeight?: number }) =>
      maxHeight &&
      css`
        max-height: ${maxHeight}vh;
      `}
    ${({ minHeight }: { minHeight?: number }) =>
      minHeight &&
      css`
        min-height: ${minHeight}vh;
      `}
    display: flex;
    border-radius: 20px;
    ${media.tabletL`
      width: 65vw;
      margin: 0;
    `}
    ${media.tablet`
      width:  85vw;
      ${({ mobile }: { mobile?: boolean }) =>
        mobile &&
        css`
          width: 100vw;
          border-radius: 20px;
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0;
        `}
    `}
  }
`;

interface ModalProps {
  isOpen: boolean;
  onDismiss: () => void;
  minHeight?: number;
  maxHeight?: number;
  width?: string;
  initialFocusRef?: RefObject<any>;
  children?: ReactNode;
}

export const Modal = (props: ModalProps) => {
  const {
    isOpen,
    children,
    onDismiss,
    minHeight,
    maxHeight,
    width,
    initialFocusRef,
  } = props;

  const transitions = useTransition(isOpen, {
    from: { opacity: 0, y: -10 },
    enter: { opacity: 1, y: 0 },
    leave: { opacity: 0, y: 10 },
  });

  return (
    <>
      {transitions(
        (styles, item) =>
          item && (
            <StyledDialogOverlay
              style={styles}
              onDismiss={onDismiss}
              initialFocusRef={initialFocusRef}
              unstable_lockFocusAcrossFrames={false}
            >
              <StyledDialogContent
                aria-label="dialog content"
                minHeight={minHeight}
                maxHeight={maxHeight}
                width={width}
                mobile={isMobile}
              >
                {!initialFocusRef && isMobile ? <div tabIndex={1} /> : null}
                {children}
              </StyledDialogContent>
            </StyledDialogOverlay>
          )
      )}
    </>
  );
};
