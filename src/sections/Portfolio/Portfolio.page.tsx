import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import styles from './portfolio.module.scss';

interface Project {
  id: number;
  title: string;
  description: string;
  images: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Project 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
    images: [
      'https://picsum.photos/200/300?random=1',
      'https://picsum.photos/200/300?random=2',
      'https://picsum.photos/200/300?random=3',
      'https://picsum.photos/200/300?random=4',
      'https://picsum.photos/200/300?random=5',
      'https://picsum.photos/200/300?random=6',
      'https://picsum.photos/200/300?random=7',
    ],
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
    images: [
      'https://picsum.photos/200/300?random=2',
      'https://picsum.photos/200/300?random=1',
      'https://picsum.photos/200/300?random=3',
      'https://picsum.photos/200/300?random=4',
      'https://picsum.photos/200/300?random=5',
      'https://picsum.photos/200/300?random=6',
      'https://picsum.photos/200/300?random=7',
    ],
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
    images: ['https://picsum.photos/200/300?random=3'],
  },
  {
    id: 4,
    title: 'Project 4',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
    images: ['https://picsum.photos/200/300?random=4'],
  },
  {
    id: 5,
    title: 'Project 5',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
    images: ['https://picsum.photos/200/300?random=5'],
  },
  // {
  //   id: '6',
  //   title: 'Project 6',
  //   description: 'Description 6',
  //   images: ['https://picsum.photos/200/300?random=6'],
  // },
];

// const itemsInRow = () => {
//   const itemsAmount = projects.length;
//   if (itemsAmount <= 4) {
//     return 2;
//   }
//   let rows = 1;
//   while (itemsAmount / rows > 4) {
//     rows++;
//   }
//   return Math.ceil(itemsAmount / rows);
// };

export const PortfolioPage = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [lightboxOpenIndex, setLightboxOpenIndex] = useState<number | null>(null);

  const handleOpenLightbox = (index: number) => {
    console.log('open lightbox', index);
    setLightboxOpenIndex(index);
  };

  return (
    <section className={styles.container}>
      <div className={styles.wrapper} id={'portfolio'}>
        {!activeProject ? (
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
        ) : (
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
              open={!!lightboxOpenIndex}
              close={() => setLightboxOpenIndex(null)}
              index={lightboxOpenIndex || 1}
              slides={activeProject?.images.map((image) => ({ src: image }))}
              controller={{ closeOnBackdropClick: true }}
            />
          </div>
        )}
      </div>
    </section>
  );
};
