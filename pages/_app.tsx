import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';

import Footer from '@/uikit/Footer';
import Header from '@/uikit/Header';

import '@/styles/globals.scss';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header/>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default appWithTranslation(App);