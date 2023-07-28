import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';

import styles from '@/styles/Investors.module.scss';
import Image from 'next/image';
import { Montserrat, Montserrat_Alternates } from 'next/font/google';
import Button from '@/uikit/Button/Button';

const pageTitleFont = Montserrat_Alternates({
  subsets: ['latin', 'cyrillic'],
  weight: '600',
});

const textFont = Montserrat({
  subsets: ['latin', 'cyrillic'],
  weight: '500',
});

export async function getStaticProps({ locale }: {locale: string}) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
        'products',
      ])),
    },
  };
}

export default function Products () {
  return (
    <>
      <Head>
        <title>Products | Transped s.r.o.</title>
        <meta name="description" content="Member of Grain Alliance" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={textFont.className}>
        <section className={styles.hero}>
          <div className={styles.left}>
            <div className={styles.leftContent}>
              <h1 className={`${styles.title} ${pageTitleFont.className}`}>Продукти та торгівля</h1>
              <Button>Зв&apos;язатися з нами</Button>
            </div>
          </div>
          <Image src="/images/ProductsHero.png" className={styles.right} width={945} height={531} alt="Grain" />
        </section>
      </main>
    </>
  );
}