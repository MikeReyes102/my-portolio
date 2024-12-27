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
          My name is <span className="name">Michael</span>!
        </h1>
        <p>
          I am a full-stack developer with a passion for creating modern and
          responsive web applications.
        </p>
      </div>
    </div>
  );
}

export default Hero;
