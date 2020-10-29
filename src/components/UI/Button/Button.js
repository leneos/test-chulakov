import React from "react";
import "./Button.scss";
export const Button = ({ title, onClick, className }) => {
  return (
    <button className={`Button ${className}`} onClick={onClick}>
      {title}
    </button>
  );
};
