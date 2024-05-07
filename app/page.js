import About from "./_components/About";
import Hero from "./_components/Hero";
import Projects from "./_components/Projects";
import Skills from "./_components/Skills";


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
