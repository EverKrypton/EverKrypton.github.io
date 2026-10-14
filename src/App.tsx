import Background from "./components/Background";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Showcase from "./components/Showcase";
import Capabilities from "./components/Capabilities";
import Process from "./components/Process";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#work">
        Skip to work
      </a>
      <Background />
      <Nav />
      <main>
        <Hero />
        <div className="container">
          <div className="rule" />
        </div>
        <Showcase />
        <div className="container">
          <div className="rule" />
        </div>
        <Capabilities />
        <Process />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
