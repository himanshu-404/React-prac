import React from "react";
import "./model.css";

const Model = ({ open, setOpen, children, header }) => {
  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <span className="close" onClick={() => setOpen(false)}>
            &times;
          </span>
          <h4>{header}</h4>
        </div>

        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};

export default Model;
