import React from "react";
import "./style.css";
export const StyledListItem = ({ children, onClick }) => {
  return (
    <div onClick={onClick} className="StyledListItem">
      {children}
    </div>
  );
};
