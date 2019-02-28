import React from "react";
import "./Card.css";

import CardBanner from "./CardBanner";

function CardContainer() {
  return (
    <div className="card-container">
      <a href="https://reactjs.org">
        <CardBanner />
      </a>
    </div>
  );
}

export default CardContainer;
