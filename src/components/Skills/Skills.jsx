import WaveRev from "../../img/wave-pink_rev.svg";
import Wave from "../../img/wave-pink.svg";
import { AiOutlineCheck } from "react-icons/ai";
import { softSkills } from "./data_skills";
import { Fade } from "react-reveal";
import { AiFillGithub, AiFillHtml5 } from "react-icons/ai";
import {
  FaHeadSideCough,
  FaCss3Alt,
  FaReact,
  FaBootstrap,
  FaGitAlt,
  FaSass,
  FaAws,
  FaDocker,
  FaPython,
} from "react-icons/fa";
import { DiMongodb, DiMysql } from "react-icons/di";
import { BiDevices } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io";
import { GiJeweledChalice } from "react-icons/gi";

const Skills = () => {
  const skills = [
    {
      id: 1,
      title: "English B1+",
      icon: <FaHeadSideCough />,
    },
    {
      id: 2,
      title: "HTML5",
      icon: <AiFillHtml5 />,
    },
    {
      id: 3,
      title: "CSS3",
      icon: <FaCss3Alt />,
    },
    {
      id: 4,
      title: "JS",
      icon: <IoLogoJavascript />,
    },
    {
      id: 5,
      title: "React",
      icon: <FaReact />,
    },
    {
      id: 6,
      title: "Bootstrap",
      icon: <FaBootstrap />,
    },
    {
      id: 7,
      title: "SASS",
      icon: <FaSass />,
    },
    {
      id: 8,
      title: "Responsive Design",
      icon: <BiDevices />,
    },
    {
      id: 9,
      title: "MySQL",
      icon: <DiMysql />,
    },
    {
      id: 10,
      title: "MongoDB",
      icon: <DiMongodb />,
    },
    {
      id: 11,
      title: "Python",
      icon: <FaPython />,
    },
    {
      id: 12,
      title: "Git",
      icon: <FaGitAlt />,
    },
    {
      id: 13,
      title: "GitHub",
      icon: <AiFillGithub />,
    },
    {
      id: 14,
      title: "AWS",
      icon: <FaAws />,
    },
    {
      id: 15,
      title: "Docker",
      icon: <FaDocker />,
    },
    {
      id: 16,
      title: "Chalice",
      icon: <GiJeweledChalice />,
    },
  ];

  return (
    <>
      <img src={WaveRev} alt="wave" className="habilidades__wave" />
      <section className="habilidades" id="habilidades">
        <h1 className="heading italic">Habilidades</h1>
        <div className="habilidades__grid">
          <Fade duration={1000} distance="30px" delay={200} left>
            <h2 className="heading italic">Tecnicas</h2>
          </Fade>
          <div className="habilidades__tecnicas">
            {skills.map((skill) => {
              const { id, title, icon } = skill;
              return (
                <Fade duration={1000} distance="30px" delay={200} left key={id}>
                  <div className="habilidades__contenido">
                    {icon}
                    <p>{title}</p>
                  </div>
                </Fade>
              );
            })}
          </div>
          <Fade duration={1000} distance="30px" delay={200} left>
            <h2 className="heading italic">Blandas</h2>
          </Fade>
          <div className="habilidades__blandas">
            {softSkills.map((skill) => {
              const { id, title } = skill;
              return (
                <Fade duration={1000} distance="30px" delay={200} left>
                  <div key={id}>
                    <AiOutlineCheck className="fscheck" />
                    <p className="blandas__texto">{title}</p>
                  </div>
                </Fade>
              );
            })}
          </div>
        </div>
      </section>
      <img src={Wave} alt="wave" className="habilidades__wave-rev" />
    </>
  );
};

export default Skills;
