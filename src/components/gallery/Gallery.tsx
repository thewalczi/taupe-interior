import { Dispatch, FC, SetStateAction, useState } from 'react';
import styles from '../../sections/portfolio/portfolio.module.scss';
import { Project } from '../../sections/portfolio/Portfolio.page';
import Lightbox from 'yet-another-react-lightbox';

interface GalleryProps {
  activeProject: Project | null;
  setActiveProject: Dispatch<SetStateAction<Project | null>>;
}

export const Gallery: FC<GalleryProps> = ({ activeProject, setActiveProject }) => {
  const [lightboxOpenIndex, setLightboxOpenIndex] = useState<number | null>(null);

  const handleOpenLightbox = (index: number) => {
    setLightboxOpenIndex(index);
  };

  return (
    <div className={styles.project} key={'project'}>
      <div className={styles.header}>
        <button onClick={() => setActiveProject(null)}>
          <img src="./src/utils/caret.svg" alt="Go back icon" />
        </button>

        <p>{activeProject?.description}</p>
      </div>
      <div className={styles.gallery}>
        {activeProject?.images.map((image, i) => (
          <div className={styles.image_wrapper} key={`project-${activeProject.id}_${image}`}>
            <img src={image} alt={activeProject.title} onClick={() => handleOpenLightbox(i)} />
          </div>
        ))}
      </div>
      <Lightbox
        open={lightboxOpenIndex !== null}
        close={() => setLightboxOpenIndex(null)}
        index={lightboxOpenIndex ?? 0}
        slides={activeProject?.images.map((image) => ({ src: image }))}
        controller={{ closeOnBackdropClick: true }}
      />
    </div>
  );
};
