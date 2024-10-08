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
