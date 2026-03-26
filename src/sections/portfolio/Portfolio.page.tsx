import { useEffect, useState } from 'react';
import styles from './portfolio.module.scss';
import projectsData from './projects.json';
import { ProjectsGrid } from '../../components/gallery/ProjectsGrid';
import { Gallery } from '../../components/gallery/Gallery';
import 'yet-another-react-lightbox/styles.css';
import useContentful, { Project } from '../../hooks/useContentful';

// const projects = JSON.parse(JSON.stringify(projectsData)) as Project[];

export const PortfolioPage = () => {
  const { getPortfolio } = useContentful();
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [portfolio, setPortfolio] = useState<Project[] | undefined>([]);

  useEffect(() => {
    (async () => {
      const portfolio = await getPortfolio();

      setPortfolio(portfolio);
    })();
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.wrapper} id={'portfolio'}>
        <h2>Portfolio</h2>
        {!activeProject ? (
          <ProjectsGrid projects={portfolio} setActiveProject={setActiveProject} />
        ) : (
          <Gallery activeProject={activeProject} setActiveProject={setActiveProject} />
        )}
      </div>
    </section>
  );
};
