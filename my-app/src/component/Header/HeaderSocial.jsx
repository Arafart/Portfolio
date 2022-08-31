import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";
import "./HeaderSocial.css";

function HeaderSocial() {
  const Linkedin = "https://www.linkedin.com/in/arafat-alam-3769a4185/";
  const Github = "https://github.com/Arafart?tab=repositories";
  return (
    <div>
      <data className="header__socials">
        <a href={Linkedin} target="_blank" rel="noopener noreferrer">
          <BsLinkedin />
        </a>
        <a href={Github} target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>

        <a
          href="https://dribbble.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiDribbble />
        </a>
      </data>
    </div>
  );
}

export default HeaderSocial;
