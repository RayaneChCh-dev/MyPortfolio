import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Technologie from "@/components/Technologie";
import Experience from "@/components/Experience";
import Project from "@/components/Project";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Technologie />
      <Experience />
      <Project />
    </>
  );
}
