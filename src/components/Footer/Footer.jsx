import WaveFooter from "../..//img/wave-footer.svg";
import { FaPaperPlane, FaPhoneSquareAlt } from "react-icons/fa";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <img src={WaveFooter} alt="footer wave" className="footer__wave" />
      <footer className="contactame" id="contactame">
        <h1 className="heading">Contactame</h1>
        <div className="contactame__grid">
          <div className="contactame__left">
            <div className="contactame__links">
              <a href="https://github.com/EnriqueOrtiz95">
                <AiFillGithub className="icons" />
              </a>
              <a href="https://www.linkedin.com/in/enriqueortizlo/">
                <AiFillLinkedin className="icons" />
              </a>
            </div>
            <a href="EnriqueOrtiz-CV.pdf" download className="btn btn2">
              Descargar CV
            </a>
          </div>
          <div className="contactame__right">
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              id="formulario"
            >
              <input
                type="text"
                name="Name"
                placeholder="Tu nombre.."
                required
              />
              <input
                type="email"
                name="Email"
                placeholder="Tu correo.."
                required
              />
              <textarea
                name="Message"
                rows="6"
                placeholder="Tu mensaje"
              ></textarea>
              <div data-netlify-recaptcha="true"></div>
              <button type="submit" className="btn btn2">
                Enviar
              </button>
            </form>
          </div>
        </div>
        <hr />
        <p className="copyright">
          &copy;{" "}
          <span>Todos los derechos reservados {new Date().getFullYear()}</span>{" "}
          | Enrique Ortiz{" "}
        </p>
      </footer>
    </>
  );
};

export default Footer;
