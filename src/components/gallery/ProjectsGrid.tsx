import { Dispatch, FC, SetStateAction } from 'react';
import styles from '../../sections/portfolio/portfolio.module.scss';
import { Project } from '../../hooks/useContentful';

interface ProjectsGridProps {
  projects: Project[] | undefined;
  setActiveProject: Dispatch<SetStateAction<Project | null>>;
}

export const ProjectsGrid: FC<ProjectsGridProps> = ({ projects, setActiveProject }) => {
  return (
    <div className={styles.grid} key={'grid'}>
      {projects?.map((project) => (
        <div
          className={styles.item}
          key={`${project.id}_${project.title}`}
          onClick={() => setActiveProject(project)}
          style={{ backgroundImage: `url(${project.images[0]})` }}
        >
          <span>{project.title}</span>
        </div>
      ))}
    </div>
  );
};
