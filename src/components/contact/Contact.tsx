import React, { useState } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import emails, { EmailJSResponseStatus } from "@emailjs/browser";
import contact_option from "./contact.option.json";
import { IconType } from "react-icons";

type FormState = {
  name: string;
  email: string;
  message: string;
};

type ContactType = {
  icon: IconType;
  headline: string;
  contact_option: string;
  link: string;
};

type IconComponentsType = {
  [key: string]: IconType;
  mdOut: IconType;
  bsWhat: IconType;
};

const iconComponents: IconComponentsType = {
  mdOut: MdOutlineEmail,
  bsWhat: BsWhatsapp,
  // Add more mappings here as necessary
};

function getIcon(icon: string): IconType {
  return iconComponents[icon];
}

function ContactOption({ icon, headline, contact_option, link }: ContactType) {
  return (
    <>
      <article className="contact-option">
        {icon &&
          React.createElement(icon, { className: "contact-option-icon" })}
        <h4>{headline}</h4>
        <h5>{contact_option}</h5>
        <a href={link}>Send a message</a>
      </article>
    </>
  );
}

export default function Contact() {
  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  function setSuccessMessage(response: EmailJSResponseStatus): void {
    console.log("SUCCESS!", response.status, response.text);
    alert("Email sent successfully!");
    // Clear form after successful submission
    setFormState({ name: "", email: "", message: "" });
  }

  function setFailureMessage(err: Error): void {
    console.log("FAILED...", err);
    alert("Failed to send email. Please try again.");
  }

  const handleSubmit = async (event: React.FormEvent): Promise<void> => {
    event.preventDefault();

    await emails
      .send(
        "service_c23p1l6",
        "template_3v66oxc",
        formState,
        "_-Bp9LWwQ5ZeBOvxp"
      )
      .then(
        (response: EmailJSResponseStatus): void => {
          setSuccessMessage(response);
        },
        (err: Error): void => {
          setFailureMessage(err);
        }
      );
  };

  function HeadLine() {
    return (
      <>
        <h5> Get In Touch</h5>
        <h2>Contact me</h2>
      </>
    );
  }

  return (
    <section id="contact">
      <HeadLine />
      <div className="container contact_container">
        <div className="contact_options">
          {contact_option.map((contact) => {
            const Icon: IconType = getIcon(contact.icon);
            return Icon ? (
              <ContactOption
                icon={Icon}
                headline={contact.headline}
                contact_option={contact.contact_option}
                link={contact.link}
              />
            ) : null;
          })}
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            value={formState.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formState.email}
            onChange={handleInputChange}
            required
          />
          <textarea
            name="message"
            rows={7}
            placeholder="Your Message"
            value={formState.message}
            onChange={handleInputChange}
            required
          ></textarea>
          <button type="submit" className="btn btn primary">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
