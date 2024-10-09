# REACT PROJECTS

## Ejercicios en React para estudiar a fondo los conceptos

https://www.youtube.com/watch?v=5ZdHfJVAY-s&t=10s

## 1.Crear un acordeón de apertura simple o multi apertura a la vez

1.Crear un acordeón de apertura simple o multi apertura a la vez

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

Styles.css

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
