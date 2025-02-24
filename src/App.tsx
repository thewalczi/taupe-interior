import { Header } from './components/header/Header';
import { HeroPage } from './sections/hero/Hero.page';
import { PortfolioPage } from './sections/portfolio/Portfolio.page';
import { AboutPage } from './sections/about/About.page';
import { ContactPage } from './sections/contact/Contact.page';

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
