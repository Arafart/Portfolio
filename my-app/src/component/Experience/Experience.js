import React from "react";
import "./Experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
function Experience() {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container exp__container">
        <div className="exp__frontend">
          <h3>Frontend Developer</h3>
          <div className="exp__content">
            <article className="exp__details">
              <BsPatchCheckFill className="exp__details-icons" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="exp__details">
              <BsPatchCheckFill className="exp__details-icons" />
              <div>
                <h4>Css</h4>
                <small className="text-light">Intermidiate</small>
              </div>
            </article>

            <article className="exp__details">
              <BsPatchCheckFill className="exp__details-icons" />
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Intermidiate</small>
              </div>
            </article>

            <article className="exp__details">
              <BsPatchCheckFill className="exp__details-icons" />
              <div>
                <h4>Tailwindcss</h4>
                <small className="text-light">Intermidiate</small>
              </div>
            </article>

            <article className="exp__details">
              <BsPatchCheckFill className="exp__details-icons" />
              <div>
                {" "}
                <h4>Bootstrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="exp__details">
              <BsPatchCheckFill className="exp__details-icons" />
              <div>
                {" "}
                <h4>ReactJs</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>

        <div className="exp__backend">
          <h3>Backend Developer</h3>
          <div className="exp__content">
            <article className="exp__details">
              <BsPatchCheckFill className="exp__details-icons" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="exp__details">
              <BsPatchCheckFill className="exp__details-icons" />
              <div>
                <h4>Css</h4>
                <small className="text-light">Intermidiate</small>
              </div>
            </article>

            <article className="exp__details">
              <BsPatchCheckFill className="exp__details-icons" />
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Intermidiate</small>
              </div>
            </article>

            <article className="exp__details">
              <BsPatchCheckFill className="exp__details-icons" />
              <div>
                <h4>Tailwindcss</h4>
                <small className="text-light">Intermidiate</small>
              </div>
            </article>

            <article className="exp__details">
              <BsPatchCheckFill className="exp__details-icons" />
              <div>
                {" "}
                <h4>Bootstrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="exp__details">
              <BsPatchCheckFill className="exp__details-icons" />
              <div>
                {" "}
                <h4>ReactJs</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
