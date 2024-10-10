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
- https://picsum.photos/v2/list?page=2&limit=100

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

## 5.Crear una App que permita cargar imágenes “infinitamente”

- Utilizar el siguiente link en pasos de 20 en 20
-     > https://dummyjson.com/products?limit=20&skip=

-Cuenta con un botón que debe agregar 20 imágenes adicionales en cada caso hasta llegar a 100

- Luego de 100 imagenes el boton debe desactivarse.

### Código

-index.js

```
import React, { useEffect, useState } from "react";
import "./styles.css";

export const LoadMoreData = () => {
  const [images, setImages] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getImages = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/products?limit=20&skip=" + count
        );
        const resJson = await response.json();
        const data = resJson.products.map((item) => ({
          key: item.id,
          id: item.id,
          url: item.images[0],
        }));
        setImages((prevImages) => {
          // El uso de React.StrictMode me esta duplicando la data
          if (prevImages.length !== 0 && prevImages.length !== count) {
            return prevImages;
          }
          return [...prevImages, ...data];
        });
        setLoading(false);
      } catch (error) {
        console.log("[ERROR]: ", error);
      }
    };
    getImages();
  }, [count]);
  const handleGetMoreImages = () => {
    setCount((prevCount) => prevCount + 20);
  };
  if (loading) {
    return <div className="loading">Cargando imágenes. Por favor espere.</div>;
  }
  return (
    <div className="container">
      <div className="grid-container">
        {images.map((image) => (
          <img
            key={image.id}
            src={image.url}
            alt={`Diapositiva ${image.id}`}
            className="image"
          />
        ))}
      </div>
      <div className="button-area">
        <button onClick={handleGetMoreImages} disabled={count >= 100}>
          {count >= 100
            ? "Has llegaqdo al tope de productos"
            : "Cargar Productos"}
        </button>
      </div>
    </div>
  );
};
```

- styles.css

```
.container {    
    width: 100vw;
    height: 100vh;
}

.loading {
    background-color: rgb(157, 157, 251);
    color: blue;
    text-align: center;
    width: 99%;
}
.grid-container {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 0.5rem;
    width: 99%;
}
.image {
    width: 18rem;
    height: 15rem;
    border: 1px solid grey;
}
.button-area {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
}
```

### Salida

