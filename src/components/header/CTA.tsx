import React from "react";
export default function CTA() {
  const contact: string = "#contact";

  return (
    <div className="cta">
      <a href={contact} className=" btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
}
