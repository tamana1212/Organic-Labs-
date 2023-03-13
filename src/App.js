import Navbar from "./components/Navbar";
import Result from "./components/Result";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Cards from "./components/Cards";
import Sidebar from "./components/Sidebar";
function App() {
  return (
    <div className="app">
      <Sidebar className="sidebar toggle" id="sidebar" />
      {/* <div className="sdf"> */}
      <Navbar />
      <Sidebar className="sidebar mainbar" />
      <Result
        img="./images/healthy-food 1.png"
        className="first-result result"
        num="30"
        count="1"
        width="30%"
        color="#FFB52D"
      />
      <Cards />
      <Result
        img="./images/drink-water 1.png"
        className="result result-card"
        num="54"
        count="5"
        width="54%"
        color="#004699"
      />
      <Result
        img="./images/anna-pelzer-IGfIGP5ONV0-unsplash (1) 2.png"
        className="result result-card"
        num="26"
        count="6"
        width="26%"
        color="#7C3F2C"
      />
      <Card
        className="card card-bottom card-bottom-none"
        count="7"
        desc="Lorem Eleifend arcu urna malesuada volutpat sed morbi. Id orci non elementum tellus"
        img="./images/result7.png"
      />
      <Footer />
      {/* </div> */}
    </div>
  );
}

export default App;
