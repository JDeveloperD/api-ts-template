import { createContext, FC, ReactNode, useEffect, useState } from 'react';
import { ThemeProvider as StyledThemeProvide } from 'styled-components';
import { PublicThemeCtxInterface } from './publicCtx';
import { THEME_LIGHT } from '@styles';
import { getCourses } from '@api/course';
import { ICourse } from '@api/resources';

export const defaultState:PublicThemeCtxInterface = {
  nav: { isOpen: false },
  courses: []
};

export const PublicThemeCtx = createContext<Partial<PublicThemeCtxInterface>>({});

export const PublicThemeProvider:FC<{children: ReactNode}> = ({ children }) => {
  const [courses, setCourses] = useState<ICourse[]>([]);
  useEffect(() => {
    getCourses()
      .then(res => {
        setCourses(res.data);
      });
  }, []);

  return (
    <PublicThemeCtx.Provider value={{
      courses
    }}>
      <StyledThemeProvide theme={THEME_LIGHT}>
        {children}
      </StyledThemeProvide>
    </PublicThemeCtx.Provider>
  );
};
