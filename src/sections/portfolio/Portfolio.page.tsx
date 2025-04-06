import { useState } from 'react';
import styles from './portfolio.module.scss';
import projectsData from './projects.json';
import { ProjectsGrid } from '../../components/gallery/ProjectsGrid';
import { Gallery } from '../../components/gallery/Gallery';
import 'yet-another-react-lightbox/styles.css';

export interface Project {
  id: number;
  title: string;
  description: string;
  images: string[];
}

const projects = JSON.parse(JSON.stringify(projectsData)) as Project[];

export const PortfolioPage = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section className={styles.container}>
      <div className={styles.wrapper} id={'portfolio'}>
        <h2>Portfolio</h2>
        {!activeProject ? (
          <ProjectsGrid projects={projects} setActiveProject={setActiveProject} />
        ) : (
          <Gallery activeProject={activeProject} setActiveProject={setActiveProject} />
        )}
      </div>
    </section>
  );
};
