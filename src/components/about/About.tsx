import React from "react";
import { FaAward } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi";
import { VscFolderLibrary } from "react-icons/vsc";
import { IconType } from "react-icons";
import "./about.css";

import photoOfMe from "../../assets/photoOfMe.png";

type ArticleProps = {
  headline: string;
  description: string;
  icon: IconType;
};

function ShowArticle({ headline, description, icon }: ArticleProps) {
  return (
    <>
      <article className="about_card">
        {React.createElement(icon, { className: "about-icon" })}
        <h5>{headline}</h5>
        <small>{description}</small>
      </article>
    </>
  );
}

function Welcome() {
  return (
    <>
      <h5>Get To Know</h5>
      <h2>About me</h2>
    </>
  );
}

function PhotoOfMe() {
  return (
    <>
      <div className="about_me-image">
        <img src={photoOfMe} alt="Phillips Uwumarogie" />
      </div>
    </>
  );
}

export default function About() {
  const spacer = " ";
  const experience = {
    headline: "Experience",
    description: "1+ Years Working",
    icon: FaAward,
  };

  const academic = {
    headline: "Grade",
    description: "3.5 GPA",
    icon: HiAcademicCap,
  };

  const projects = {
    headline: "Projects",
    description: "10+ Completed",
    icon: VscFolderLibrary,
  };

  return (
    <section id="about">
      <Welcome />

      <div className="container about_container">
        <div className="about_me">
          <PhotoOfMe />
        </div>

        <div className="about_content">
          <div className="about_cards">
            <ShowArticle
              headline={experience.headline}
              description={experience.description}
              icon={experience.icon}
            />
            <ShowArticle
              headline={academic.headline}
              description={academic.description}
              icon={academic.icon}
            />
            <ShowArticle
              headline={projects.headline}
              description={projects.description}
              icon={projects.icon}
            />
          </div>

          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </p>

          <a href="#contact" className="btn btn-primary">
            {spacer}
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}
