import { useEffect, useMemo, MouseEvent, useState } from 'react';
import styled from 'styled-components';
import { mediaQuery } from '../helpers/breakpoints';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

interface Project {
  id: string;
  title: string;
  description: string;
  images: string[];
}

const projects: Project[] = [
  {
    id: '1',
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
    id: '2',
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
    id: '3',
    title: 'Project 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
    images: ['https://picsum.photos/200/300?random=3'],
  },
  {
    id: '4',
    title: 'Project 4',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
    images: ['https://picsum.photos/200/300?random=4'],
  },
  {
    id: '5',
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

const Wrapper = styled.section``;

const Grid = styled.div`
  flex: 0 0 100%;
  display: grid;
  gap: 3.2rem;

  opacity: 0;
  transition: opacity 0.3s linear;

  .projects-view & {
    opacity: 1;
  }

  .gallery-view & {
    display: none;
  }

  ${mediaQuery.lg`
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  `}
`;

const Container = styled.div`
  padding: 3.2rem;
  max-width: 144rem;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
`;

const Item = styled.div<{ $image: string }>`
  background-image: url(${(props) => props.$image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  min-height: 20rem;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 0.3s;
    background-color: var(--color-primary);
  }

  > span {
    color: white;
    font-size: 2rem;
    text-align: center;
    padding: 2.4rem;
    position: relative;
    opacity: 0;
    transition: opacity 0.3s;
  }

  &:hover {
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0.9;
    }
    & > span {
      opacity: 1;
    }
  }
`;

const Project = styled.div`
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.3s linear;

  .gallery-view & {
    opacity: 1;
  }

  .portfolio-view & {
    display: none;
  }
`;

export const PortfolioPage = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [lightboxOpenIndex, setLightboxOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const portfolio = document.getElementById('portfolio');
    if (activeProject) {
      portfolio?.classList.remove('projects-view');
      setTimeout(() => {
        portfolio?.classList.add('gallery-view');
      }, 300);
    } else {
      portfolio?.classList.remove('gallery-view');
      setTimeout(() => {
        portfolio?.classList.add('projects-view');
      }, 300);
    }
  }, [activeProject]);
  return (
    <Wrapper id={'portfolio'}>
      <Container>
        <Grid>
          {projects.map((project) => (
            <Item
              key={`${project.id}_${project.title}`}
              onClick={() => setActiveProject(project)}
              $image={project.images[0]}
            >
              <span>{project.description}</span>
            </Item>
          ))}
        </Grid>
        <Project>
          <p>{activeProject?.description}</p>
          {activeProject?.images.map((image, i) => (
            <img
              key={`project-${activeProject.id}_${image}`}
              src={image}
              alt={activeProject.title}
              onClick={() => setLightboxOpenIndex(i)}
            />
          ))}
          <Lightbox
            open={!!lightboxOpenIndex}
            close={() => setLightboxOpenIndex(null)}
            index={lightboxOpenIndex || 0}
            slides={activeProject?.images.map((image) => ({ src: image }))}
            controller={{ closeOnBackdropClick: true }}
          />
        </Project>
      </Container>
    </Wrapper>
  );
};
