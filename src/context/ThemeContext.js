"use client";

import { createContext } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const colors = {
    primary: "bg-orange-300",
    secondary: "bg-orange-100",
    tertiary: "bg-orange-500",
  };

  const value = {
    colors,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
