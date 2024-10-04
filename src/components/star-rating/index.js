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
            size={40}
          />
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
