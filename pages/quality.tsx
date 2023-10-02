import { useState } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Image from 'next/image';
import { AiFillFileText } from 'react-icons/ai';
import { Trans, useTranslation } from 'next-i18next';

import { DEFAULT_TEXT_FONT, PAGE_TITLE_FONT } from '@/constants/fonts';
import ContactCard from '@/uikit/ContactCard';
import ScrollDown from '@/uikit/ScrollDown';

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
  const { t } = useTranslation('quality');
  const [heroImageLoaded, setHeroImageLoaded] = useState(false);
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
              <h1 className={`${styles.title} ${PAGE_TITLE_FONT.className} fade-in`}>{t('title')}</h1>
              <div className={`${styles.sideInfo} fade-in`}>
                <div className={styles.sideInfoTitle}>{t('certs')}:</div>
                <ul className={styles.sideInfoList}>
                  <li><a href="/docs/TRANSPED EU-ISCC-Cert-PL214-41008272 UNTIL 301023.pdf" download target="_blank" rel="noreferer" className={styles.docLink}><AiFillFileText size={20}/>ISCC</a></li>
                  <li><a href="/docs/Cert. GMP+ 2020 TR, ST 2023.pdf" download target="_blank" rel="noreferer" className={styles.docLink}><AiFillFileText size={20}/>GMP+</a></li>
                  <li><a href="/docs/TRANSPED Europe Soya_Certificate 2023 UNTIL 3112224.pdf" download target="_blank" rel="noreferer" className={styles.docLink}><AiFillFileText size={20}/>&quot;Europe Soy&quot;</a></li>
                  <li><a href="/docs/TRANSPED SLOVAK UKSUP REGISTRATION UNTIL 070927.pdf" download target="_blank" rel="noreferer" className={styles.docLink}><AiFillFileText size={20}/>UKSUP</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className={`${styles.right} fade-in`} id={styles.QualityHeroImage} />
          <ScrollDown />
        </section>
        <section className={`${styles.text} dark`}>
          <h2 className={styles.title}>{t('warrantiesTitle')}</h2>
          <div className={styles.container}>
            <p className={`${styles.container} fade-in`}>
              <Trans
                t={t}
                i18nKey="warrantiesDescription"
              />
            </p>
            <div className={styles.images}>
              <Image alt="Harvest" src="/images/harvest2.webp" width={945} height={531} />
            </div>
          </div>
        </section>
        <section className={`${styles.contacts}`}>
          <h2 className={`${styles.title} fade-in`}>{t('contactsTitle')}</h2>
          <div className={`${styles.grid} fade-in`}>
            <ContactCard dbName="Bartolomej Némethi" />
            <ContactCard dbName="Yaroslav Krylov" />
          </div>
        </section>
      </main>
    </>
  );
}