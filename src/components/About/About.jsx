import { BsCodeSlash, BsCalendar2 } from "react-icons/bs";
import { IoIosFlash } from "react-icons/io";
import Programmer from "../../img/programmer.png";
import {Fade} from "react-reveal/";

const About = () => {
  return (
    <section className="acerca" id="acerca">
      <h1 className="heading">
        Acerca de <span className="text-orange">Enrique</span>
      </h1>
      <BsCodeSlash className="icons" />
      <Fade duration={2000} distance="300px" delay={300} left>
        <div className="acerca__grid">
          <div className="acerca__imagen">
            <img src={Programmer} alt="acerca imagen" />
          </div>
          <div className="acerca__contenido">
            <Fade duration={2000} distance="300px" delay={300} left>
              <div>
                <BsCodeSlash className="icons" />
                <p className="acerca__texto">
                  Soy una persona{" "}
                  <span className="acerca__texto--pink">
                    autodidacta, Desarrollador Jr. con 1 año de experiencia
                  </span>{" "}
                  apasionado por el área de las IT, actualmente me enfoco en el
                  área del Desarrollo Web con el deseo de aprender y mejorar día
                  a día mis habilidades en este maravilloso mundo del Desarrollo
                  de Software
                </p>
              </div>
            </Fade>
            <Fade duration={2000} distance="300px" delay={300} left>
              <div>
                <IoIosFlash className="icons" />
                <p className="acerca__texto">
                  Me considero una persona muy perseverante cuando quiero lograr
                  mis objetivos, y la Tecnología es uno de ellos.
                </p>
              </div>
            </Fade>
            <Fade duration={2000} distance="300px" delay={300} left>
              <div>
                <BsCalendar2 className="icons" />
                <p className="acerca__texto">
                  Trabajo ya sea en <b>equipo o independiente</b>.
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </Fade>

      <div className="acerca__honor">
        <Fade duration={2000} delay={100} left>
          <p className="acerca__texto--honor">
            {" "}
            &lt;<span>Alejandro</span>&gt;Si puedes imaginarlo puedes
            programarlo&lt;&#47;<span>Alejandro</span>&gt;
          </p>
        </Fade>
      </div>
    </section>
  );
};

export default About;
