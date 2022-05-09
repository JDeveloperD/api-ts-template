import type { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalStyles } from '@styles';
import { AuthLayout, PageLayout } from '@layouts';
// import { useRouterChange } from '@hooks/useRouterChange';
import { PublicThemeProvider } from '@contexts/PublicCtx';
import { SessionProvider } from 'next-auth/react';
import NextNProgress from 'nextjs-progressbar';

const layouts = {
  public: PageLayout,
  auth: AuthLayout
};

function MyApp({ Component, pageProps, router }: AppProps) {
  // const { loading } = useRouterChange();
  const Layout = layouts[Component.layout || 'public'] || ((children) => (<>{children}</>));

  return (
    <SessionProvider session={pageProps.session}>
      <PublicThemeProvider>
        <GlobalStyles />
        <NextNProgress
          color="#28652a"
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
          showOnShallow={true}
        />

        {/* {loading && (
          <h1>CARGANDO...</h1>
        )} */}
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PublicThemeProvider>
    </SessionProvider>
  );
}

export default MyApp;
