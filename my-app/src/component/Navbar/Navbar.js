import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import "./Navbar.css";

function Navbar() {
  const [navactive, SetNavActive] = useState("#");
  return (
    <nav>
      <a
        href="#"
        rel="noopener noreferrer"
        onClick={() => SetNavActive("#")}
        className={navactive === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>{" "}
      <a
        href="#about"
        onClick={() => SetNavActive("#about")}
        className={navactive === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => SetNavActive("#experience")}
        className={navactive === "#experience" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a
        href="#services"
        onClick={() => SetNavActive("#services")}
        className={navactive === "#services" ? "active" : ""}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        onClick={() => SetNavActive("#contact")}
        className={navactive === "#contact" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
}

export default Navbar;
