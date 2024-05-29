import { getDictionary } from "./dictionaries";
import dynamic from 'next/dynamic';

const Hero = dynamic(() => import('@/app/[lang]/components/sections/Hero'), { ssr: false });
const About = dynamic(() => import('@/app/[lang]/components/sections/About'), { ssr: false });
const Skills = dynamic(() => import('@/app/[lang]/components/sections/Skills'), { ssr: false });
const ProjectList = dynamic(() => import('@/app/[lang]/components/sections/projects/ProjectList'), { ssr: false });
const Contact = dynamic(() => import('@/app/[lang]/components/sections/contact/Contact'), { ssr: false });

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
      <ProjectList dict={dict} />
      {/* Contact */}
      <Contact dict={dict} lang={lang}/>
    </main>
  );
}
