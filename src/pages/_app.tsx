import type { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalStyles } from '@styles';
import { PageLayout } from '@layouts';
import { useRouterChange } from '@hooks/useRouterChange';
import { PublicThemeProvider } from '@contexts/PublicCtx';

function MyApp({ Component, pageProps }: AppProps) {
  const { loading } = useRouterChange();

  return (
    <PublicThemeProvider>
      <GlobalStyles />
      {loading && (
        <h1>CARGANDO...</h1>
      )}
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </PublicThemeProvider>
  );
}

export default MyApp;
