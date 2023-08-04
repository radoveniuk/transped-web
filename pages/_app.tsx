import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

import Footer from '@/uikit/Footer';
import Header from '@/uikit/Header';

import '@/styles/globals.scss';
import 'react-loading-skeleton/dist/skeleton.css';

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    function fadeInOnScroll() {
      const elements = document.querySelectorAll('.fade-in');
      const windowHeight = window.innerHeight;

      elements.forEach(element => {
        const position = element.getBoundingClientRect().top;

        if (position < windowHeight - 100) {
          element.classList.add('show');
        }
      });
    }

    window.addEventListener('scroll', fadeInOnScroll);

    fadeInOnScroll();
    return () => {
      window.removeEventListener('scroll', fadeInOnScroll);
    };
  }, [router.asPath]);
  return (
    <>
      <Header/>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default appWithTranslation(App);