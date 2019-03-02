import React from "react";
import "./App.css";

import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import ActionButton from "./components/ButtonComponents/ActionButton";
import NumberButton from "./components/ButtonComponents/NumberButton";

const App = () => {
  return (
    <div className="main-container">
      <CalculatorDisplay />
      <NumberButton number="clear" extraStyles="large-btn" />
      <ActionButton action="&divide;" extraStyles="operation-btn" />
      <NumberButton number="7" />
      <NumberButton number="8" />
      <NumberButton number="9" />
      <ActionButton action="&times;" extraStyles="operation-btn" />
      <NumberButton number="4" />
      <NumberButton number="5" />
      <NumberButton number="6" />
      <ActionButton action="&#45;" extraStyles="operation-btn" />
      <NumberButton number="1" />
      <NumberButton number="2" />
      <NumberButton number="3" />
      <ActionButton action="&#43;" extraStyles="operation-btn" />
      <NumberButton number="0" extraStyles="large-btn" />
      <ActionButton action="&#61;" extraStyles="operation-btn" />
    </div>
  );
};

export default App;
