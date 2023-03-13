import React from "react";

function Card(props) {
  return (
    <div className={props.className}>
      <h3>This is Result {props.count}</h3>
      {props.score && (
        <div className="card-img">
          <img src="./images/Ellipse 1.png" />
          <img src={props.ellipse} style={{ position: "absolute" }} />
        </div>
      )}
      {props.img && (
        <div className="card-img">
          <img src={props.img} />
        </div>
      )}
      {props.score && (
        <p>
          <span style={{ color: props.color }}>{props.num}</span>/50
        </p>
      )}
      <p>{props.desc}</p>
    </div>
  );
}

export default Card;
