import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Technologie from "@/components/Technologie";
import Experience from "@/components/Experience";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Technologie />
      <Experience />
    </>
  );
}
