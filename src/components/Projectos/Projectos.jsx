import { AiFillGithub } from "react-icons/ai";
import Pixabay from "../../img/pixabayAPI.png";
import Mapty from "../../img/mapty.png";
import Bankist from "../../img/bankistApp.png";
import Citas from "../../img/citas-react.png";
import PIUGRS from "../../img/piugrs.png";
import { Fade } from "react-awesome-reveal";

const Projectos = () => {
  return (
    <main className="proyectos" id="proyectos">
      <h1 className="heading">Proyectos</h1>
      <Fade duration={2000} distance="200px" delay={500} left>
        <div className="proyecto__card">
          <a href="https://piugrs.vercel.app/" className="proyecto__progress">
            <img src={PIUGRS} alt="piugrs img" className="blur" />
            <p className="proyecto__progress-text">In Progress..</p>
          </a>
          <div>
            <div className="proyecto__description">
              <p className="proyecto__texto">
                Proyecto <span className="text-orange">FullStack</span> del
                listado de los mejores
                <span className="text-indigo"> Scores</span> de los jugadores de
                Pump It Up, esto en base a imagenes que se suben a la plataforma
                y se utilizan las herramientas mas sofisticadas de
                reconocimiento de imagenes para obtener los mejores resultados.
              </p>
              <div className="proyecto__madein">
                <h3 className="text-center text-coffee">En Desarrollo en:</h3>
                <p className="mt-2">
                  <span className="text-pink">Frontend</span> - React/NextJS
                </p>
                <p className="mt-2">
                  <span className="text-pink">Database </span> - MySQL
                </p>
                <p className="mt-2">
                  <span className="text-pink">Cloud</span> <br/>AWS
                  Cognito/RDS/S3/SES <br/>API Gateway/Cloudfront
                </p>

                <p className="mt-2">
                  <span className="text-pink">Backend</span> <br/>
                  Python/SQLAlchemy <br/> Chalice/Tesseract
                </p>
              </div>
            </div>
            <div className="proyecto__links">
              <a href="https://piugrs.vercel.app/" className="proyecto__link">
                Demo
              </a>
              <a
                href="https://github.com/EnriqueOrtiz95/PIUGRS"
                className="proyecto__link"
              >
                Github <AiFillGithub />
              </a>
            </div>
          </div>
        </div>
      </Fade>

      <Fade duration={2000} distance="200px" delay={500} left>
        <div className="proyecto__card">
          <a href="https://citasreact-vite.netlify.app/">
            <img src={Citas} alt="citas-react img" />
          </a>
          <div>
            <div className="proyecto__description">
              <p className="proyecto__texto">
                Seguimiento pacientes de
                <span className="text-indigo"> Veterinaria</span> donde se
                administran las mascotas de clientes.
              </p>
              <p className="proyecto__madein">
                Realizada en: <br />
                <br /> <span className="bold">HTML, CSS, React</span>
              </p>
            </div>
            <div className="proyecto__links">
              <a
                href="https://citasreact-vite.netlify.app/"
                className="proyecto__link"
              >
                Demo
              </a>
              <a
                href="https://github.com/EnriqueOrtiz95/citas-react-vite"
                className="proyecto__link"
              >
                Github <AiFillGithub />
              </a>
            </div>
          </div>
        </div>
      </Fade>
      <Fade duration={2000} distance="200px" delay={500} left>
        <div className="proyecto__card">
          <a href="https://pixabayapigenerator.netlify.app/">
            <img src={Pixabay} alt="pixabay app img" />
          </a>
          <div>
            <div className="proyecto__description">
              <p className="proyecto__texto">
                <span className="text-orange">REST API</span> de Pixabay para
                buscar imagenes <span className="text-blue">ordenadas</span> por
                me gusta y vistas. <br />
                <br /> Realizada en: <br />
                <br /> <span className="bold">HTML | CSS | JS | REST API</span>
              </p>
            </div>
            <div className="proyecto__links">
              <a
                href="https://pixabayapigenerator.netlify.app/"
                className="proyecto__link"
              >
                Demo
              </a>
              <a
                href="https://github.com/EnriqueOrtiz95/APImagesGenerator"
                className="proyecto__link"
              >
                Github <AiFillGithub />
              </a>
            </div>
          </div>
        </div>
      </Fade>
      <Fade duration={2000} distance="200px" delay={500} left>
        <div className="proyecto__card">
          <a href="https://maptyapi.netlify.app/">
            <img src={Mapty} alt="mapty app" />
          </a>
          <div>
            <div className="proyecto__description">
              <p className="proyecto__texto">
                <span className="text-green">API</span> que permite al usuario
                indicar una ubicación en la cual realizar una actividad ya sea
                correr o hacer ciclismo.
                <br /> Realizada en: <br />
                <br />{" "}
                <span className="bold">
                  HTML | CSS | JS | REST API | Leaflet JS
                </span>
              </p>
            </div>
            <div className="proyecto__links">
              <a
                href="https://maptyapi.netlify.app/"
                className="proyecto__link"
              >
                Demo
              </a>
              <a
                href="https://github.com/EnriqueOrtiz95/Mapty"
                className="proyecto__link"
              >
                Github <AiFillGithub />
              </a>
            </div>
          </div>
        </div>
      </Fade>
      <Fade duration={2000} distance="200px" delay={500} left>
        <div className="proyecto__card">
          <a href="https://bankistappl.netlify.app/">
            <img src={Bankist} alt="bankist app img" />
          </a>
          <div>
            <div className="proyecto__description">
              <p className="proyecto__texto">
                Simulador de una{" "}
                <span className="text-pink">cuenta bancaria</span> donde se
                almacenan los movimientos de dicho usuario.
              </p>
              <p className="proyecto__madein">
                Realizada en: <br />
                <br /> <span className="bold">HTML, CSS, JS</span>
              </p>
            </div>
            <div className="proyecto__links">
              <a
                href="https://bankistappl.netlify.app/"
                className="proyecto__link"
              >
                Demo
              </a>
              <a
                href="https://github.com/EnriqueOrtiz95/bankistApp"
                className="proyecto__link"
              >
                Github <AiFillGithub />
              </a>
            </div>
          </div>
        </div>
      </Fade>
    </main>
  );
};

export default Projectos;
