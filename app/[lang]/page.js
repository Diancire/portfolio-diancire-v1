import About from "@/app/[lang]/components/About";
import Contact from "@/app/[lang]/components/Contact";
import Hero from "@/app/[lang]/components/Hero";
import Projects from "@/app/[lang]/components/Projects";
import Skills from "@/app/[lang]/components/Skills";
import { getDictionary } from "./dictionaries";


export default async function Home({ params }) {
  const { lang } = params;
  const dict = await getDictionary(lang);
  console.log("page lang", lang);
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
