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



## 3.Seleccionar Raiting - Calificación de estrellas

![image](https://github.com/user-attachments/assets/18437c73-8f8b-4a6e-bd04-dc85a319ffad)
![image](https://github.com/user-attachments/assets/b9b5fa54-df4f-44d5-9b66-1426def92da4)

- Instalación de libraría para imágenes (icon start)
- npm install react-icons --save


### Código

- index.js
```
import React, { useState } from "react";
import { Star } from "./star";
import "./styles.css";

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
export const StarRating = () => {
  const [currentSeleted, setCurrentSeleted] = useState([]);
  const [hoverSeleted, setHoverSeleted] = useState([]);
  const getArrSeleted = (id) => {
    const arr = [];
    for (let index = 0; index < id + 1; index++) {
      arr.push(index);
    }
    return arr;
  };
  const handleClick = (id) => {
    setCurrentSeleted(getArrSeleted(id));
  };
  const handleMouseEnter = (id) => {
    setHoverSeleted(getArrSeleted(id));
  };
  const handleMouseLeave = (id) => {
    setHoverSeleted(currentSeleted);
  };
  const selected = hoverSeleted.length > 0 ? hoverSeleted : currentSeleted;
  return (
    <div className="container">
      {arr &&
        arr.map((item) => (
          <Star
            key={item}
            id={item}
            isSeleted={selected.includes(item)}
            onPress={handleClick}
            mouseEnter={handleMouseEnter}
            mouseLeave={handleMouseLeave}
            size={40}          />
        ))}
      <button
        className="button"
        onClick={() => {
          setHoverSeleted([]);
          setCurrentSeleted([]);
        }}
      >
        Limpiar
      </button>
    </div>
  );
};
```

-star.js
```
import React from "react";
import { FaStar } from "react-icons/fa";
import "./styles.css";

export const Star = ({
  id,
  isSeleted,
  onPress,
  mouseEnter,
  mouseLeave,
  size,
}) => {
  return (
    <FaStar
      className={isSeleted ? "star-selected" : "star"}
      size={size}
      onClick={() => onPress(id)}
      onMouseEnter={() => mouseEnter(id)}
      onMouseLeave={() => mouseLeave(id)}
    />
  );
};
```

- styles.css
```
.container {
    display: flex;    
    justify-content: center;
    align-items: center;
    margin: 20px;
}

.star {
    cursor: pointer;
}
.star-selected {
    color: yellow;
}
.star:hover {
    color: yellow;
}
.button{
    border: none;
    background-color: transparent;
    cursor: pointer;
    text-decoration: underline;
}
.button:hover {
    color: blue;
}
```

### Salida

![image](https://github.com/user-attachments/assets/f1f1a4fd-cce2-4476-9f9e-43680c993392)

![image](https://github.com/user-attachments/assets/8d75431f-ae14-43aa-8a26-0dee84b2a99b)

![image](https://github.com/user-attachments/assets/bb3b0c7c-9968-4056-aebb-6f658c7120f0)

![image](https://github.com/user-attachments/assets/33b6b6d4-a59c-4329-a30a-b7a661d94041)

![image](https://github.com/user-attachments/assets/538179f1-5a08-4161-9d9a-28a12fff0763)

- Luego de click en limpiar

![image](https://github.com/user-attachments/assets/8244da7d-174b-4d5a-b667-718719456808)


### 4.Crear un carrusel de imágenes

- Crear un carrusel que muestre varias imágenes
- Utilizar esta API de imágenes
-   https://picsum.photos/v2/list?page=2&limit=100
 

- Utilizar la libraría para imágenes (icon start)
- npm install react-icons --save
- import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";


### Código

- index.js
```
index.js

import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

import "./styles.css";
export const ImageSlider = () => {
  const [images, setImages] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    const getListData = async () => {
      try {
        const pageRd = Math.floor(Math.random() * 50) + 3;
        const limitRd = Math.floor(Math.random() * 10) + 5;
        const response = await fetch(
          "https://picsum.photos/v2/list?page=" + pageRd + "&limit=" + limitRd
        );
        const resJson = await response.json();
        const list = resJson.map((item, index) => ({
          key: item.id,
          id: index,
          url: item.download_url,
          selected: false,
        }));
        list[0].selected = true;
        setImages(list);
        setLoading(false);
      } catch (err) {
        console.log("[ERROR]: ", err);
        setError(true);
      }
    };
    if (loading) {
      setError(false);
      getListData();
    }
  }, [loading]);
  const handlePrevious = () => {
    const image = images.find((item) => item.selected);
    if (image.id === 0) {
      return;
    }
    updateImage(image.id - 1);
  };
  const handleNext = () => {
    const image = images.find((item) => item.selected);
    if (image.id === images.length - 1) {
      return;
    }
    updateImage(image.id + 1);
  };
  const updateImage = (id) => {
    let currentData = [...images];
    currentData = currentData.map((item) => {
      if (item.id === id) {
        item.selected = true;
      } else {
        item.selected = false;
      }
      return item;
    });
    setImages(currentData);
  };
  if (error) {
    return <div>Error Cargando datos. Intente nuevamente...!</div>;
  }
  if (loading) {
    return <div>Cargando datos. Favor espere...!</div>;
  }
  return (
    <div className="container">
      <div className="area">
        <BsArrowLeftCircleFill
          className="arrow arrow-left"
          onClick={handlePrevious}
        />
        {images &&
          images.map((image) => (
            <img
              key={image.id}
              src={image.url}
              alt={image.url}
              width="100%"
              height="100%"
              className={image.selected ? "image" : "hideImage"}
            />
          ))}
        <BsArrowRightCircleFill
          className="arrow arrow-right"
          style={{ right: "10px" }}
          onClick={handleNext}
        />
        <div className="circle-container">
          {images &&
            images.map((item) => (
              <div
                key={item.id}
                className={item.selected ? "cicle-selected" : "cicle"}
              ></div>
            ))}
        </div>
        <div className="button-container">
          <button onClick={() => setLoading(true)} className="button">
            Consultar
          </button>
        </div>
      </div>
    </div>
  );
};
```

-styles.css
```
.container {
    width: 100vw;
    height: 100vh;
}

.area {
    position: relative;
    width: 45vw;
    height: 75vh;
    margin: 5px;
}
.image {
    color: white;
    cursor: pointer;
    border-radius: 0.5rem;
    box-shadow: 0px 0px 7px #666;
  }
  .hideImage {
    display: none;
  }
  .arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    color: #fff;
    filter: drop-shadow(0px 0px 5px #555);
  }
  .arrow-left {
    left: 1rem;
  }
  .arrow-right {
    right: 1rem;
  }
  .circle-container {
    display: flex;
    bottom: 1rem;
    flex-direction: row;
    position: absolute;   
    justify-content: center;  
    align-items: center;      
    width: 100%;
  }
  .cicle {
    width: 10px;
    height: 10px;
    border-radius: 50px;
    background-color: grey;
    margin: 2px;
  }
  .cicle-selected {
    width: 10px;
    height: 10px;
    border-radius: 50px;
    background-color: white;
    margin: 2px;
  }
  .button-container {
    display: flex;
    justify-content: center;
    align-content: center;
    width: 100%;
    margin-top: 0.5rem;
  }
  .button {
    width: 90%;
  }
```

### Salida

![image](https://github.com/user-attachments/assets/5d21f9d2-c214-4e96-a8c6-bfc5b6b62754)
![image](https://github.com/user-attachments/assets/07fdfe19-73f1-41e4-807b-5d27174cca67)
![image](https://github.com/user-attachments/assets/f4d67044-9c9b-4367-87ba-d2b692589f98)

![image](https://github.com/user-attachments/assets/9cf62a19-59d4-47c3-86ce-d21465ae5ee6)
![image](https://github.com/user-attachments/assets/a0cbf7fd-1fc5-4d15-8051-d1c7c8575993)
![image](https://github.com/user-attachments/assets/bcabcc19-dc2e-4f35-8fc8-e6bf40fd403d)



    

