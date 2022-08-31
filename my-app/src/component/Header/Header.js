import React from "react";
import CTA from "./CTA.jsx";
import HeaderSocial from "./HeaderSocial.jsx";
import ME from "../../component/assets/me.png";
import "./Header.css";

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>HEllo I'm</h5>
        <h1>Arafat Alam</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a
          href="#contact"
          className="scroll__down"
          style={{ color: "#4db5ff" }}
        >
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;
