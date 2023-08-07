import { useState } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Image from 'next/image';
import { AiFillFileText } from 'react-icons/ai';
import { Trans, useTranslation } from 'next-i18next';

import { DEFAULT_TEXT_FONT, PAGE_TITLE_FONT } from '@/constants/fonts';
import ContactCard from '@/uikit/ContactCard';

import styles from '@/styles/InfoPage.module.scss';

export async function getStaticProps({ locale }: {locale: string}) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
        'investors',
      ])),
    },
  };
}

export default function Investors () {
  const { t } = useTranslation('investors');
  const [heroImageLoaded, setHeroImageLoaded] = useState(false);
  return (
    <>
      <Head>
        <title>To investors | Transped s.r.o.</title>
        <meta name="description" content="Member of Grain Alliance" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={DEFAULT_TEXT_FONT.className}>
        <section className={styles.hero}>
          <div className={styles.left}>
            <div className={styles.leftContent}>
              <h1 className={`${styles.title} ${PAGE_TITLE_FONT.className} fade-in`} style={{ whiteSpace: 'nowrap' }}>
                <Trans
                  t={t}
                  i18nKey="title"
                />
              </h1>
              <div className={`${styles.sideInfo} fade-in`}>
                <div className={styles.sideInfoTitle}>{t('finacialReports')}</div>
                <ul className={styles.sideInfoList}>
                  <li><a href="/docs/TRANSPED_Daňové priznanie PO 2022.pdf" download target="_blank" rel="noreferer" className={styles.docLink}><AiFillFileText size={20}/>Year 2022</a></li>
                </ul>
              </div>
            </div>
          </div>
          <Image className={`${styles.right} ${heroImageLoaded && styles.show}`} onLoad={() => { setHeroImageLoaded(true); }} src="/images/InvestorsHero.png" width={1028} height={751} alt="Image of elevators and flags" />
        </section>
        <section className={`${styles.text} ${styles.dark}`}>
          <h2 className={`${styles.title} fade-in`}>{t('cooperationTitle')}</h2>
          <div className={`${styles.container} fade-in`}>
            <Trans
              t={t}
              i18nKey="cooperationDescription"
              components={{
                root: <p/>,
                docLink: <a className={styles.docLink} href="/docs/TRANSPED_Daňové priznanie PO 2022.pdf" download target="_blank" rel="noreferer"  />,
              }}
            />
          </div>
        </section>
        <section className={styles.contacts}>
          <h2 className={`${styles.title} fade-in`}>{t('contactsTitle')}</h2>
          <p className={`${styles.container} fade-in`}>{t('contactsDescription')}</p>
          <div className={`${styles.grid} fade-in`}>
            <ContactCard dbName="Bartolomej Némethi" />
            <ContactCard dbName="Evgeniy Zaglada" />
          </div>
        </section>
      </main>
    </>
  );
}