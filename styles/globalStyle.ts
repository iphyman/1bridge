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

html {
  min-height: 100%;
  color: ${({ theme }) => theme.text200};
  background-color: ${({ theme }) => theme.bg100};
  font-family: "Inter", "system-ui";
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
}
`;
