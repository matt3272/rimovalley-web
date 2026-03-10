import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Business from "./components/Business";
import About from "./components/About";
import Strip from "./components/Strip";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Marquee />
      <Business />
      <About />
      <Strip />
      <Contact />
      <Footer />
    </>
  );
}
