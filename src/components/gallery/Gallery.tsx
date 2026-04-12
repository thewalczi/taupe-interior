import { Dispatch, FC, SetStateAction, useState } from 'react';
import styles from '../../sections/portfolio/portfolio.module.scss';
import Lightbox from 'yet-another-react-lightbox';
import { Project } from '../../hooks/useContentful';

import CaretIcon from '../../utils/caret.svg';

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
          <img src={CaretIcon} alt="Go back icon" />
        </button>

        <p>{activeProject?.description}</p>
      </div>
      <div className={styles.gallery}>
        {activeProject?.images.map((image, i) => (
          <div className={styles.image_wrapper} key={`project-${activeProject.id}_${image}`}>
            <img
              src={image.fields.file?.url as string}
              alt={activeProject.title}
              onClick={() => handleOpenLightbox(i)}
            />
          </div>
        ))}
      </div>
      <Lightbox
        open={lightboxOpenIndex !== null}
        close={() => setLightboxOpenIndex(null)}
        index={lightboxOpenIndex ?? 0}
        slides={activeProject?.images.map((image) => ({ src: image.fields.file?.url as string }))}
        controller={{ closeOnBackdropClick: true }}
      />
    </div>
  );
};
