import Tilt from "react-parallax-tilt";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <Tilt>
        <div className="hero-img">
          <img src="src\assets\developer_icon.png" alt="hero" />
        </div>
      </Tilt>
      <div className="hero-text">
        <h1>
          Hello! My name is <span className="highlight">Michael Reyes-Casanova</span>
        </h1>
        <p>
          I design and develop websites and web applications. 
        </p>
      </div>
    </div>
  );
}

export default Hero;
