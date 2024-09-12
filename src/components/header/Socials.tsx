import styled from 'styled-components';
import { FacebookIcon } from '../../utils/Facebook.icon';
import { InstagramIcon } from '../../utils/Instagram.icon';
import { mediaQuery } from '../../helpers/breakpoints';

const Container = styled.div`
  display: flex;
  flex: 1 1 50%;
  text-align: center;
  gap: 1.6rem;
  justify-content: center;

  > svg {
    fill: white;
    width: 4rem;
    height: 4rem;
    transition: fill 0.2s;

    ${mediaQuery.lg`
      width: 2.4rem;
      height: 2.4rem;
      `}

    &:hover {
      fill: #b6c7aa;
      cursor: pointer;
    }
  }
`;

export const Socials = () => {
  return (
    <Container>
      <FacebookIcon />
      <InstagramIcon />
    </Container>
  );
};
