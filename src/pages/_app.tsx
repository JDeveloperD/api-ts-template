import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, THEME_LIGHT } from '@styles';
import { PageLayout } from '@layouts';
import { useRouterChange } from '@hooks/useRouterChange';

function MyApp({ Component, pageProps }: AppProps) {
  const { loading } = useRouterChange();

  return (
    <ThemeProvider theme={THEME_LIGHT}>
      <GlobalStyles />
      {loading && (
        <h1>CARGANDO...</h1>
      )}
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </ThemeProvider>
  );
}

export default MyApp;
