import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
*, :after, :before {
    box-sizing: border-box;
}

* {
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: transparent;
  }
  ::-webkit-scrollbar {
    width: 8px;
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #555;
  }
  
}

table {
  width: 100%;
  border-collapse: collapse;
  color: ${({ theme }) => theme.text200};
  margin-bottom: 1rem;
  th {
    color: ${({ theme }) => theme.text200};
    font-weight: 600;
    text-align: left;
    padding: 0.75rem;
    white-space: nowrap;
    background-color: ${({ theme }) => theme.primary400};
    border-bottom: 0.125rem solid ${({ theme }) => theme.bg500};
    border-top: 0.125rem solid ${({ theme }) => theme.bg500};
  }
  td {
    text-align: left;
    padding: 0.75rem;
    white-space: nowrap;
    vertical-align: top;
    border-top: 0.0625rem solid ${({ theme }) => theme.bg500};
  }
}
.limited-width {
  max-width: 8rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.tippy-box .tippy-content {
  padding: 0rem;
}
.tippy-box[data-theme~="tooltip"] {
  background-color: #ED108C;
  color: ${({ theme }) => theme.white};
  padding: 0.6rem;
  border-radius: 0.5rem;
  .tippy-arrow:before {
    border-top-color: ${({ theme }) => theme.bg200};
  }
}

html {
  min-height: 100%;
  color: ${({ theme }) => theme.text200};
  background-color: ${({ theme }) => theme.bg100};
  font-family: "Inter", "system-ui";
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
}
`;
