import { FC, useCallback, useMemo } from 'react';
import styles from '../../sections/portfolio/portfolio.module.scss';
import { PortfolioType, Project } from '../../hooks/useContentful';
import usePortfolio from '../../store/portfolio.store';
import useScrollToSection from '../../hooks/useScrollToSection';

interface PortfolioGridProps {
  type: PortfolioType;
}

export const PortfolioGrid: FC<PortfolioGridProps> = ({ type }) => {
  const projects = usePortfolio((state) => state.projects);
  const selectActiveProject = usePortfolio((state) => state.selectActiveProject);
  const { scrollToSection } = useScrollToSection();

  const getTitle = useMemo(() => (type === 'project' ? 'Projekty' : 'Realizacje'), [type]);

  const projectsToDisplay = useMemo(() => projects.filter((project) => project.type === type), [projects]);

  const handleProjectClick = useCallback((project: Project) => {
    selectActiveProject(project);
    scrollToSection('portfolio');
  }, []);

  return (
    <>
      <h3>{getTitle}</h3>
      <div className={styles.grid} key={`grid_${type}`}>
        {projectsToDisplay?.map((project) => (
          <div
            className={styles.item}
            key={`${project.id}_${project.title}`}
            onClick={() => handleProjectClick(project)}
            style={{ backgroundImage: `url(${project.images[0].fields.file?.url})` }}
          >
            <span>{project.title}</span>
          </div>
        ))}
      </div>
    </>
  );
};
