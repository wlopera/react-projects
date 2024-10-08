# REACT PROJECTS

## Ejercicios en React para estudiar a fondo los conceptos

https://www.youtube.com/watch?v=5ZdHfJVAY-s&t=10s

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
