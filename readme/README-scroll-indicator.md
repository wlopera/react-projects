# REACT PROJECTS

## Ejercicios en React para estudiar a fondo los conceptos

## Aplicación para avanzar (scroll) de una vista e indicar su avance a medida que se avance en en scroll.

![image](https://github.com/user-attachments/assets/fb06b322-9839-4498-b586-76e279504984)

![image](https://github.com/user-attachments/assets/bfdc41c1-8355-4536-9463-20cc9bc4353b)

![image](https://github.com/user-attachments/assets/09eade7f-b59f-430d-a1fe-59b24d480e6d)

![image](https://github.com/user-attachments/assets/96a05f4d-9845-48d6-a379-b935e7b59510)

- Datos:
- > https://dummyjson.com/products?limit=100

### Código

- index.js

```
import React, { useEffect, useState } from "react";

import "./styles.css";
export const ScrollIndicator = () => {
  const [data, setData] = useState([]);
  const [percentage, setPercentage] = useState(0);
  useEffect(() => {
    const getData = async () => {
      const response = await fetch("https://dummyjson.com/products?limit=100");
      const resJson = await response.json();
      setData(
        resJson.products.map((item) => ({
          key: item.id,
          title: item.title,
        }))
      );
    };
    getData();
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);
    return () => window.removeEventListener("scroll", () => {});
  }, []);
  const handleScrollPercentage = () => {
    const scrollTop = document.documentElement.scrollTop; // Cantidad de píxeles desplazados
    const scrollHeight = document.documentElement.scrollHeight; // Altura total del documento
    const clientHeight = document.documentElement.clientHeight; // Altura del viewport (pantalla)
    // Calcular el porcentaje de scroll
    const scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;
    console.log("scrollPercent:", parseInt(Math.round(scrollPercent)));
    setPercentage(parseInt(Math.round(scrollPercent)));
  };
  return (
    <div className="container">
      <div className="title">{`Indicador de avance: ${percentage}%`}</div>
      <div className="advance">
        <div
          style={{
            width: `${percentage}%`,
            backgroundColor: "#8b02b5",
          }}
        ></div>
      </div>
      <div className="data">
        {data.map((item) => (
          <p key={item.key}>{item.title}</p>
        ))}
      </div>
    </div>
  );
};
```

- styles.css

```
.container {
    display: flex;
    width: 100vw;
    height: 100vh;
    flex-direction: column;
}
.title {
    display:flex;
    justify-content: center;
    align-items: center;
    background-color: #075b0a;
    font-size: 25px;
    font-weight: bold;
    color: white;
    width: 100%;
    height: 3rem;
    position: fixed;
}
.advance {
    display:flex;
    background-color: #aaf900;
    width: 100%;
    height: 0.5rem;
    margin-top: 3rem;
    position: fixed;
}
.data {
    align-self: center;
}
.percentage {    
    font-size: 22px;
    font-weight: bold;  
}
```

### Salida

![image](https://github.com/user-attachments/assets/89c57fbe-912a-4eab-9340-55cc6b20243a)

![image](https://github.com/user-attachments/assets/b8d33353-0888-47e4-8feb-af0203060e7a)

![image](https://github.com/user-attachments/assets/e03befc6-4477-4784-8390-a4e0b62172ea)

- Regresando el scroll

  ![image](https://github.com/user-attachments/assets/ddb35f75-8718-41f3-a2fa-1445b484f7af)
