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
