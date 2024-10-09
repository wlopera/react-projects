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
