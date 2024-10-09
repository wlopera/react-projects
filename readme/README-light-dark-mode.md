# REACT PROJECTS

## Ejercicios en React para estudiar a fondo los conceptos

## Crear useState para cambiar fondo de oscuro (dark) <--> claro (light)

- Crear un useState para cambiar la pantalla de claro a oscuro o viceversa. Almacenar el valor en el LocalStorage.

### Código

- index.js

```
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
```

- useChangeTheme.js

```
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
```

- styles.css

```
:root{
    --background: white;
    --text-primary: black;
    --background-button: black;
    --color-button: white  
}
[data-theme="dark"] {
    --background: black;
    --text-primary: white;
    --background-button: white;
    --color-button: black
}
.container {
    display: flex;
    align-content: center;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;    
    background-color: var(--background);
}
.text {
    height: 1.5rem;
    font-size: 2rem;  
    color:var(--text-primary)
}
.button-container{
    padding-top: 0.5rem;
    border: none;
}
.button {
    width: 10vw;
    height: 10vh;
    border-radius: 5px;
    border: none;
    background-color: var(--background-button) ;
    color: var(--color-button);
    font-weight: bold;
    font-size: 12px;
}
```

- Salida

![image](https://github.com/user-attachments/assets/c3a99dc5-6402-4432-bbfd-69ff4c45ba2a)
![image](https://github.com/user-attachments/assets/a283d8fa-6ee8-47dc-ae6c-f839a6c0846e)
