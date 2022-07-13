import React from "react";
import "./style.css";

export const ButtonIconLabelPrimary = ({ children, onClick }) => {
  return (
    <button
      type="button"
      className=" buttonWithImage ButtonIconLabelPrimary"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export const ButtonIconLabelSecondary = ({ children, onClick }) => {
  return (
    <button
      type="button"
      className="buttonWithImage ButtonIconLabelSecondary"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const ButtonIconLabelSpecial = ({ children, onClick }) => {
  return (
    <button
      type="button"
      className="buttonWithImage ButtonIconLabelSpecial"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export const ButtonLabelPrimary = ({ children, onClick }) => {
  return (
    <button type="button" className="ButtonLabelPrimary" onClick={onClick}>
      {children}
    </button>
  );
};
export const ButtonLabelSecondary = ({ children, onClick }) => {
  return (
    <button type="button" className="ButtonLabelSecondary" onClick={onClick}>
      {children}
    </button>
  );
};

export const ButtonIconPrimary = ({ children, onClick }) => {
  return (
    <button type="button" className="ButtonIconPrimary" onClick={onClick}>
      {children}
    </button>
  );
};
export const ButtonIconSecondary = ({ children, onClick }) => {
  return (
    <button type="button" className="ButtonIconSecondary" onClick={onClick}>
      {children}
    </button>
  );
};
export const ButtonIconSecondaryListItem = ({ children, onClick }) => {
  return (
    <button
      type="button"
      className="ButtonIconSecondaryListItem"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
