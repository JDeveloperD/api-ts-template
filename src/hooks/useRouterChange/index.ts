import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';

export function useRouterChange() {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setLoading(true);
      NProgress.start();
    }; // change init
    const handleRouteChangeEnd = () => {
      setLoading(false);
      NProgress.done();
    }; // change finished

    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeEnd);
    router.events.on('routeChangeError', handleRouteChangeEnd);

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeEnd);
      router.events.off('routeChangeError', handleRouteChangeEnd);
    };
  }, []);

  return {
    loading
  };
}
