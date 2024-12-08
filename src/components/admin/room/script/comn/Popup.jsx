import React from "react";
import '../../css/Popup.css';

export default function Popup({onClose,children}){
return(
    <div className="pop-overlay">
        <div className="popup-content">
            <button className="close-button" onClick={onClose}>
            ✖
            </button>
            {children}
        </div>
    </div>
)
}