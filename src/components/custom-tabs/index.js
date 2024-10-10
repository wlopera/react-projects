import React, { useState } from "react";
import { data } from "./data";
import { ViewTab1 } from "./views/ViewTab1";
import { ViewTab2 } from "./views/ViewTab2";
import { ViewTab3 } from "./views/ViewTab3";
import { Tab } from "./Tab";

import "./styles.css";

export const CustomTabs = () => {
  //const [context, setContext] = useState(<ViewTab1 />);
  const [currentId, setCurrentId] = useState(1);

  const getContext = (id) => {
    const filter = data.filter((item) => item.id === id)[0];

    switch (filter.path) {
      case "/view/tab1":
        return <ViewTab1 />;
      case "/view/tab2":
        return <ViewTab2 />;
      case "/view/tab3":
        return <ViewTab3 />;
      default:
        return null;
    }
  };

  return (
    <div className="container">
      <div className="header">
        {data.map(({ id, name }) => (
          <Tab
            key={id}
            id={id}
            name={name}
            setCurrentId={() => setCurrentId(id)}
            seleted={id === currentId}
          />
        ))}
      </div>
      <div className="body">{getContext(currentId)}</div>
    </div>
  );
};
