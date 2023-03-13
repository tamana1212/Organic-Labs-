import React from "react";
import ProgressBar from "./ProgressBar";
import Percentage from "./Percentage";

function Sidebar(props) {
  return (
    <div className={props.className} id={props.id}>
      <div className="side-ellipse">
        <div className="side-img">
          <img src="./images/Ellipse 7.png" />
          <img src="./images/Ellipse 8.png" />
        </div>
        <div className="side-p">
          <p>
            <span>68</span>/100
          </p>
        </div>
      </div>
      <div className="side-content">
        <h2>This is Primary Result 8</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mauris,
          turpis interdum massa condimentum.
        </p>

        <button>Let's Go Healthy</button>
      </div>
      <div className="side-progress">
        <div className="side-result">
          <p>This is Result 1</p>

          <Percentage color="#FFB52D" num="30" pcolor="rgba(51, 95, 4, 0.4)" />
        </div>
        <ProgressBar width="30%" color="#FFB52D" mainWidth="380px" />
        <div className="side-result">
          <p>This is Result 5</p>

          <Percentage color="#004699" num="54" pcolor="rgba(51, 95, 4, 0.4)" />
        </div>
        <ProgressBar width="54%" color="#004699" mainWidth="380px" />
        <div className="side-result">
          <p>This is Result 6</p>

          <Percentage color="#7C3F2C" num="26" pcolor="rgba(51, 95, 4, 0.4)" />
        </div>
        <ProgressBar width="26%" color="#7C3F2C" mainWidth="380px" />
      </div>
    </div>
  );
}

export default Sidebar;
