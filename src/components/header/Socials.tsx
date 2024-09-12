import styled from 'styled-components';
import { FacebookIcon } from '../../utils/Facebook.icon';
import { InstagramIcon } from '../../utils/Instagram.icon';

const Container = styled.div`
  display: block;
  flex: 1 1 50%;

  > svg {
    fill: white;
    width: 4rem;
    height: 4rem;
    margin-right: 1.6rem;
    transition: fill 0.2s;

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
