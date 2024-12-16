import styled from 'styled-components';
import { Header } from './components/header/Header';
import { HeroPage } from './sections/Hero/Hero.page';
import { mediaQuery } from './helpers/breakpoints';
import { PortfolioPage } from './sections/Portfolio.page';
import { AboutPage } from './sections/About/About.page';

function App() {
  return (
    <>
      <Header />
      <HeroPage />
      <AboutPage />
      {/* <PortfolioPage /> */}
      <div style={{ width: '100%', height: '800px', backgroundColor: '#efefef' }}>section2</div>
      <div style={{ width: '100%', height: '800px', backgroundColor: 'lightblue' }}>section2</div>
    </>
  );
}

export default App;
