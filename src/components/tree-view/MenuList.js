import React from "react";
import { MenuItem } from "./MenuItem";

export const MenuList = ({ list } = []) => {
  return (
    <ul className="list-ul">
      {list && list.length > 0
        ? list.map((item, index) => <MenuItem key={index} item={item} />)
        : null}
    </ul>
  );
};
