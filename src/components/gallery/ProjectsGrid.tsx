import { Dispatch, FC, SetStateAction } from 'react';
import { Project } from '../../sections/portfolio/Portfolio.page';
import styles from '../../sections/portfolio/portfolio.module.scss';

interface ProjectsGridProps {
  projects: Project[];
  setActiveProject: Dispatch<SetStateAction<Project | null>>;
}

export const ProjectsGrid: FC<ProjectsGridProps> = ({ projects, setActiveProject }) => {
  return (
    <div className={styles.grid} key={'grid'}>
      {projects.map((project) => (
        <div
          className={styles.item}
          key={`${project.id}_${project.title}`}
          onClick={() => setActiveProject(project)}
          style={{ backgroundImage: `url(${project.images[0]})` }}
        >
          <span>{project.description}</span>
        </div>
      ))}
    </div>
  );
};
