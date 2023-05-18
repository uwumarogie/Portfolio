import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";
import webDevelopment from "./webDevelopment.json";
import cyberSecurity from "./cybersecurity.json";
import business from "./business.json";
export default function Services() {
  type JsonType = {
    id: number;
    text: string;
  };

  function ListItem({ id, text }: JsonType) {
    return (
      <li className="service_list" id={id.toString()}>
        <BiCheck />
        <p>{text}</p>
      </li>
    );
  }

  function Welcoming() {
    return (
      <>
        <h5> What I Offer</h5>
        <h2> Services</h2>
      </>
    );
  }

  return (
    <section id="services">
      <Welcoming />

      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>CyberSecurity</h3>
            <ul className="service_list">
              {cyberSecurity.map((item) => (
                <ListItem id={item.id} text={item.text} />
              ))}
            </ul>
          </div>
        </article>

        {/* END OF CYBERSECURITY*/}

        <article className="service">
          <div className="service_head">
            <h3>Web Development</h3>
            <ul className="service_list">
              {webDevelopment.map((item) => (
                <ListItem id={item.id} text={item.text} />
              ))}
            </ul>
          </div>
        </article>

        {/* END OF WEB DEVELOPMENT*/}

        <article className="service">
          <div className="service_head">
            <h3>Business Consulting</h3>
            <ul className="service_list">
              {business.map((item) => (
                <ListItem id={item.id} text={item.text} />
              ))}
            </ul>
          </div>
        </article>

        {/* END OF BUSINESS CONSULTING*/}
      </div>
    </section>
  );
}
