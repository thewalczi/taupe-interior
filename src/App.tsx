import { Header } from './components/header/Header';
import { HeroPage } from './sections/Hero/Hero.page';
import { PortfolioPage } from './sections/Portfolio/Portfolio.page';
import { AboutPage } from './sections/About/About.page';
import { ContactPage } from './sections/Contact/Contact.page';

function App() {
  return (
    <>
      <Header />
      <HeroPage />
      <AboutPage />
      <PortfolioPage />
      <ContactPage />
    </>
  );
}

export default App;
