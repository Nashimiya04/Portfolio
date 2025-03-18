import React from "react";
import "./Skills.css";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
const Skills = () => {
  return (
    <div>
      <div className="contact-backgroundImage">
        <div className="overlay">
          <div className="overlay-Color"></div>
          <div className="skilldetails">
            <h3>Skills</h3>
            <div className="skill-container">
              <Link to="/">
                {" "}
                <p>
                  {" "}
                  <span>Home</span>
                </p>
              </Link>
              <p className="bar-icon">Skills</p>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="image-divider"></div>
      <Navbar />
      <div className="Skills-title">
        <h3>PROGRAMMING SKILLS</h3>
      </div>
      <div className="skills">
        <div className="skill">
          <span className="skill-title">HTML</span>
          <div className="skill-content">
            <span className="skill-bar html">
              <span className="skill_percentage">95%</span>
            </span>
          </div>
        </div>
        <div className="skill">
          <span className="skill-title">CSS</span>
          <div className="skill-content">
            <span className="skill-bar css">
              <span className="skill_percentage">85%</span>
            </span>
          </div>
        </div>
        <div className="skill">
          <span className="skill-title">Javascript</span>
          <div className="skill-content">
            <span className=" skill-bar javascript">
              <span className="skill_percentage">70%</span>
            </span>
          </div>
        </div>
        <div className="skill">
          <span className="skill-title">ReactJS</span>
          <div className="skill-content">
            <span className=" skill-bar react">
              <span className="skill_percentage">60%</span>
            </span>
          </div>
        </div>
        <div className="skill">
          <span className="skill-title">SQL</span>
          <div className="skill-content">
            <span className=" skill-bar sql">
              <span className="skill-percentage">55%</span>
            </span>
          </div>
        </div>
        <div className="skill">
          <span className="skill-title">Tailwind CSS</span>
          <div className="skill-content">
            <span className=" skill-bar tail">
              <span className="skill-percentage">50%</span>
            </span>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default Skills;
