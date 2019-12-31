import React from "react";
import logo from "../styles/assets/logo.png";

function Header() {
  return (
    <div className="top-background">
      <div className="top-background-text-container">
        <img src={logo} alt="title" />
        <form
          action="https://www.myprocare.com/Default/EnterEmail"
          target="_blank"
        >
          <input
            type="submit"
            value="Register"
            className="register-btn first"
          />
          <a href="#philosophy-anchor" className="register-btn second">
            Our Philosophy
          </a>
          <a href="#about-anchor" className="register-btn third">
            About Us
          </a>
          <a href="#camp-anchor" className="register-btn fourth">
            Camp Info
          </a>
        </form>
      </div>
    </div>
  );
}

export { Header as default };
