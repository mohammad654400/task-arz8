import React from "react";
import { useTheme } from "../context/ThemeContext";

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="p-4 flex justify-between items-center bg-cardBackground shadow-md">
      <h1 className="text-primary font-bold">Where in the world?</h1>
      <button
        onClick={toggleTheme}
        className="text-primary py-1 px-3 rounded focus:outline-none hover:bg-opacity-80"
      >
        {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button>
    </header>
  );
};


export default Header;
