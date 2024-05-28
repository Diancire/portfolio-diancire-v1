import About from "@/app/[lang]/components/sections/About";
import Contact from "@/app/[lang]/components/sections/contact/Contact";
import Hero from "@/app/[lang]/components/sections/Hero";
import Projects from "@/app/[lang]/components/sections/projects/ProjectList";
import Skills from "@/app/[lang]/components/sections/Skills";
import { getDictionary } from "./dictionaries";


export default async function Home({ params }) {
  const { lang } = params;
  const dict = await getDictionary(lang);
  
  return (
    <main>
      {/* Hero Section */}
      <Hero dict={dict} />
      {/* About */}
      <About dict={dict} />
      {/* Skills */}
      <Skills dict={dict} />
      {/* Projects */}
      <Projects dict={dict} />
      {/* Contact */}
      <Contact dict={dict} />
    </main>
  );
}
