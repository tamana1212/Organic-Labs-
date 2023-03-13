import React from "react";
import ProgressBar from "./ProgressBar";
import Percentage from "./Percentage";

function Result(props) {
  return (
    <div className={props.className}>
      <img src={props.img}></img>
      <Percentage color={props.color} num={props.num} pcolor={props.pcolor} />
      <ProgressBar width={props.width} color={props.color} />
      <h2>This is Result {props.count}</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mauris,
        turpis interdum massa condimentum mauris amet volutpat.
      </p>
    </div>
  );
}

export default Result;
