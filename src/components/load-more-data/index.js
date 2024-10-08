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
