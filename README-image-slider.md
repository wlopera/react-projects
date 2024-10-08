# REACT PROJECTS

## Ejercicios en React para estudiar a fondo los conceptos

https://www.youtube.com/watch?v=5ZdHfJVAY-s&t=10s

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
