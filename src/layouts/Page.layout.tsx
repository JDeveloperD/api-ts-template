import { Header, Footer } from '@components/block';
import React, { FC } from 'react';

type PageProps = {
  children: React.ReactNode
}

const PageLayout: FC<PageProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default PageLayout;
