import { create } from 'zustand';
import { Project } from '../hooks/useContentful';

type State = {
  projects: Project[];
  activeProject: Project | null;
};

type Action = {
  setProjects: (projects: Project[]) => void;
  selectActiveProject: (project: Project) => void;
  resetActiveProject: () => void;
};

const usePortfolio = create<State & Action>((set) => ({
  projects: [],
  activeProject: null,
  setProjects: (projects) => set(() => ({ projects: projects })),
  selectActiveProject: (project) => set(() => ({ activeProject: project })),
  resetActiveProject: () => set(() => ({ activeProject: null })),
}));

export default usePortfolio;