![image](https://github.com/user-attachments/assets/b0da62ae-b8a3-4a8d-9a0a-c6228941474e)

![image](https://github.com/user-attachments/assets/f5105823-ef39-4021-8e9f-0ae868cf8901)

![image](https://github.com/user-attachments/assets/be542fe6-024e-4c6e-81e2-a2b381fe5f13)

![image](https://github.com/user-attachments/assets/bf007c88-8d68-4405-9e83-0ab7561b0cde)

![image](https://github.com/user-attachments/assets/0cf3dc77-6a8e-4676-ab18-d045a72377f9)

## 6.Menú de opciones

![image](https://github.com/user-attachments/assets/5b0f50ca-e608-41cc-a0b8-75a17450b25e)
![image](https://github.com/user-attachments/assets/fb09ee1a-b673-4a5c-80c3-757b9b0403e5)

- Data Json de entrada

```
menus = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Profile",
    to: "/profile",
    children: [
      {
        label: "Details",
        to: "details",
        children: [
          {
            label: "Location",
            to: "location",
            children: [
              {
                label: "City",
                to: "city",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    label: "Settings",
    to: "/settings",
    children: [
      {
        label: "Account",
        to: "account",
      },
      {
        label: "Security",
        to: "security",
        children: [
          {
            label: "Login",
            to: "login",
          },
          {
            label: "Register",
            to: "register",
            children : [
                {
                    label : 'Random data',
                    to : ''
                }
            ]
          },
        ],
      },
    ],
  },
];
```

- Uso de imágenes
-     import {FaMinus, FaPlus} from 'react-icons/fa'

### Código

- index.js

```
import React from "react";
import { menus } from "./data";

import "./styles.css";
import { MenuList } from "./MenuList";
export const TreeView = () => {
  return (
    <div className="container">
      <div className="menu">
        <MenuList list={menus} />
      </div>
      <div className="body">Body</div>
    </div>
  );
};
```

-MenuList.js

```
import React from "react";
import { MenuItem } from "./MenuItem";

export const MenuList = ({ list } = []) => {
  return (
    <ul className="list-ul">
      {list && list.length > 0
        ? list.map((item, index) => <MenuItem key={index} item={item} />)
        : null}
    </ul>
  );
};
```

-MenuItem.js

```
import React, { useState } from "react";
import { MenuList } from "./MenuList";
import { FaMinus, FaPlus } from "react-icons/fa";

export const MenuItem = ({ item }) => {
  const [show, setShow] = useState(false);
  const handleSetShow = () => {
    setShow((prevShow) => !prevShow);
  };
  const controlChildren = () => {
    if (item.children) {
      if (item.children.length && show) {
        return (
          <FaMinus onClick={handleSetShow} className="item-icon" size={15} />
        );
      }
      return <FaPlus onClick={handleSetShow} className="item-icon" size={15} />;
    }
    return "";
  };
  return (
    <li>
      <div className="item-container">
        <p>{item.label}</p>
        {controlChildren()}
      </div>
      {item.children && item.children.length > 0 && show ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
};
```

-styles.css

```
.container {
    display: flex;
    width: 100vw;
    height: 100vh;
}

.menu {
    background-color: #0047AB;
    color: white;
    width: 25%;
    overflow-y: auto;
}
.body {
    width: 75%;
}
.list-ul {
    list-style-type: none;
}
.item-container {
   display: flex;
}
.item-icon {
    padding-left: 1rem;
    align-self: center;
    cursor: pointer;
}
```

### Salida

![image](https://github.com/user-attachments/assets/0d49ef0c-334b-4bc1-a495-0481795cbc48)
![image](https://github.com/user-attachments/assets/96bef766-6e74-4b3d-a81e-1c5cc66ac8b8)

![image](https://github.com/user-attachments/assets/6d4f9f8f-4a00-4eff-9397-d4ecbbbe9274)

## 7.Crear un código QR dando un texto

![image](https://github.com/user-attachments/assets/5fb87e00-59d6-4f60-b47c-3a5562ff9d3d)

- Generar un código QR dado el texto de entrada. Debe utilizar la librería
-     > npm install react-qr-code

### Código

- index.js

```
import React, { useState } from "react";
import QRCode from "react-qr-code";

import "./styles.css";
export const QRCodeGenerator = () => {
  const [name, setName] = useState("");
  const [qr, setQr] = useState(null);
  const generarQR = () => {
    if (name.length > 0) {
      setQr(<QRCode value={name} />);
    }
  };
  return (
    <div className="container">
      <h2>QR Code Generator</h2>
      <div>
        <input
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={generarQR}>Generar</button>
      </div>
      <div className="qr-area">{qr}</div>
    </div>
  );
};
```

-styles.css

```
.container {
    display: flex;
    width: 100vw;
    height: 100vh;
    flex-direction: column;
    align-items: center;
}

.qr-area {
    margin-top: 1rem;
}
```

### Salida

![image](https://github.com/user-attachments/assets/ee096a55-8067-404b-bc73-f3daa9a90b0f)
![image](https://github.com/user-attachments/assets/0681f4e9-1c33-4d8b-ac32-f1c1e13819ea)


## 8.Crear useState para cambiar fondo de oscuro (dark) <--> claro (light) 

- Crear un useState para cambiar la pantalla de claro a  oscuro o viceversa. Almacenar el valor en el LocalStorage.

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

### Salida

![image](https://github.com/user-attachments/assets/c3a99dc5-6402-4432-bbfd-69ff4c45ba2a)
![image](https://github.com/user-attachments/assets/a283d8fa-6ee8-47dc-ae6c-f839a6c0846e)

## 9.Aplicación para avanzar (scroll) de una vista e indicar su avance  a medida que se avance en en scroll.

![image](https://github.com/user-attachments/assets/fb06b322-9839-4498-b586-76e279504984)

![image](https://github.com/user-attachments/assets/bfdc41c1-8355-4536-9463-20cc9bc4353b)

![image](https://github.com/user-attachments/assets/09eade7f-b59f-430d-a1fe-59b24d480e6d)

![image](https://github.com/user-attachments/assets/96a05f4d-9845-48d6-a379-b935e7b59510)

- Datos:
-    > https://dummyjson.com/products?limit=100

### Código

- index.js
```
import React, { useEffect, useState } from "react";

import "./styles.css";
export const ScrollIndicator = () => {
  const [data, setData] = useState([]);
  const [percentage, setPercentage] = useState(0);
  useEffect(() => {
    const getData = async () => {
      const response = await fetch("https://dummyjson.com/products?limit=100");
      const resJson = await response.json();
      setData(
        resJson.products.map((item) => ({
          key: item.id,
          title: item.title,
        }))
      );
    };
    getData();
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);
    return () => window.removeEventListener("scroll", () => {});
  }, []);
  const handleScrollPercentage = () => {
    const scrollTop = document.documentElement.scrollTop; // Cantidad de píxeles desplazados
    const scrollHeight = document.documentElement.scrollHeight; // Altura total del documento
    const clientHeight = document.documentElement.clientHeight; // Altura del viewport (pantalla)
    // Calcular el porcentaje de scroll
    const scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;
    console.log("scrollPercent:", parseInt(Math.round(scrollPercent)));
    setPercentage(parseInt(Math.round(scrollPercent)));
  };
  return (
    <div className="container">
      <div className="title">{`Indicador de avance: ${percentage}%`}</div>
      <div className="advance">
        <div
          style={{
            width: `${percentage}%`,
            backgroundColor: "#8b02b5",
          }}
        ></div>
      </div>
      <div className="data">
        {data.map((item) => (
          <p key={item.key}>{item.title}</p>
        ))}
      </div>
    </div>
  );
};
```

- styles.css
```
.container {
    display: flex;
    width: 100vw; 
    height: 100vh; 
    flex-direction: column;
}
.title {
    display:flex;
    justify-content: center;
    align-items: center;
    background-color: #075b0a;
    font-size: 25px;
    font-weight: bold;
    color: white;
    width: 100%;
    height: 3rem;
    position: fixed;
}
.advance {
    display:flex;
    background-color: #aaf900; 
    width: 100%;
    height: 0.5rem;
    margin-top: 3rem;
    position: fixed;
}
.data {
    align-self: center;
}
.percentage {    
    font-size: 22px;
    font-weight: bold;  
}
```


### Salida

![image](https://github.com/user-attachments/assets/89c57fbe-912a-4eab-9340-55cc6b20243a)

![image](https://github.com/user-attachments/assets/b8d33353-0888-47e4-8feb-af0203060e7a)

![image](https://github.com/user-attachments/assets/e03befc6-4477-4784-8390-a4e0b62172ea)

- Regresando el scroll
  
  ![image](https://github.com/user-attachments/assets/ddb35f75-8718-41f3-a2fa-1445b484f7af)


## 10.Crear manejo de tabs 
![image](https://github.com/user-attachments/assets/63ec87ef-f3de-4956-9387-b49f2517ce7a)

![image](https://github.com/user-attachments/assets/59fbee99-7070-4957-82d3-bef471088778)

![image](https://github.com/user-attachments/assets/1251f104-b421-42fa-b502-2576e3592f16)


![image](https://github.com/user-attachments/assets/a95aeaef-5b39-48b9-a24c-bc6d6b0c1ca1)

### Código

- index.js
```
import React, { useState } from "react";
import { data } from "./data";
import { ViewTab1 } from "./views/ViewTab1";
import { ViewTab2 } from "./views/ViewTab2";
import { ViewTab3 } from "./views/ViewTab3";
import { Tab } from "./Tab";

import "./styles.css";
export const CustomTabs = () => {
  //const [context, setContext] = useState(<ViewTab1 />);
  const [currentId, setCurrentId] = useState(1);
  const getContext = (id) => {
    const filter = data.filter((item) => item.id === id)[0];
    switch (filter.path) {
      case "/view/tab1":
        return <ViewTab1 />;
      case "/view/tab2":
        return <ViewTab2 />;
      case "/view/tab3":
        return <ViewTab3 />;
      default:
        return null;
    }
  };
  return (
    <div className="container">
      <div className="header">
        {data.map(({ id, name }) => (
          <Tab
            key={id}
            id={id}
            name={name}
            setCurrentId={() => setCurrentId(id)}
            seleted={id === currentId}
          />
        ))}
      </div>
      <div className="body">{getContext(currentId)}</div>
    </div>
  );
};
```

-Tab.js
```
import React from "react";

import "./styles.css";
export const Tab = ({ id, name, setCurrentId, seleted }) => {
  return (
    <div
      className={`tab ${seleted ? "tab-selected" : "tab-not-selected"}`}
      onClick={() => setCurrentId(id)}
    >
      {name}
    </div>
  );
};
```

- ViewTab1.js
```
import React from "react";
import "../styles.css";

export const ViewTab1 = () => {
  return (
    <div className="view-container">
      <h1>Ventana principal TAB UNO - 1</h1>
      <hr />
    </div>
  );
};
```

- ViewTab2.js
```
import React from "react";

export const ViewTab2 = () => {
  return (
    <div className="view-container">
      <h1>Este es el contenido del TAB DOS - 2</h1>
      <hr />
    </div>
  );
};
```

- ViewTab3.js
```
import React from "react";

export const ViewTab3 = () => {
  return (
    <div className="view-container">
      <h1 style={{ color: "red", fontWeight: "bold" }}>
        Algun valor para el TAB TRES - 3
      </h1>
      <hr />
    </div>
  );
};
```

- styles.css
```
.container {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;    
}

.header {
    display: flex;
    flex-direction: row;
    background-color: rgb(22, 22, 236);
    height: 8%;
    justify-content: center;
}
.body {
    display: flex;
    background-color: rgb(191, 246, 246);
    justify-content: center;
    width: 100%;
    height: 100%;
}
.tab {
    cursor: pointer;
    width: 6rem;
    height: 2rem;
    align-content: center;
    align-self: center;    
    text-align: center;
    font-weight: bold;
}
.tab-not-selected {
    color: white;
    background-color: rgb(108, 48, 163);
}
.tab-selected {
    color: black;
    background-color: greenyellow;
}
.tab:hover {
    color: black;
    background-color: rgb(214, 203, 223);
}
.view-container {
     width: 100%;
     text-align: center
}
```

### Salida

![image](https://github.com/user-attachments/assets/a9f2a793-619d-42de-a853-e00d5b627430)

![image](https://github.com/user-attachments/assets/fa8f5bb6-8f1f-4fff-8315-8eb91498ba3e)

![image](https://github.com/user-attachments/assets/5afd7f38-6fdd-42e6-8fe6-69eb808a3496)

![image](https://github.com/user-attachments/assets/4a5dde3d-d268-41a2-b422-7d8fe15e3991)









