import { Header, Footer } from '@components/block';
import React, { FC } from 'react';
import { MainPublic } from './layouts.styled';
import { domAnimation, LazyMotion, m } from 'framer-motion';

type PageProps = {
  children: React.ReactNode
}

const PAGE_TRANSITION = {
  duration: 0.5,
  ease: [0.83, 0, 0.17, 1]
};

const animations = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: PAGE_TRANSITION.duration,
      ease: PAGE_TRANSITION.ease
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: PAGE_TRANSITION.duration,
      delay: PAGE_TRANSITION.duration,
      ease: PAGE_TRANSITION.ease
    }
  }
};

const PageLayout: FC<PageProps> = ({ children }) => {
  return (
    <>
      <Header />
      <LazyMotion features={domAnimation}>
        <m.div
        variants={animations}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 1 }}
        >
          <MainPublic>
            {children}
          </MainPublic>
        </m.div>
      </LazyMotion>
      <Footer />
    </>

  );
};

export default PageLayout;
