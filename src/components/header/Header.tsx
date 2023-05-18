import React from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import photoOfMe from "../../assets/photoOfMe.png";

function Opening() {
  return (
    <>
      <h5>Hello I'm </h5>
      <h1>Phillips Uwumarogie</h1>
      <h5 className="text-light">Fullstack Developer</h5>
    </>
  );
}

function PhotoOfMe() {
  return (
    <>
      <div className="me">
        <img src={photoOfMe} alt="" />
      </div>
    </>
  );
}

function ScrollDown() {
  const contact: string = "#contact";
  return (
    <>
      <a href={contact} className="scroll_down">
        Scroll down
      </a>
    </>
  );
}

export default function Header() {
  return (
    <header>
      <div className="container header_container">
        <Opening />
        <CTA />
        <HeaderSocials />
        <PhotoOfMe />
        <ScrollDown />
      </div>
    </header>
  );
}
