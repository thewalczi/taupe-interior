import styled from 'styled-components';
import logo from '../../assets/logo.svg';
import { Navigation } from './Navigation';
import { useEffect } from 'react';

import { breakpointStep, mediaQuery } from '../../helpers/breakpoints';
import { useResize } from '../../hooks/useResize';
import { Socials } from './Socials';

const Container = styled.header`
  background: #a0937d;
  width: 100%;
  position: fixed;
  padding: 1.6rem;
  top: 0px;
  transition: top 0.3s;
  z-index: 10;
  box-shadow: 0 1.2rem 3rem rgba(0, 0, 0, 0.5);

  ${mediaQuery.md`
    padding: 2.4rem 8rem;
  `}
`;

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${mediaQuery.md`
    justify-content: center;
    max-width: 144rem;
  `}
`;

const Logo = styled.img`
  width: 10rem;
  height: 10rem;
  flex: 0 0 auto;

  ${mediaQuery.md`
    width: 15rem;
    height: 15rem;
  `}
`;

export const Header = () => {
  const { width } = useResize();
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
        {width > breakpointStep.md && <Socials />}
        <Logo src={logo} />
        <Navigation />
      </Wrapper>
    </Container>
  );
};
