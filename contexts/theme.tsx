import { createContext, useEffect, useState, ReactNode, useMemo } from "react";
import { ThemeProvider as CustomProvider } from "styled-components";
import { theme } from "styles/theme";

export const ThemeContext = createContext<{
  darkMode: boolean;
  toggleDarkMode: () => void;
} | null>(null);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  useEffect(() => {
    localStorage.setItem("user-dark-mode", darkMode.toString());
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const activeTheme = useMemo(() => theme(darkMode), [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <CustomProvider theme={activeTheme}>{children}</CustomProvider>
    </ThemeContext.Provider>
  );
};
