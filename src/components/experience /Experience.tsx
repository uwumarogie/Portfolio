import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import frontend from "./frontend.json";
import backend from "./backend.json";

type ProgrammingType = {
  id: number;
  language: string;
  level: string;
};

function ProgrammingSkills({ id, language, level }: ProgrammingType) {
  return (
    <>
      <article className="experience_details" id={id.toString()}>
        <BsPatchCheckFill className="experience_details-icon" />
        <div>
          <h4>{language}</h4>
          <small className="text-light">{level}</small>
        </div>
      </article>
    </>
  );
}

function Headline() {
  return (
    <>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>
    </>
  );
}

export default function Experience() {
  return (
    <section id="experience">
      <Headline />

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>

          <div className="experience_content">
            {frontend.map((items) => (
              <ProgrammingSkills
                id={items.id}
                language={items.language}
                level={items.level}
              />
            ))}
          </div>
        </div>

        <div className="experience_backend">
          <h3>Backend Development</h3>

          <div className="experience_content">
            {backend.map((items) => (
              <ProgrammingSkills
                id={items.id}
                language={items.language}
                level={items.level}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
