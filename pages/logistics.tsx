import { useState } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Image from 'next/image';
import { Trans, useTranslation } from 'next-i18next';
import Link from 'next/link';

import Button from '@/uikit/Button';
import ContactCard from '@/uikit/ContactCard';
import { DEFAULT_TEXT_FONT, PAGE_TITLE_FONT } from '@/constants/fonts';

import styles from '@/styles/InfoPage.module.scss';

export async function getStaticProps({ locale }: {locale: string}) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
        'logistics',
      ])),
    },
  };
}

export default function Logistics () {
  const { t } = useTranslation('logistics');
  const [heroImageLoaded, setHeroImageLoaded] = useState(false);
  return (
    <>
      <Head>
        <title>Logistics | Transped s.r.o.</title>
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
                <div className={styles.sideInfoTitle}>{t('additionalServices')}</div>
                <Trans
                  t={t}
                  i18nKey="additionalServicesList"
                  components={{
                    ul: <ul className={styles.sideInfoList} />,
                    li: <li />,
                  }}
                />
              </div>
              <Link href="/contacts" className="fade-in">
                <Button className="mt-10">{t('orderBtn')}</Button>
              </Link>
            </div>
          </div>
          <Image className={`${styles.right} ${heroImageLoaded && styles.show}`} onLoad={() => { setHeroImageLoaded(true); }} src="/images/LogisticsHero.png" width={945} height={531} alt="Grain" />
        </section>
        <section className={`${styles.dark} ${styles.text}`}>
          <h2 className={`${styles.title} fade-in`}>{t('transportVariantsTitle')}</h2>
          <div className={styles.container}>
            <div className={styles.images}>
              <Image alt="Railway" src="/images/vagon.png" width={503} height={308} />
              <Image alt="Auto" src="/images/car.png" width={498} height={280}/>
            </div>
            <div className={`${styles.container} fade-in`}>
              <div>
                <Trans
                  t={t}
                  i18nKey="transportVariantsDescription"
                />
                <div className="mt-20">
                  <Link href="/quality">
                    <Button variant="outlined">{t('certs')}</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.contacts}`}>
          <h2 className={`${styles.title} fade-in`}>{t('contactsTitle')}</h2>
          <p className={`${styles.container} fade-in`}>{t('contactsDescription')}</p>
          <div className={`${styles.grid} fade-in`}>
            <ContactCard dbName="Bartolomej Némethi" />
            <ContactCard dbName="Alexander Boda"/>
          </div>
        </section>
      </main>
    </>
  );
}