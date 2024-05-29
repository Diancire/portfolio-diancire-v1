import projectsData from '../../data/projects';
import { getDictionary } from '../dictionaries';
import dynamic from 'next/dynamic';

const ProjectDetails = dynamic(()=>import('../components/sections/projects/ProjectDetails'))

export default async function ProjectPage({ params }) {
  const { lang, project } = params;
  const dict = await getDictionary(lang);

  const projectInfo = projectsData.find(p => p.slug === project);

  return <ProjectDetails dict={dict} projectInfo={projectInfo} lang={lang} />;
}
