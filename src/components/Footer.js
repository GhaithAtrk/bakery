"use client";

import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";

const Footer = () => {
  const { colors } = useContext(ThemeContext);

  return (
    <div className={`${colors.tertiary} p-4 text-center`}>
      <div>&copy; 2024 Avocode | All Rights Reserved</div>
    </div>
  );
};

export default Footer;
