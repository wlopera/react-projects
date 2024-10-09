# REACT PROJECTS

## Menú de opciones

![image](https://github.com/user-attachments/assets/5b0f50ca-e608-41cc-a0b8-75a17450b25e)
![image](https://github.com/user-attachments/assets/fb09ee1a-b673-4a5c-80c3-757b9b0403e5)

- Data Json de entrada

```
menus = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Profile",
    to: "/profile",
    children: [
      {
        label: "Details",
        to: "details",
        children: [
          {
            label: "Location",
            to: "location",
            children: [
              {
                label: "City",
                to: "city",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    label: "Settings",
    to: "/settings",
    children: [
      {
        label: "Account",
        to: "account",
      },
      {
        label: "Security",
        to: "security",
        children: [
          {
            label: "Login",
            to: "login",
          },
          {
            label: "Register",
            to: "register",
            children : [
                {
                    label : 'Random data',
                    to : ''
                }
            ]
          },
        ],
      },
    ],
  },
];
```

- Uso de imágenes
-     import {FaMinus, FaPlus} from 'react-icons/fa'

### Código

- index.js

```
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
```

-MenuList.js

```
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
```

-MenuItem.js

```
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
```

-styles.css

```
.container {
    display: flex;
    width: 100vw;
    height: 100vh;
}

.menu {
    background-color: #0047AB;
    color: white;
    width: 25%;
    overflow-y: auto;
}
.body {
    width: 75%;
}
.list-ul {
    list-style-type: none;
}
.item-container {
   display: flex;
}
.item-icon {
    padding-left: 1rem;
    align-self: center;
    cursor: pointer;
}
```

### Salida

![image](https://github.com/user-attachments/assets/0d49ef0c-334b-4bc1-a495-0481795cbc48)
![image](https://github.com/user-attachments/assets/96bef766-6e74-4b3d-a81e-1c5cc66ac8b8)

![image](https://github.com/user-attachments/assets/6d4f9f8f-4a00-4eff-9397-d4ecbbbe9274)
