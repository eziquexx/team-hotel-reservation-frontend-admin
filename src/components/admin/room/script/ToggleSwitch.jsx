import React, { useState } from "react";
import '../css/ToggleSwitch.css';

export default function ToggleSwitch({ isChecked, onToggle }) {
   return(
   <button className={`toggle-switch ${isChecked ? "on":"off"}`} onClick={() => onToggle(!isChecked)}>
    {isChecked ? "사용가능" : "사용중"}
    <div className="toggle-handle"></div>
   </button>
   )
}