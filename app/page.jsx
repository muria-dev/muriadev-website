import About from "../components/About";
import Contact from "../components/Contact";
import Acara from "../components/Event";
import Hero from "../components/Hero";
import Kegiatan from "../components/Kegiatan";

export default function Page() {
  return (
    <>
      <Hero />
      <Kegiatan />
      <About />
      <Acara />
      <Contact />
    </>
  );
}
