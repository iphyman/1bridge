import styled, { keyframes } from "styled-components";

export const loadingAnimation = keyframes`
  0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const BaseLoadingRows = styled.div`
  display: grid;
  & > div {
    animation: ${loadingAnimation} 1.5s infinite;
    animation-fill-mode: both;
    background: linear-gradient(
      to left,
      ${({ theme }) => theme.bg100} 25%,
      ${({ theme }) => theme.bg200} 50%,
      ${({ theme }) => theme.bg100} 75%
    );
    background-size: 400%;
    border-radius: 0.75rem;
    height: 2.4em;
    will-change: background-position;
  }
`;

export const LoadingRows = styled(BaseLoadingRows)`
  grid-column-gap: 0.5em;
  grid-template-columns: repeat(12, 1fr);
  max-width: 60rem;
  padding: 0.75rem 1.25rem;
  & > div:nth-child(4n + 1) {
    grid-column: 1 / 8;
    height: 1em;
    margin-bottom: 0.25em;
  }
  & > div:nth-child(4n + 2) {
    grid-column: 12;
    height: 1em;
    margin-top: 0.25em;
  }
  & > div:nth-child(4n + 3) {
    grid-column: 1 / 4;
    height: 0.75em;
  }
`;
