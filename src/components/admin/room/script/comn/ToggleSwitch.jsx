import React, { useState } from "react";
import '../../css/ToggleSwitch.css';

export default function ToggleSwitch({ isChecked, onToggle,labelOn="ON",labelOff="OFF" }) {
   return(
   <button className={`toggle-switch ${isChecked ? "on":"off"}`} onClick={() => onToggle(!isChecked)}>
    {isChecked ? labelOn : labelOff}
    <div className="toggle-handle"></div>
   </button>
   )
}