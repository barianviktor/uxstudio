import React from "react";
import "./style.css";
const Backdrop = ({ children, onClick }) => {
  return (
    <div className="backdrop_container">
      {children}
      <div onClick={onClick} className="backdrop" />
    </div>
  );
};
export default Backdrop;
