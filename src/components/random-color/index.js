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
