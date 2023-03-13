import React from "react";

function Percentage(props) {
  return (
    <>
      <p style={{ color: props.pcolor }}>
        <span style={{ color: props.color }}>{props.num}</span>/100
      </p>
    </>
  );
}

export default Percentage;
