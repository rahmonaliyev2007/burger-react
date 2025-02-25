
import { createContext, useState } from "react";

// Context yaratish
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  // Tema almashtirish funksiyasi
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  let [currectCategory, setCurrectCategory] = useState(null);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, currectCategory, setCurrectCategory }}>
      {children}
    </ThemeContext.Provider>
  );
};