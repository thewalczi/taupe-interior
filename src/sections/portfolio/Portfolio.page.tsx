import { useEffect, useMemo, useState } from 'react';
import styles from './portfolio.module.scss';
import { PortfolioGrid } from '../../components/gallery/PortfolioGrid';
import { Gallery } from '../../components/gallery/Gallery';
import 'yet-another-react-lightbox/styles.css';
import useContentful, { Project } from '../../hooks/useContentful';

export const PortfolioPage = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [portfolioData, setPortfolioData] = useState<Project[]>([]);

  const { getPortfolio } = useContentful();

  const portfolio = useMemo(() => {
    return portfolioData.reduce(
      (acc: { projects: Project[]; realizations: Project[] }, curr) => {
        if (curr.type === 'project') {
          acc.projects.push(curr);
        } else {
          acc.realizations.push(curr);
        }
        return acc;
      },
      { projects: [], realizations: [] },
    );
  }, [portfolioData]);

  useEffect(() => {
    (async () => {
      const portfolio = await getPortfolio();
      setPortfolioData(portfolio);
    })();
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.wrapper} id={'portfolio'}>
        <h2>Portfolio</h2>
        <div className={styles.content}>
          {!activeProject ? (
            <>
              <PortfolioGrid title={'project'} items={portfolio.projects} setActiveProject={setActiveProject} />
              <PortfolioGrid title={'realization'} items={portfolio.realizations} setActiveProject={setActiveProject} />
            </>
          ) : (
            <Gallery activeProject={activeProject} setActiveProject={setActiveProject} />
          )}
        </div>
      </div>
    </section>
  );
};
