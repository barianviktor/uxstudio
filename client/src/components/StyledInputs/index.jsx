import React from "react";
import "./style.css";
export const StyledInputs = ({ onChange, placeHolder, value, id, name }) => {
  return (
    <div className="input_row">
      <label htmlFor={id}>{name}</label>
      <input
        id={id}
        name={name}
        type="text"
        value={value}
        placeholder={placeHolder}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};
