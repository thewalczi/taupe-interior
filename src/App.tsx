import styled from 'styled-components';
import { Header } from './components/header/Header';
import { HomePage } from './pages/Home/Home.page';
import { mediaQuery } from './helpers/breakpoints';
import { ProjectsPage } from './pages/Projects.page';

function App() {
  const CSSVariables = styled.div`
    --color-primary: #a1988f;
    --headerPaddingVertical: 1.6rem;
    --headerPaddingHorizontal: 1.6rem;
    --headerLogoSize: 8rem;
    ${mediaQuery.lg`
      --headerPaddingHorizontal: 8rem;
      --headerLogoSize: 10rem;
    `}
  `;
  return (
    <CSSVariables>
      <Header />
      <HomePage />
      <ProjectsPage />
      <div style={{ width: '100%', height: '800px', backgroundColor: '#efefef' }}>section2</div>
      <div style={{ width: '100%', height: '800px', backgroundColor: 'lightblue' }}>section2</div>
    </CSSVariables>
  );
}

export default App;
