import * as React from "react";
import heroimg from "../../assets/heroimg.jpg"
import "./Hero.css";

export default function Hero() {
  
  return (
    <div className="hero">
      <div className="content">
        <div className="hero-img">
          <img src={heroimg} alt="placeholder" ></img>
        </div>
        <div className="intro">
          <h1>Boost your Productivity and Success through new Connections</h1>
          <p>Easy to use, dynamic, and adapted to your needs, [Our Website] makes achieving your goals and making new connections a fast and enjoyable process.</p>
        </div>
      </div>
    </div>
  );
}
