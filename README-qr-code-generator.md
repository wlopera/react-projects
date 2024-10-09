# REACT PROJECTS

## Ejercicios en React para estudiar a fondo los conceptos

## 7. Crear un código QR dando un texto

![image](https://github.com/user-attachments/assets/5fb87e00-59d6-4f60-b47c-3a5562ff9d3d)

- Generar un código QR dado el texto de entrada. Debe utilizar la librería
-     > npm install react-qr-code

### Código

- index.js

```
import React, { useState } from "react";
import QRCode from "react-qr-code";

import "./styles.css";
export const QRCodeGenerator = () => {
  const [name, setName] = useState("");
  const [qr, setQr] = useState(null);
  const generarQR = () => {
    if (name.length > 0) {
      setQr(<QRCode value={name} />);
    }
  };
  return (
    <div className="container">
      <h2>QR Code Generator</h2>
      <div>
        <input
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={generarQR}>Generar</button>
      </div>
      <div className="qr-area">{qr}</div>
    </div>
  );
};
```

-styles.css

```
.container {
    display: flex;
    width: 100vw;
    height: 100vh;
    flex-direction: column;
    align-items: center;
}

.qr-area {
    margin-top: 1rem;
}
```

### Salida

![image](https://github.com/user-attachments/assets/ee096a55-8067-404b-bc73-f3daa9a90b0f)
![image](https://github.com/user-attachments/assets/0681f4e9-1c33-4d8b-ac32-f1c1e13819ea)
