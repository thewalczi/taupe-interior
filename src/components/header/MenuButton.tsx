import { ButtonHTMLAttributes, FC } from 'react';
import styled from 'styled-components';
import { mediaQuery } from '../../helpers/breakpoints';

interface MenuButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active: boolean;
}

const Button = styled.button`
  border: none;
  background: none;
  font-size: 2rem;
  padding: 1.6rem;
  display: flex;
  gap: 1.6rem;
  cursor: pointer;
  color: white;
  transition: color 0.3s;
  margin-right: -1.6rem;

  &:hover {
    color: #b6c7aa;
  }
`;

const Icon = styled.span``;

const Bar = styled.span.attrs<{ $position: 'top' | 'middle' | 'bottom' }>(({ $position }) => ({
  $position,
}))`
  display: block;
  width: 2.4rem;
  height: 2px;
  background-color: currentColor;
  margin: 0.4rem auto;
  transition:
    transform 0.3s,
    width 0.3s,
    background-color 0.3s;

  .active & {
    ${(props) =>
      props.$position === 'top' &&
      `
      transform: rotate(45deg) translate(0.4rem, 0.4rem);
    `}
    ${(props) =>
      props.$position === 'bottom' &&
      `
      transform: rotate(-45deg) translate(0.4rem, -0.4rem);
    `}
  ${(props) =>
      props.$position === 'middle' &&
      `
      width: 0;
    `}
  }
`;

export const MenuButton: FC<MenuButtonProps> = (props: MenuButtonProps) => {
  return (
    <Button {...props} className={props.active ? 'active' : ''}>
      <Icon>
        <Bar $position="top" />
        <Bar $position="middle" />
        <Bar $position="bottom" />
      </Icon>
      MENU
    </Button>
  );
};
