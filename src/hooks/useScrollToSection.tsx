import { useCallback, useEffect } from 'react';
import { NavId } from '../components/header/navigation/Navigation';

export const useScrollToSection = () => {
  const scrollToSection = useCallback((id: NavId) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    const anchor = window.location.hash;
    const timeout = setTimeout(() => {
      const id = anchor.slice(1) as NavId;
      scrollToSection(id);
    }, 500);
    if (anchor) {
      timeout;
    }
    return () => clearTimeout(timeout);
  }, [scrollToSection]);

  return { scrollToSection };
};

export default useScrollToSection;
