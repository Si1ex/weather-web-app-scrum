import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import '@/styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import Loading from '@/components/Loading';
import Layout from '@/components/layout';

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router.events]);

  return (
    <SessionProvider>
      <Layout>
        {loading && <Loading />}
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}
