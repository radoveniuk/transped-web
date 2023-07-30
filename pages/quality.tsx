import { DEFAULT_TEXT_FONT, PAGE_TITLE_FONT } from '@/constants/fonts';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Image from 'next/image';
import { AiFillFileText } from 'react-icons/ai';

import styles from '@/styles/InfoPage.module.scss';

export async function getStaticProps({ locale }: {locale: string}) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
        'quality',
      ])),
    },
  };
}

export default function Quality () {
  return (
    <>
      <Head>
        <title>Quality | Transped s.r.o.</title>
        <meta name="description" content="Member of Grain Alliance" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={DEFAULT_TEXT_FONT.className}>
        <section className={styles.hero}>
          <div className={styles.left}>
            <div className={styles.leftContent}>
              <h1 className={`${styles.title} ${PAGE_TITLE_FONT.className}`}>Якість</h1>
              <div className={styles.docs}>
                <div className={styles.docsTitle}>Сертифікати</div>
                <ul className={styles.docsList}>
                  <li><a className={styles.docLink}><AiFillFileText size={20}/>ISCC</a></li>
                  <li><a className={styles.docLink}><AiFillFileText size={20}/>GMP+</a></li>
                  <li><a className={styles.docLink}><AiFillFileText size={20}/>&quot;Європа соя&quot;</a></li>
                  <li><a className={styles.docLink}><AiFillFileText size={20}/>UKSUP</a></li>
                </ul>
              </div>
            </div>
          </div>
          <Image src="/images/QualityHero.png" className={styles.right} width={1028} height={751} alt="Image of elevators and flags" />
        </section>
      </main>
    </>
  );
}