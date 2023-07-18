import type { AppProps } from 'next/app';

import Footer from '@/uikit/Footer';
import Header from '@/uikit/Header';

import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header/>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
