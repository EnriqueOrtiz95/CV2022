import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import EnriqueOrtizCV from "../../EnriqueOrtiz-CV.pdf";
import Developer from "../../img/developer.png";
import Logo from "../../img/dev_logo.png";
import LogoBlack from "../../img/dev_logo_black.png";
import { FaBars } from "react-icons/fa";
import { useState, useEffect } from "react";
import links from "./data_header";
import {Fade } from "react-reveal";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", hideMenu);

    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  }, [isOpen]);

  return (
    <header className="header">
      <div className="container">
        <nav className={`${isOpen ? "nav black" : "nav"}`}>
          <div className="nav__left">
            <a href="#" className="nav__logo">
              <img src={isOpen ? LogoBlack : Logo} />
            </a>
          </div>
          <div className={`${isOpen ? "nav__right active" : "nav__right "}`}>
            {links.map((item) => {
              const { id, url, text } = item;
              return (
                <a key={id} href={url}>
                  {text}
                </a>
              );
            })}
          </div>
          <div className="nav__right">
            <a href="https://github.com/EnriqueOrtiz95">
              <AiFillGithub className="icons" />
            </a>
            <a href="https://www.linkedin.com/in/enriqueortizlo/">
              <AiFillLinkedin className="icons" />
            </a>
          </div>
          <FaBars
            className={`${
              isOpen && window.innerWidth < 768 ? "fa-bars fa-xmark" : "fa-bars"
            }`}
            onClick={() => setIsOpen(!isOpen)}
          />
        </nav>

        <div className="header__description">
          <div className="header__text">
            <p>
              Hola, soy <b>Enrique Ortiz</b> <br />{" "}
              <span>Full-Stack Developer</span>
            </p>
            <Fade delay={400} duration={2500} distance="150px" bottom>
              <a
                href={EnriqueOrtizCV}
                download
                className="btn btn2"
              >
                Descargar CV
              </a>
            </Fade>
          </div>

          <div className="header__img">
            <Fade delay={400} duration={2500} distance="250px" right>
              <img src={Developer} alt="developer" />
            </Fade>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
