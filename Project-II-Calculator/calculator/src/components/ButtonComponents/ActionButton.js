import React from "react";
import "./Button.css";

const ActionButton = props => {
  return (
    <div className={`btn-styles ${props.extraStyles}`}>{props.action}</div>
  );
};

export default ActionButton;
