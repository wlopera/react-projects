# REACT PROJECTS

## Ejercicios en React para estudiar a fondo los conceptos

https://www.youtube.com/watch?v=5ZdHfJVAY-s&t=10s

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
