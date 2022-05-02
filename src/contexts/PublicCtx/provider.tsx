import { FC, ReactNode, useEffect, useState } from 'react';
import { ThemeProvider as StyledThemeProvide } from 'styled-components';
import { THEME_LIGHT } from '@styles';
import { getCourses } from '@api/course';
import { Course } from '@api/resources';
import PublicThemeCtx from './context';
import { UserProvide } from '@contexts/UserCtx';

const PublicThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [courses, setCourses] = useState<Course[]>([]);

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
        <UserProvide>
          {children}
        </UserProvide>
      </StyledThemeProvide>
    </PublicThemeCtx.Provider>
  );
};

export default PublicThemeProvider;
