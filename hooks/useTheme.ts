import { useContext } from "react";
import { ThemeContext } from "@contexts/theme";

export const useDarkMode = () => {
  const context = useContext(ThemeContext);

  if (!context) throw new Error("Missing theme context");

  const { darkMode, toggleDarkMode } = context;

  return { darkMode, toggleDarkMode };
};
