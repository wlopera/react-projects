# REACT PROJECTS

## Ejercicios en React para estudiar a fondo los conceptos

https://www.youtube.com/watch?v=5ZdHfJVAY-s&t=10s

## 10.Crear manejo de tabs

![image](https://github.com/user-attachments/assets/63ec87ef-f3de-4956-9387-b49f2517ce7a)

![image](https://github.com/user-attachments/assets/59fbee99-7070-4957-82d3-bef471088778)

![image](https://github.com/user-attachments/assets/1251f104-b421-42fa-b502-2576e3592f16)

![image](https://github.com/user-attachments/assets/a95aeaef-5b39-48b9-a24c-bc6d6b0c1ca1)

### Código

- index.js

```
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
```

-Tab.js

```
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
```

- ViewTab1.js

```
import React from "react";
import "../styles.css";

export const ViewTab1 = () => {
  return (
    <div className="view-container">
      <h1>Ventana principal TAB UNO - 1</h1>
      <hr />
    </div>
  );
};
```

- ViewTab2.js

```
import React from "react";

export const ViewTab2 = () => {
  return (
    <div className="view-container">
      <h1>Este es el contenido del TAB DOS - 2</h1>
      <hr />
    </div>
  );
};
```

- ViewTab3.js

```
import React from "react";

export const ViewTab3 = () => {
  return (
    <div className="view-container">
      <h1 style={{ color: "red", fontWeight: "bold" }}>
        Algun valor para el TAB TRES - 3
      </h1>
      <hr />
    </div>
  );
};
```

- styles.css

```
.container {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;    
}

.header {
    display: flex;
    flex-direction: row;
    background-color: rgb(22, 22, 236);
    height: 8%;
    justify-content: center;
}
.body {
    display: flex;
    background-color: rgb(191, 246, 246);
    justify-content: center;
    width: 100%;
    height: 100%;
}
.tab {
    cursor: pointer;
    width: 6rem;
    height: 2rem;
    align-content: center;
    align-self: center;    
    text-align: center;
    font-weight: bold;
}
.tab-not-selected {
    color: white;
    background-color: rgb(108, 48, 163);
}
.tab-selected {
    color: black;
    background-color: greenyellow;
}
.tab:hover {
    color: black;
    background-color: rgb(214, 203, 223);
}
.view-container {
     width: 100%;
     text-align: center
}
```

### Salida

![image](https://github.com/user-attachments/assets/a9f2a793-619d-42de-a853-e00d5b627430)

![image](https://github.com/user-attachments/assets/fa8f5bb6-8f1f-4fff-8315-8eb91498ba3e)

![image](https://github.com/user-attachments/assets/5afd7f38-6fdd-42e6-8fe6-69eb808a3496)

![image](https://github.com/user-attachments/assets/4a5dde3d-d268-41a2-b422-7d8fe15e3991)
