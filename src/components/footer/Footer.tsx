import React from "react";
import "./footer.css";

type SectionType = {
  link: string;
  name: string;
};

export default function Footer() {
  const header: string = "#";
  const name: string = "PHILLIPS UWUMAROGIE";
  const copyRight: string = "Phillips Uwumarogie. All rights reserved";

  const section: SectionType[] = [
    {
      link: "#",
      name: "About",
    },
    {
      link: "#experience",
      name: "Experience",
    },
    {
      link: "#services",
      name: "Services",
    },
    {
      link: "#contact",
      name: "Contact",
    },
  ];

  function List({ link, name }: SectionType) {
    return (
      <li>
        <a href={link}>{name}</a>
      </li>
    );
  }

  return (
    <section id="footer">
      <footer>
        <a href={header} className="footer_logo">
          {name}
        </a>

        <ul className="permalinks">
          {section.map((item) => (
            <List link={item.link} name={item.name} />
          ))}
        </ul>

        <div className="footer_copyright">
          <small> &copy; {copyRight}</small>
        </div>
      </footer>
    </section>
  );
}
