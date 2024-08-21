import styled from 'styled-components';
import logo from '../../assets/logo.svg';
import { Navigation } from './Navigation';
import { useEffect } from 'react';
import { FacebookIcon } from '../../utils/Facebook.icon';
import { InstagramIcon } from '../../utils/Instagram.icon';

export const Header = () => {
  const Container = styled.header`
    background: #a0937d;
    width: 100%;
    padding: 2.4rem 8rem;
    position: fixed;
    top: 0px;
    transition: top 0.3s;
  `;
  const Wrapper = styled.div`
    max-width: 144rem;
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
  `;

  const Socials = styled.div`
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

  const Logo = styled.img`
    width: 15rem;
    height: 15rem;
    flex: 0 0 auto;
  `;

  useEffect(() => {
    let prevScrollPos = window.scrollY;
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const header = document.querySelector('header');
      if (header) {
        if (prevScrollPos > currentScrollPos) {
          header.style.top = '0';
        } else {
          header.style.top = '-200px';
        }
        prevScrollPos = currentScrollPos;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container>
      <Wrapper>
        <Socials>
          <FacebookIcon />
          <InstagramIcon />
        </Socials>
        <Logo src={logo} />
        <Navigation />
      </Wrapper>
    </Container>
  );
};
