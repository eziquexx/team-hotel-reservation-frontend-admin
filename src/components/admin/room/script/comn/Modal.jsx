import React from "react";
import '../../css/Modal.css'; // 새로운 CSS 파일

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null; // isOpen이 false면 아무것도 렌더링하지 않음

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          ✖
        </button>
        {children}
      </div>
    </div>
  );
}