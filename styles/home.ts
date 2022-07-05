import styled from "styled-components";

const HomeWrapper = styled.div`
  width: 100%;
  padding: 5rem 1rem 0rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Card = styled.div`
  width: 100%;
  max-width: 30rem;
  margin: 0rem auto 1rem;
  background-color: ${({ theme }) => theme.bg200};
  position: relative;
  border-radius: 1rem;
  border: 0.1rem solid ${({ theme }) => theme.bg300};
`;

const CardHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem 0rem;
  margin-bottom: 0.75rem;
`;

const CardBody = styled.div`
  width: 100%;
  padding: 1.5rem;
`;

const TextLabel = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text300};
  font-family: "Rubik", sans-serif;
`;

export const BlockchainName = styled.div`
  font-size: 1rem;
  color: ${({ theme }) => theme.text200};
  margin-left: 0.5rem;
  margin-right: 0.25rem;
`;

export { HomeWrapper, Card, CardBody, CardHeader, TextLabel };
