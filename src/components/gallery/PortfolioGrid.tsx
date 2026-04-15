import { FC, useMemo } from 'react';
import styles from '../../sections/portfolio/portfolio.module.scss';
import { PortfolioType } from '../../hooks/useContentful';
import usePortfolio from '../../store/portfolio.store';

interface PortfolioGridProps {
  type: PortfolioType;
}

export const PortfolioGrid: FC<PortfolioGridProps> = ({ type }) => {
  const projects = usePortfolio((state) => state.projects);
  const selectActiveProject = usePortfolio((state) => state.selectActiveProject);

  const getTitle = useMemo(() => (type === 'project' ? 'Projekty' : 'Realizacje'), [type]);

  const projectsToDisplay = useMemo(() => projects.filter((project) => project.type === type), [projects]);

  return (
    <div className={styles.grid} key={'grid'}>
      <h3>{getTitle}</h3>
      {projectsToDisplay?.map((project) => (
        <div
          className={styles.item}
          key={`${project.id}_${project.title}`}
          onClick={() => selectActiveProject(project)}
          style={{ backgroundImage: `url(${project.images[0].fields.file?.url})` }}
        >
          <span>{project.title}</span>
        </div>
      ))}
    </div>
  );
};
