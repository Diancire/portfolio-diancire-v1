import About from "@/components/About";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";


export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <Hero/>
      {/* About */}
      <About/>
      {/* Skills */}
      <Skills/>
      {/* Projects */}
      <Projects/>
    </main>
  );
}
