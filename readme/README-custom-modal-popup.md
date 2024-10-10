# REACT PROJECTS

## Ejercicios en React para estudiar a fondo los conceptos

https://www.youtube.com/watch?v=5ZdHfJVAY-s&t=10s

## 11.Crear una ventana modal

![image](https://github.com/user-attachments/assets/51638e42-2e18-4756-ada3-a7435b87bf15)

![image](https://github.com/user-attachments/assets/27779b13-f0dc-4985-918b-878b744da166)

- Se va a utilizar @keyframes. (Animación sobre la pantalla)

```
La regla arroba @keyframes permite a los autores controlar los pasos intermedios en una secuencia de animación CSS mediante el establecimiento de keyframes (o puntos de trayectoria) a lo largo de la secuencia de animación que debe ser alcanzado por determinados puntos durante la animación. Esto le da un control más específico sobre los pasos intermedios de la secuencia de animación que se obtiene al dejar que el navegador maneje todo automáticamente.
Para utilizar keyframes, se crea una regla de @keyframes con un nombre que es utilizada por la propiedad animation-name para que coincida con una animación de keyframe a su lista. Cada regla @keyframes contiene una lista de estilo de selectores de keyframe, cada una de los cuales está compuesto de un porcentaje a lo largo de la animación en la que se produce el keyframe así como un bloque que contiene la información de estilo para ese keyframe.
Puede listar los keyframes en cualquier orden, éstos serán tratados en el orden en que los porcentajes especificados indican que debe ocurrir.
Sintaxis
@keyframes <identifier> {
  [ [ from | to | <percentage> ] [, from | to | <percentage> ]* block ]*
}
```

### Código

-index.js

```
import React, { useState } from "react";

import "./styles.css";
import { Modal } from "./Modal";
export const CustomModalPopup = () => {
  const [showModal, setShowModal] = useState(false);
  const Header = () => {
    return <h1 className="header">Cabecera Personalizada</h1>;
  };
  const Body = () => {
    return <p className="body">Cuerpo de la Modal</p>;
  };
  const Footer = () => {
    return <h3 className="footer">Pie de Página Personalizada</h3>;
  };
  return (
    <div className="container">
      <button className="button" onClick={() => setShowModal(true)}>
        Abrir Ventana Modal
      </button>
      <Modal
        show={showModal}
        onClose={setShowModal}
        header={<Header />}
        footer={<Footer />}
      >
        {<Body />}
      </Modal>
    </div>
  );
};
```

-Modal.js

```
import React from "react";

import "./styles.css";
export const Modal = ({ show, onClose, header, footer, children }) => {
  if (!show) {
    return null;
  }
  return (
    <div className="modal-overlay">
      <div className="modal-context">
        <div className="modal-header">
          <div className="modal-header-title">{header}</div>
          <div className="modal-close" onClick={() => onClose(false)}>
            x
          </div>
        </div>
        <div className="modal-body">{children}</div>
        <div className="modal-footer">{footer}</div>
      </div>
    </div>
  );
};
```

-styles.css

```
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
}

.button {
    margin-top: 2rem;
}
.header {
     color: white;
     font-weight: bold
}
.body {
    font-weight: 400;  
}
.footer {
     color: white;
     font-weight: bold
}
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(185, 240, 5, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
}
.modal-context {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    width: 50%;
    border: 1px solid black;
    margin-top: 2rem;
    position: relative;
    /* animation-name: animateModal; */
    /* animation-duration: 0.5s; */
    animation: animateModal 0.9s ease-out; /* Aplica la animación */
}
.modal-header {
    display: flex;
    background-color: #5cb85c;
    width: 100%;
    height: 100px;  
    justify-content: space-evenly;
}
.modal-header-title {
    background-color: #5cb85c;
    justify-content: center;
    align-items: center;
    width: 96%;
    height: 80px;
    text-align: center;
}
.modal-close {
    color: white;
    width: 4%;
    height: 80px;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
}
.modal-body {
    width: 100%;
    height: 200px;
    text-align: center;
    background-color: white;
}
.modal-footer {
    background-color: #5cb85c;
    width: 100%;
    height: 50px;
    text-align: center;
}
/* Animacion
    La regla arroba @keyframes permite a los autores controlar los pasos intermedios en una secuencia de animación CSS
    mediante el establecimiento de keyframes (o puntos de trayectoria) a lo largo de la secuencia de animación que debe
    ser alcanzado por determinados puntos durante la animación. Esto le da un control más específico sobre los pasos
    intermedios de la secuencia de animación que se obtiene al dejar que el navegador maneje todo automáticamente.
    Para utilizar keyframes, se crea una regla de @keyframes con un nombre que es utilizada por la propiedad animation-name
    para que coincida con una animación de keyframe a su lista. Cada regla @keyframes contiene una lista de estilo de selectores
    de keyframe, cada una de los cuales está compuesto de un porcentaje a lo largo de la animación en la que se produce el keyframe
    así como un bloque que contiene la información de estilo para ese keyframe.
    Puede listar los keyframes en cualquier orden, éstos serán tratados en el orden en que los porcentajes especificados indican que debe ocurrir.
    from: El modal comienza 200 píxeles por encima de su posición final y con una opacidad de 0 (invisible).
    to: El modal termina en su posición normal (top: 0) y con opacidad 1 (completamente visible).
    animation: animateModal 0.9s ease-out;: Esta propiedad aplica la animación al modal cuando se abre.
    La animación durará 0.9 segundos con una curva de aceleración ease-out, lo que significa que comenzará rápido y se desacelerará al final.
*/
@keyframes animateModal {
    from {
      top: -200px;
      opacity: 0;
    }
 
    to {
      top: 0;
      opacity: 1;
    }
  }
```

- Salida

![image](https://github.com/user-attachments/assets/9e412538-f41b-46f7-90c4-c9d6d0f30c9e)

![image](https://github.com/user-attachments/assets/e90d984d-6bf0-4d90-92d7-f37a4ec653e6)

![image](https://github.com/user-attachments/assets/1b30248b-b3ec-4038-8bdc-3123cd9a79a2)

- Click sobre la ‘X‘ para cerrar la modal
