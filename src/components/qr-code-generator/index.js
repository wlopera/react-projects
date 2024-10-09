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
