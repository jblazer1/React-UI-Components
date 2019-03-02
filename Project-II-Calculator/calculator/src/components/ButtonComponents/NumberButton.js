import React from "react";
import "./Button.css";

const NumberButton = props => {
  return (
    <div className={`btn-styles ${props.extraStyles}`}>{props.number}</div>
  );
};

export default NumberButton;
