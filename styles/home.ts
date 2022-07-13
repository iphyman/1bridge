import styled from "styled-components";
import { darken } from "polished";

const HomeWrapper = styled.div`
  width: 100%;
  padding: 5rem 1rem 0rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
interface CardProps {
  fullWidth?: boolean;
}

const Card = styled.div<CardProps>`
  width: 100%;
  max-width: ${({ fullWidth }) => (fullWidth ? null : "30rem")};
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

export const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  outline: 0rem;
  padding: 0rem;
  margin: 0rem;
  border: none;
  font-size: 1rem;
  font-family: "Roboto", sans-serif;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.text100};
  background-color: ${({ theme }) => theme.bg300};
  :focus {
    color: #495057;
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
  height: 3rem;
  min-width: 30rem;
`;

export const SearchInput = styled(StyledInput)`
  background-color: ${({ theme }) => theme.white};
  border-radius: 0.5rem;
  padding: 0.75rem 4rem 0.75rem 1rem;
`;

export { HomeWrapper, Card, CardBody, CardHeader, TextLabel };

export const PageTitle = styled.h2`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.text200};
  line-height: 1.5;
  margin-bottom: 0.5rem;
`;

export const StyledLink = styled.a`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.primary100};
  text-decoration: none;
  font-weight: 500;
  white-space: nowrap;
  text-overflow: ellipsis;
  transition: color 0.4s ease-in-out;
  overflow: hidden;
  :hover {
    color: ${({ theme }) => darken(0.1, theme.primary100)};
  }
`;

export const PageWrapper = styled.div`
  width: 100%;
  padding-top: 2rem;
  margin-bottom: 2rem;
`;

export const Title = styled.h4`
  font-size: 1rem;
  color: ${({ theme }) => theme.text200};
`;

export const TableContainer = styled.div`
  width: 100%;
  tr {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: 20% 80%;
  }
`;
