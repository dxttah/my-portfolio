import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import useNav from "./useNav";

function Links() {
  const { navValue } = useNav(true);
  const links = [
    {
      name: "Github",
      url: "https://github.com/dkxtah",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/titilope-chisom-onifade-7372681b2/",
    },
    {
      name: "Gmail",
      url: "mailto:titilopechisom20@gmail.com",
    },
  ];
  return (
    <div className="Links">
      <div className="main">
        <Header navValue={navValue} />
        <h1 className="Links__header">Links</h1>

        <p>You can reach me using any of the following links.</p>
        {links.map((link, index) => (
          <a
            className="bodyNavLink"
            href={link.url}
            target="_blank"
            rel="noreferrer"
          >
            <span className="linkLines"></span>
            <span className="linkLinesText">{link.name}</span>
          </a>
        ))}
      </div>
      <Footer navValue={navValue} />
    </div>
  );
}

export default Links;
