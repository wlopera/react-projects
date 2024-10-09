import React from "react";
import { useChangeTheme } from "./useChangeTheme";

import "./styles.css";

export const LightDarkMode = () => {
  const [theme, setTheme] = useChangeTheme("theme", "light");

  const handleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="container" data-theme={theme}>
      <p className="text">Hola Mundo!</p>
      <div className="button-container">
        <button className="button" onClick={handleTheme}>
          Cambiar a {theme === "dark" ? "claro" : "oscuro"}
        </button>
      </div>
    </div>
  );
};
