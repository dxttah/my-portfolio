import Header from "./Header";
import HomeBodyLink from "./HomeBodyLink";
import useNav from "./useNav";
import Typewriter from "typewriter-effect";
import homeImg from "./img/programmer.svg";

function Home() {
  const { navValue } = useNav(false);

  return (
    <div className="Home">
      <Header navValue={navValue} />
      <div className="home__picAndAbout">
        <img src={homeImg} alt="myPic" />
        <div className="home__text">
          <h1>Hello👋, I'm Onifade Titilope Chisom</h1>
          <h2 className="typewiter-effect">
            <span>Interests: </span>
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 40,
                strings: [
                  "Programming",
                  "Reading",
                  "Music",
                  "Cosmic phenomena",
                ],
              }}
            />
          </h2>
        </div>
      </div>
      <div className="home__LinksAndContactMe">
        <div>
          <HomeBodyLink to="about" text="About" />
          <HomeBodyLink to="projects" text="Projects" />
          <div className="bodyNavLink">
            <span className="linkLines"></span>
            <a
              className="linkLinesText"
              href="https://codingambivert.hashnode.dev/"
            >
              Blog
            </a>
          </div>
          <HomeBodyLink to="links" text="Links" />
        </div>

        <div className="home__contactWrapper">
          <a
            className="home__contactMe"
            href="mailto:titilopechisom20@gmail.com"
          >
            Contact Me
          </a>
          <div className="home__contactText">
            &#169; {new Date().getFullYear()} dxttah.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
