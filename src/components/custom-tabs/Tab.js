import React from "react";

import "./styles.css";

export const Tab = ({ id, name, setCurrentId, seleted }) => {
  return (
    <div
      className={`tab ${seleted ? "tab-selected" : "tab-not-selected"}`}
      onClick={() => setCurrentId(id)}
    >
      {name}
    </div>
  );
};
