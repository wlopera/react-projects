import { useEffect, useState } from "react";

const init = (key, initValue) => {
  try {
    const valueStorage = localStorage.getItem(key);
    return valueStorage ? JSON.parse(valueStorage) : initValue;
  } catch (err) {
    console.log("[Error]: Problema al consultar el localStorage");
  }
};

export const useChangeTheme = (key, initValue) => {
  // Inicializa valor
  const [value, setValue] = useState(init(key, initValue));

  // Actualiza el valor al cambiar el tema
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
