import { useEffect } from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.svg';
import { Navigation } from './Navigation';
import { mediaQuery } from '../../helpers/breakpoints';

const Container = styled.header`
  background: #a1988f;
  width: 100%;
  position: fixed;
  padding: 1.6rem;
  top: 0px;
  transition: top 0.3s;
  z-index: 10;
  box-shadow: 0 1.2rem 3rem rgba(0, 0, 0, 0.5);

  ${mediaQuery.lg`
    padding: 1.6rem 8rem;
  `}
`;

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${mediaQuery.lg`
    justify-content: center;
    max-width: 144rem;
    align-items: flex-start;
  `}
`;

const Logo = styled.img`
  width: 8rem;
  height: 8rem;
  flex: 0 0 auto;

  ${mediaQuery.lg`
    width: 10rem;
    height: 10rem;
  `}
`;

export const Header = () => {
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
        <Logo src={logo} />
        <Navigation />
      </Wrapper>
    </Container>
  );
};
