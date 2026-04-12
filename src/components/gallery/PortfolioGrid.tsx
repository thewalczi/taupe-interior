import { Dispatch, FC, SetStateAction, useMemo } from 'react';
import styles from '../../sections/portfolio/portfolio.module.scss';
import { PortfolioType, Project } from '../../hooks/useContentful';

interface PortfolioGridProps {
  title: PortfolioType;
  items: Project[];
  setActiveProject: Dispatch<SetStateAction<Project | null>>;
}

export const PortfolioGrid: FC<PortfolioGridProps> = ({ title, items, setActiveProject }) => {
  const getTitle = useMemo(() => (title === 'project' ? 'Projekty' : 'Realizacje'), [title]);

  return (
    <div className={styles.grid} key={'grid'}>
      <h3>{getTitle}</h3>
      {items?.map((project) => (
        <div
          className={styles.item}
          key={`${project.id}_${project.title}`}
          onClick={() => setActiveProject(project)}
          style={{ backgroundImage: `url(${project.images[0].fields.file?.url})` }}
        >
          <span>{project.title}</span>
        </div>
      ))}
    </div>
  );
};
