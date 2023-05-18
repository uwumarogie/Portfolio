import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
//import CV from'../../assets/cv.pdf'

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a
        href="https://www.linkedin.com/in/phillips-uwumarogie-80b56ab1/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/uwumarogie" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
      {/*add CV*/}
      <a href="" target="_blank" rel="noreferrer">
        <FaUser />
      </a>
    </div>
  );
};

export default HeaderSocials;
