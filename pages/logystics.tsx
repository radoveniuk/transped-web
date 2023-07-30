import Button from '@/uikit/Button';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Image from 'next/image';

import styles from '@/styles/InfoPage.module.scss';
import { DEFAULT_TEXT_FONT, PAGE_TITLE_FONT } from '@/constants/fonts';

export async function getStaticProps({ locale }: {locale: string}) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
        'logystics',
      ])),
    },
  };
}

export default function Logystics () {
  return (
    <>
      <Head>
        <title>Logystics | Transped s.r.o.</title>
        <meta name="description" content="Member of Grain Alliance" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={DEFAULT_TEXT_FONT.className}>
        <section className={styles.hero}>
          <div className={styles.left}>
            <div className={styles.leftContent}>
              <h1 className={`${styles.title} ${PAGE_TITLE_FONT.className}`}>Логістика</h1>
              <Button className="mt-10">Зв&apos;язатися з нами</Button>
            </div>
          </div>
          <Image src="/images/LogysticsHero.png" className={styles.right} width={945} height={531} alt="Grain" />
        </section>
      </main>
    </>
  );
}