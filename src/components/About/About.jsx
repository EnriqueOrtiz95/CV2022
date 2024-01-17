import { BsCodeSlash, BsCalendar2 } from "react-icons/bs";
import { IoIosFlash } from "react-icons/io";
import Programmer from "../../img/programmer.png";
import { Fade } from "react-awesome-reveal";

import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

import { SpanishLen } from "../../utils/helpers";

const About = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <section className="acerca" id="acerca">
      <h1 className="heading">
        {language === SpanishLen ? "Acerca de" : "About"}{" "}
        <span className="text-orange">Enrique</span>
      </h1>
      <BsCodeSlash className="icons" />
      <Fade duration={2000} distance="300px" delay={300} left cascade>
        <div className="acerca__grid">
          <div className="acerca__imagen">
            <img src={Programmer} alt="acerca imagen" />
          </div>
          <div className="acerca__contenido">
            <Fade duration={2000} distance="300px" delay={300} left>
              <div>
                <BsCodeSlash className="icons" />
                {language === SpanishLen ? (
                  <>
                    <p className="acerca__texto">
                      Soy una persona{" "}
                      <span className="acerca__texto--pink">
                        autodidacta, Desarrollador de Software con mas de 1 año
                        de experiencia
                      </span>{" "}
                      apasionado por el área de las IT, actualmente me enfoco en
                      el área del Desarrollo Web en la cual he trabajado como
                      desarrollador BackEnd, FrontEnd y FullStack Developer.
                      Siempre en busqueda en nuevos retos que permitan ampliar
                      mi gama de conocimiento ofreciendo software de calidad al
                      usuario final.
                    </p>
                  </>
                ) : (
                  <>
                    <p className="acerca__texto">
                      I'm a{" "}
                      <span className="acerca__texto--pink">
                        self-taught, Software Developer with +1 YOE
                      </span>{" "}
                      Passionate with the IT area, currently focused on Web
                      Development where i've been working as BackEnd, FrontEnd
                      and FullStack Developer always seeking for the best
                      oportunities to growth up and find new/optimal digital
                      solutions
                    </p>
                  </>
                )}
              </div>
            </Fade>
            <Fade duration={2000} distance="300px" delay={300} left>
              <div>
                <IoIosFlash className="icons" />
                <p className="acerca__texto">
                  {language === SpanishLen
                    ? "Me considero una persona muy perseverante cuando quiero lograr mis objetivos, y la Tecnología es uno de ellos"
                    : "I consider myself a very persevering person when I want to achieve my goals, and the Technology and satisfaction of the final user is one of them."}
                </p>
              </div>
            </Fade>
            <Fade duration={2000} distance="300px" delay={300} left>
              <div>
                <BsCalendar2 className="icons" />
                {language === SpanishLen ? (
                  <p className="acerca__texto">
                    Trabajo ya sea en <b>equipo o independiente</b>.
                  </p>
                ) : (
                  <p className="acerca__texto">
                    I like to work in a <b>team or independently</b>.
                  </p>
                )}
              </div>
            </Fade>
          </div>
        </div>
      </Fade>
      <div className="acerca__honor">
        <Fade duration={2000} delay={100} left>
          {language === SpanishLen ? (
            <p className="acerca__texto--honor">
              {" "}
              &lt;<span>Alejandro</span>&gt;Si puedes imaginarlo puedes
              programarlo&lt;&#47;<span>Alejandro</span>&gt;
            </p>
          ) : (
            <p className="acerca__texto--honor">
              {" "}
              &lt;<span>Alejandro</span>&gt;if you can imagine you can program
              it&lt;&#47;<span>Alejandro</span>&gt;
            </p>
          )}
        </Fade>
      </div>
    </section>
  );
};

export default About;
