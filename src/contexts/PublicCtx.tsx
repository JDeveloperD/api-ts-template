import { createContext, FC, ReactNode } from 'react';
import { ThemeProvider as StyledThemeProvide } from 'styled-components';
import { PublicThemeCtxInterface } from './publicCtx';
import { THEME_LIGHT } from '@styles';

export const defaultState:PublicThemeCtxInterface = {
  nav: { isOpen: false }
};

export const PublicThemeCtx = createContext<Partial<PublicThemeCtxInterface>>({});

export const PublicThemeProvider:FC<{children: ReactNode}> = ({ children }) => {
  return (
    <PublicThemeCtx.Provider value={{}}>
      <StyledThemeProvide theme={THEME_LIGHT}>
        {children}
      </StyledThemeProvide>
    </PublicThemeCtx.Provider>
  );
};
