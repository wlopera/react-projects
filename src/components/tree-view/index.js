import React from "react";
import { menus } from "./data";

import "./styles.css";
import { MenuList } from "./MenuList";

export const TreeView = () => {
  return (
    <div className="container">
      <div className="menu">
        <MenuList list={menus} />
      </div>
      <div className="body">Body</div>
    </div>
  );
};
