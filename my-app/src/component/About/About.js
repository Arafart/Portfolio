import React from "react";
import ME from "../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import "./About.css";
function About() {
  const URL =
    "https://png.pngtree.com/background/20211216/original/pngtree-computer-desktop-business-office-coffee-keyboard-photography-map-with-map-picture-image_1511667.jpg";
  return (
    <section id="about">
      <h5>Get TO Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={URL} alt="AboutMEImage" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>0.6 year</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>4 Completed</small>
            </article>
          </div>
          <p>
            Currently looking to join the workforce to gain real-world
            experience. Ability to complete tasks on time in both individual and
            team settings. Dependable and reliable, ready to learn and grow with
            your company.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
