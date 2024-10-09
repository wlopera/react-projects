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
