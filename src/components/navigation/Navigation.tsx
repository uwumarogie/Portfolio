import React from "react";
import "./navigation.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useState } from "react";
import { IconType } from "react-icons";

export default function Navigation() {
  const [activeNav, setActiveNav] = useState<string>("#");

  type SectionType = {
    link: string;
    icon: string;
  };
  type IconArrayType = {
    [name: string]: IconType;
  };
  const section = [
    {
      link: "#",
      icon: "AiOutlineHome",
    },
    {
      link: "#about",
      icon: "AiOutlineUser",
    },
    {
      link: "#experience",
      icon: "BiBook",
    },
    {
      link: "#services",
      icon: "RiServiceLine",
    },
    {
      link: "#contact",
      icon: "BiMessageSquareDetail",
    },
  ];

  const iconArray: IconArrayType = {
    AiOutlineHome: AiOutlineHome,
    AiOutlineUser: AiOutlineUser,
    BiBook: BiBook,
    RiServiceLine: RiServiceLine,
    BiMessageSquareDetail: BiMessageSquareDetail,
  };

  function getIcon(icon: string): IconType {
    return iconArray[icon];
  }

  function Link({ link, icon }: SectionType) {
    const Icon: IconType = getIcon(icon);
    return (
      <a
        href={link}
        onClick={() => setActiveNav(link)}
        className={activeNav === link ? "active" : ""}
      >
        {Icon && React.createElement(Icon)}
      </a>
    );
  }

  return (
    <nav>
      {section.map((section) => (
        <Link link={section.link} icon={section.icon} />
      ))}
    </nav>
  );
}
