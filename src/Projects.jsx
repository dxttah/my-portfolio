import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import useNav from "./useNav";
import swiftwingsImg from "./img/swiftwings.png";
// import capitalwiseImg from "./img/capitalwise.png";
import trygruppImg from "./img/trygrupp.png";
import phliptechImg from "./img/phliptech.png";
import secondwalletImg from "./img/secondwallet.png";

function Projects() {
  const { navValue } = useNav(true);
  const projects = [
    {
      name: "Swiftwingsjet",
      about: "A website for private jets hire.",
      image: swiftwingsImg,
      link: "https://www.swiftwingsjet.com/",
      github: "https://github.com/dxttah",
    },
    // {
    //   name: "Capitalwise",
    //   about: "A loan management web app.",
    //   image: capitalwiseImg,
    //   link: "https://www.capitalwisepayment.com/",
    //   github: "https://github.com/dxttah",
    // },
    {
      name: "Trygrupp",
      about: "A Banking as a service platform.",
      image: trygruppImg,
      link: "https://www.trygrupp.africa/",
      github: "https://github.com/dxttah",
    },
    {
      name: "Phliptech",
      about: "A tech solutions provider.",
      image: phliptechImg,
      link: "https://www.phliptechlabs.com/",
      github: "https://github.com/dxttah",
    },
    {
      name: "SecondWallet",
      about: "Internal loan management system.",
      image: secondwalletImg,
      link: "https://www.secondwallet.ng/",
      github: "https://github.com/dxttah",
    },
  ];
  return (
    <div className="Projects">
      <Header navValue={navValue} />
      <div className="main">
        <h1 className="projects__header">Projects</h1>
        <p className="contribution">
          These are projects I've worked on or contributed to.
        </p>
        <div className="projects__container">
          {projects.map((project, index) => (
            <div key={index} className="projects__cardWrapper">
              <div>
                <h1>{project.name}</h1>
                <p>{project.about}</p>
              </div>
              <a href={project.link} target="_blank" rel="noreferrer">
                <img src={project.image} alt={`${project.name} cover img`} />
              </a>
              <div>
                <div className="projects__active">ACTIVE</div>
                <div className="projects__buttons">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    id="project__website"
                  >
                    Website
                  </a>

                  <a href={project.github} target="_blank" rel="noreferrer">
                    Github
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer navValue={navValue} />
    </div>
  );
}

export default Projects;
