import { Fade } from "react-awesome-reveal";

const Education = () => {
  return (
    <section className="educacion" id="educacion">
      <h1 className="heading">Educación</h1>
      <Fade duration={1500} distance="150px" delay={400} cascade>
        <div className="timeline-items">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <p className="timeline-date">Ago|2022 - Presente</p>
            <div className="timeline-content">
              <h3>Adapa Group</h3>
              <p>
                Adapa Group es una empresa de desarrollo de software que se
                especializa en la creación de aplicaciones web y móviles. En
                Adapa Group, he tenido la oportunidad de trabajar en proyectos
                reales para clientes reales, lo que me ha permitido desarrollar
                habilidades de trabajo en equipo, comunicación y resolución de
                problemas, además de aprender a trabajar con metodologías ágiles
                como SCRUM.
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <p className="timeline-date">
              {""}
              2022- &infin;
            </p>
            <div className="timeline-content">
              <h3>Aprendizaje Autodidacta</h3>
              <p>
                Aprendiendo Día a Día Tecnologías que me permiten ampliar mi
                conocimiento como desarrollador y ofrecer los mejores servicios
                al mercado, actualmente estoy aprendiendo{" "}
                <span className="text-green">
                  NextJS, Typescript, MongoDB, AWS Microservices & Docker
                </span>
                .
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <p className="timeline-date">2021-2022</p>
            <div className="timeline-content">
              <h3>Udemy Courses</h3>
              <p>
                Aprendí y Reforcé Tecnologías tales como CSS, JS, Bootstrap, SQL
                con MySQL y Manejo de ORMs{" "}
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <p className="timeline-date">2016-2021</p>
            <div className="timeline-content">
              <h3>
                Ingeniería en Sistemas Computacionales <br />| Instituto
                Tecnológico de Tepic
              </h3>
              <p>
                Estudié la Carrera de Ingeniería en Sistemas Computacionales en
                el Instituto Tecnológico de Tepic donde aprendí Tecnologías
                tales como Java, POO, Estructuras de Datos, Los principios de la
                Programación Web/ Movil, así como el Lenguaje SQL y las Bases de
                Datos no relacionales tales como MongoDB, Cassandra y Neo4J.
              </p>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default Education;
