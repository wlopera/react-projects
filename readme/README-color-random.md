# REACT PROJECTS

## Ejercicios en React para estudiar a fondo los conceptos

https://www.youtube.com/watch?v=5ZdHfJVAY-s&t=10s

## 2.Crear un App con tres botones para mostrar colores aleatoriamente en RGB o Hexadecimal

![image](https://github.com/user-attachments/assets/d3e08767-4afb-4771-ba0c-024c1ff91dd5)
![image](https://github.com/user-attachments/assets/cc26f4b2-005e-4015-8619-9d5af4f08bdc)

![image](https://github.com/user-attachments/assets/d631fd75-4ed2-403f-91ee-225c02b2103d)
![image](https://github.com/user-attachments/assets/07b3367e-957a-4fb4-9b70-5f00ee457d59)

### Código para crear colores

- index.js

```
import React, { useState } from "react";
import "./styles.css";

export const RandomColor = () => {
  const [color, setColor] = useState("#FF0000");
  const [typeColor, setTypeColor] = useState("HEX");
  const [typeButton, setTypeButton] = useState("HEX");
  const getRandom15 = () => {
    return Math.floor(Math.random() * 16)
      .toString(16)
      .toUpperCase();
  };
  const getRandom255 = () => {
    return Math.floor(Math.random() * 256);
  };
  const getColorHEX = () => {
    let hex = "#";
    for (let index = 0; index < 6; index++) {
      hex += getRandom15();
    }
    return hex;
  };
  const getColorRGB = () => {
    return `rgb(${getRandom255()},${getRandom255()},${getRandom255()})`;
  };
  const handleColorHex = () => {
    setColor(getColorHEX());
    setTypeColor("HEX");
    setTypeButton("HEX");
  };
  const handleColorRGB = () => {
    setColor(getColorRGB());
    setTypeColor("RGB");
    setTypeButton("RGB");
  };
  const getColorRandom = () => {
    setTypeButton("RAN");
    if (typeColor === "RGB") {
      setColor(getColorRGB());
    } else {
      setColor(getColorHEX());
    }
  };
  const divColor = {
    backgroundColor: color,
  };
  return (
    <div className="color-container" style={divColor}>
      <div className="color-button-container">
        <button
          onClick={handleColorHex}
          style={
            typeButton === "HEX"
              ? { backgroundColor: "#6d99f1" }
              : { backgroundColor: "" }
          }
        >
          Color HEX
        </button>
        <button
          onClick={handleColorRGB}
          style={
            typeButton === "RGB"
              ? { backgroundColor: "#6d99f1" }
              : { backgroundColor: "" }
          }
        >
          Color RGB
        </button>
        <button
          onClick={getColorRandom}
          style={
            typeButton === "RAN"
              ? { backgroundColor: "#6d99f1" }
              : { backgroundColor: "" }
          }
        >
          Generar Color
        </button>
      </div>
      <div className="color-txt">{`Color ${typeColor}`}</div>
      <div className="color-txt-color">{color}</div>
    </div>
  );
};
```

-styles.css

```
.color-container {
    display: flex;
    flex-direction: column;
    justify-content:flex-start;
    align-items: center;
    width: 100vw;
    height: 100vh;
}

.color-button-container{
    margin: 20px;
    display: flex;
    gap: 15px;    
}
.color-txt{
    font-size: 60px;
    font-weight: bold;
    color: white;
    margin: 60px;
}
.color-txt-color {
    font-size: 80px;
    font-weight: bold;
    color: white;
    margin: 60px;
}
```

### Salida HEX:

![image](https://github.com/user-attachments/assets/19518db2-aa4d-4a3a-9fae-5450c9b9ba37)
![image](https://github.com/user-attachments/assets/55257495-ef03-4650-8391-c0595330af4f)
![image](https://github.com/user-attachments/assets/5a8655b0-a250-4da3-85df-1a4f2736bcc3)

### Salida RGB:

![image](https://github.com/user-attachments/assets/1a39d556-f023-4571-a75b-33ffd3369433)
![image](https://github.com/user-attachments/assets/10ce8a5f-7d54-4b27-8f48-3eccf8525ae0)
![image](https://github.com/user-attachments/assets/bea92aeb-fa71-40fd-af03-9974e66b830a)
