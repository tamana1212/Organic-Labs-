import React from "react";
import Card from "./Card";

function Cards() {
  return (
    <div className="multi-cards">
      <Card
        className="card"
        count="2"
        num="38"
        score
        desc="Lorem ipsum dolor sit amet, consectetur alis adipiscing elit. Feugiat"
        ellipse="./images/Ellipse 2.png"
        color="#3E9ADC"
      />
      <Card
        className="card"
        count="3"
        num="38"
        score
        desc="Lorem ipsum dolor sit amet, consectetur alis adipiscing elit. Feugiat"
        ellipse="./images/Ellipse 10.png"
        color="#F44545"
      />
      <Card
        className="card"
        count="4"
        img="./images/clip check.png"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend arcu urna malesuada volutpat sed morbi. Id orci non elementum tellus"
      />
      <Card
        className="card  card-bottom multi-card"
        count="7"
        desc="Lorem Eleifend arcu urna malesuada volutpat sed morbi. Id orci non elementum tellus"
        img="./images/result7.png"
      />
    </div>
  );
}

export default Cards;
