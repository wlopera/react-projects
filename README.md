# REACT PROJECTS

## Ejercicios en React para estudiar a fondo los conceptos

https://www.youtube.com/watch?v=5ZdHfJVAY-s&t=10s

## 1.Crear un acordeón de apertura simple o multi apertura a la vez

- ver rama react-projects -> task_acordion

![image](https://github.com/user-attachments/assets/084427f0-7ca7-4831-93df-67009f357c5e)

![image](https://github.com/user-attachments/assets/6d71cd85-ff73-4b98-9ac9-bd53c03e1fc9)

- Crear un App de react
  \_ > npx create-react-app react-projects

![image](https://github.com/user-attachments/assets/4fc00d3f-ad7d-4079-9993-413dafda16bc)

![image](https://github.com/user-attachments/assets/b0b6c5e1-f0c8-44f4-a521-6fd2aec4e960)

- Código para crear Acordeón

![image](https://github.com/user-attachments/assets/7b3d3bb9-4141-497f-9071-7ff55c7dd47f)

- Index.js

```
import React, { useState } from "react";
import { data } from "./data";
import { Card } from "./Card";

import "./styles.css";
export const Accordion = () => {
  const [listDisplay, setListDisplay] = useState(["1"]);
  const [enableMultiple, setEnabledMultiple] = useState(false);
  const records = data;
  const handleSetListDisplay = (id) => {
    if (enableMultiple) {
      let list = [...listDisplay];
      if (listDisplay.includes(id)) {
        list = list.filter((item) => item !== id);
      } else {
        list.push(id);
      }
      setListDisplay(list);
    } else {
      setListDisplay([id]);
    }
  };
  const handleSetEnabledMultiple = () => {
    if (enableMultiple) {
      setListDisplay(["1"]);
    }
    setEnabledMultiple(!enableMultiple);
  };
  return (
    <div className="container">
      <button onClick={handleSetEnabledMultiple} className="button">
        {enableMultiple ? "Selección Multiple" : "Selección Simple"}
      </button>
      {records &&
        records.length > 0 &&
        records.map((record) => (
          <Card
            key={record.id}
            id={record.id}
            question={record.question}
            answer={record.answer}
            showAnswer={listDisplay.includes(record.id)}
            onShowAnswer={handleSetListDisplay}
          />
        ))}
    </div>
  );
};
```

- card.js

```
import React from "react";
import "./styles.css";

export const Card = ({
  id,
  question,
  answer,
  showAnswer = false,
  onShowAnswer,
}) => {
  return (
    <div className="card-container">
      <div className={showAnswer ? "card-question-selected" : "card-question"}>
        <h5>{question}</h5>
        <div style={{ cursor: "pointer" }} onClick={() => onShowAnswer(id)}>
          {showAnswer ? "-" : "+"}
        </div>
      </div>
      {showAnswer && <div>{answer}</div>}
    </div>
  );
};
```

-data.js

```
export const data = [
  {
    id: "1",
    question: "¿Qué son los componentes del acordeón?",
    answer:
      "Los componentes de acordeón son elementos de la interfaz de usuario que se utilizan para organizar y presentar contenido de forma plegable. Por lo general, constan de un encabezado, contenido y una acción de expandir/contraer.",
  },
  {
    id: "2",
    question: "¿Para qué se utilizan?",
    answer:
      "Se emplean comúnmente en diversos contextos, incluidas preguntas frecuentes, descripciones de productos, menús de navegación, paneles de configuración y tablas de datos, para ahorrar espacio en la pantalla y proporcionar una interfaz estructurada y fácil de usar para presentar información u opciones.",
  },
  {
    id: "3",
    question: "El acordeón como instrumento musical",
    answer:
      "El acordeón es un instrumento musical con teclado y fuelle. Produce sonido mediante el paso del aire sobre las lengüetas cuando el intérprete expande o comprime el fuelle, utilizado en diversos géneros musicales.",
  },
  {
    id: "4",
    question: "¿Puedo crear un componente de acordeón con un marco diferente?",
    answer:
      "Sí, por supuesto, es muy posible crear un componente de acordeón con otro marco.",
  },
];

- Styles.css

.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;    
}

.button {
    margin: 10px;
}
.card-container {
    border: 1px solid lightgray;
    width: 30%;
}
.card-question {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.card-question-selected {
    display: flex;
    flex-direction: row;
    background-color: #CFE2FF;
    justify-content: space-between;
}
```

### Salida Selección Simple:

![image](https://github.com/user-attachments/assets/e7c2dbf5-6b05-4f26-82c0-082d927e8300)

### Salida Selección Multiple:

![image](https://github.com/user-attachments/assets/ffb9b6d2-312a-45b7-abc1-89dd2679dcbc)

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
