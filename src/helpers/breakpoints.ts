import { CSSProperties } from 'react';
import { css } from 'styled-components';

export const breakpointStep: Record<string, number> = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

export const breakpoints = (
  cssProp: keyof CSSProperties,
  values: Record<keyof typeof breakpointStep, string>[],
  mediaQueryType: string = 'min-width',
) => {
  const breakpointProps = values.reduce((mediaQueries, value) => {
    const [screenBreakpoint, cssPropBreakpoint] = Object.entries(value)[0];
    return (mediaQueries += `
      @media screen and (${mediaQueryType}: ${breakpointStep[screenBreakpoint]}px) {
        ${cssProp}: ${cssPropBreakpoint};}`);
  }, '');
  return css`
    ${breakpointProps}
  `;
};

export const mediaQuery = {
  sm: (style: TemplateStringsArray) => css`
    @media screen and (min-width: ${breakpointStep.sm}px) {
      ${style}
    }
  `,
  md: (style: TemplateStringsArray) => css`
    @media screen and (min-width: ${breakpointStep.md}px) {
      ${style}
    }
  `,
  lg: (style: TemplateStringsArray) => css`
    @media screen and (min-width: ${breakpointStep.lg}px) {
      ${style}
    }
  `,
  xl: (style: TemplateStringsArray) => css`
    @media screen and (min-width: ${breakpointStep.xl}px) {
      ${style}
    }
  `,
};
