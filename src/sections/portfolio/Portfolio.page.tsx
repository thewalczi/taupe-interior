import { useEffect } from 'react';
import styles from './portfolio.module.scss';
import { PortfolioGrid } from '../../components/gallery/PortfolioGrid';
import { Gallery } from '../../components/gallery/Gallery';
import 'yet-another-react-lightbox/styles.css';
import useContentful from '../../hooks/useContentful';
import usePortfolio from '../../store/portfolio.store';

export const PortfolioPage = () => {
  const { getPortfolio } = useContentful();
  const setProjects = usePortfolio((state) => state.setProjects);
  const activeProject = usePortfolio((state) => state.activeProject);

  useEffect(() => {
    (async () => {
      const portfolio = await getPortfolio();
      setProjects(portfolio);
    })();
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.wrapper} id={'portfolio'}>
        <h2>Portfolio</h2>
        <div className={styles.content}>
          {!activeProject ? (
            <>
              <PortfolioGrid type={'project'} />
              <PortfolioGrid type={'realization'} />
            </>
          ) : (
            <Gallery />
          )}
        </div>
      </div>
    </section>
  );
};
