import styled from 'styled-components';
import { Header } from './components/header/Header';
import { HomePage } from './sections/Hero/Hero.page';
import { mediaQuery } from './helpers/breakpoints';
import { PortfolioPage } from './sections/Portfolio.page';

const CSSVariables = styled.div`
  --color-primary: #a1988f;
  --color-secondary: #b6c7aa;
  --headerPaddingVertical: 1.6rem;
  --headerPaddingHorizontal: 1.6rem;
  --headerLogoSize: 8rem;
  ${mediaQuery.lg`
    --headerPaddingHorizontal: 8rem;
    --headerLogoSize: 10rem;
  `}
`;

function App() {
  return (
    <CSSVariables>
      <Header />
      <HomePage />
      {/* <PortfolioPage /> */}
      <div style={{ width: '100%', height: '800px', backgroundColor: '#efefef' }}>section2</div>
      <div style={{ width: '100%', height: '800px', backgroundColor: 'lightblue' }}>section2</div>
    </CSSVariables>
  );
}

export default App;
