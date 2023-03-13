import React from "react";

const ProgressBar = (props) => {
  return (
    <div className="progress-bar" style={{ width: props.mainWidth }}>
      <div
        className="percentage"
        style={{ width: props.width, backgroundColor: props.color }}></div>
    </div>
  );
};

export default ProgressBar;
