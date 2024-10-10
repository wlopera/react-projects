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
