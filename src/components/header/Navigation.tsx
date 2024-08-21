import styled from 'styled-components';

interface NavItem {
  id: string;
  label: string;
}

const navItems: NavItem[] = [
  {
    id: 'home',
    label: 'Home',
  },
  {
    id: 'about',
    label: 'O mnie',
  },
  {
    id: 'projects',
    label: 'Projekty',
  },
  {
    id: 'contact',
    label: 'Kontakt',
  },
];

export const Navigation = () => {
  const NavList = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
    flex: 1 1 50%;
    display: flex;
    justify-content: flex-end;
    gap: 0.8rem;
  `;

  const NavItem = styled.li`
    color: white;
    font-size: 2.4rem;
    font-weight: 400;
    padding: 0.8rem 1.6rem;
    line-height: 2.4rem;
    transition: color 0.2s;

    &:hover {
      color: #b6c7aa;
      cursor: pointer;
    }
  `;

  return (
    <NavList>
      {navItems.map((item: NavItem, i: number) => (
        <NavItem key={`${item.id}_${i}`}>{item.label}</NavItem>
      ))}
    </NavList>
  );
};
