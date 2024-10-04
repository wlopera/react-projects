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
