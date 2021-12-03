import React, { Component } from "react";
import "./HeroImageStyles.css";

class HeroImage extends Component {
  render() {
    return (
      <div className="hero-img">
        <div className="heading">
          <h2>{this.props.heading}</h2>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default HeroImage;
