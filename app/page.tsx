import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Technologies from "@/components/Technologie";
import Experience from "@/components/Experience";
import Project from "@/components/Project";
import Contact from "@/components/Contact";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Technologies />
      <Experience />
      <Project />
      <Contact />
    </>
  );
}
