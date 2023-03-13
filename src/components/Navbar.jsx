import React from "react";

function Navbar() {
  let prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "30px";
    } else {
      document.getElementById("navbar").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
    if (currentScrollPos > 20) {
      document.getElementById("main-header").style.background =
        "linear-gradient(113.52deg, #335F04 23.96%, #FFFFFF 169.53%)";
    } else {
      document.getElementById("main-header").style.background = "transparent";
    }
  };

  const hamburgerToggle = () => {
    // document.getElementById("sidebar").style.display = "flex"
    document.getElementById("sidebar").style.marginLeft = "0";
    if (
      window.getComputedStyle(document.getElementById("sidebar")).display ===
      "none"
    ) {
      document.getElementById("sidebar").style.display = "flex";
    } else {
      document.getElementById("sidebar").style.display = "none";
    }
  };

  return (
    <div className="main">
      <div className="upper-header" id="navbar">
        Organic Labs
      </div>
      <div className="main-header" id="main-header">
        <h1>This is Heading Text</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mauris,
          turpis interdum massa condimentum mauris amet volutpat.
        </p>
        <button>Let's Go Healthy</button>
      </div>
      <img src="./images/dose-juice-sTPy-oeA3h0-unsplash.png"></img>
      <div id="hamburger" className="hamburger" onClick={hamburgerToggle}>
        <i class="fa-solid fa-bars"></i>
      </div>
    </div>
  );
}

export default Navbar;
