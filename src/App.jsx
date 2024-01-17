import Header from "./components/Header/Header";
import About from "./components/About/About";
import Projectos from "./components/Projectos/Projectos";
import Skills from "./components/Skills/Skills";
import Education from "./components/Education/Education";
import Footer from "./components/Footer/Footer";

import { useContext } from "react";
import { LanguageContext } from "./context/LanguageContext";


function App() {
  const { language, setLanguage } = useContext(LanguageContext);
  return (
    <>
      <Header />
      <About />
      <Projectos />
      <Skills />
      <Education />
      <Footer />
    </>
  );
}

export default App;
