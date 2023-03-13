import React from "react";

function Footer() {
  return (
    <footer>
      <h1>How can we get in touch?</h1>
      <form>
        <div class="inputs">
          <div className="input-div">
            <img src="./images/Vector.png" />
            <input type="text" placeholder="Name" />
          </div>
          <div className="input-div">
            <img src="./images/Vector2.png" />
            <input type="email" placeholder="Email" /> <br />
          </div>
        </div>
        <button>Submit</button>
      </form>
      <h2>Thank You!</h2>
      <p>Let's Get In Touch</p>
      <div className="icons-container">
        <div className="circular-icons">
          <div className="icon">
            <i class="fa-brands fa-facebook-f"></i>
          </div>
          <div className="icon">
            <i class="fa-brands fa-twitter"></i>
          </div>
          <div className="icon">
            <i class="fa-brands fa-linkedin-in"></i>
          </div>
          <div className="icon">
            <i class="fa-solid fa-phone"></i>
          </div>
          <div className="icon">
            <i class="fa-regular fa-envelope"></i>
          </div>
          <div className="icon">
            <i class="fa-regular fa-comment-dots"></i>
          </div>
        </div>
        <div className="button-icons">
          <button style={{ backgroundColor: "#4267b2" }}>
            <i class="fa-solid fa-thumbs-up"></i>
            Like
          </button>
          <button style={{ backgroundColor: "#3db8e4" }}>
            <i class="fa-brands fa-twitter"></i>
            Follow
          </button>
          <button style={{ backgroundColor: "black" }}>
            <i class="fa-brands fa-instagram"></i>
            Follow
          </button>
          <button style={{ backgroundColor: "#e6001a" }}>
            <i class="fa-brands fa-pinterest"></i>
            Follow
          </button>
          <button style={{ backgroundColor: "#006097" }}>
            <i class="fa-brands fa-linkedin-in"></i>
            Follow
          </button>
        </div>
      </div>
      <button>Retake</button>
      <div className="copyright">
        <div>This calculator is powered by Outgrow.co</div>
        <img src="./images/image 13.png" />
      </div>
    </footer>
  );
}

export default Footer;
