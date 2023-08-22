import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Image from 'next/image';
import { Trans, useTranslation } from 'next-i18next';

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
                    ul: <ul className={`${styles.sideInfoList} ${styles.listStyle}`} />,
                    li: <li />,
                  }}
                />
              </div>
            </div>
          </div>
          <div className={`${styles.right} fade-in`} id={styles.LogysticsHeroImage} />
        </section>
        <section className={`dark ${styles.text}`}>
          <h2 className={`${styles.title} fade-in`}>{t('transportVariantsTitle')}</h2>
          <div className={styles.container}>
            <div className={styles.images}>
              <Image alt="Railway" src="/images/vagon.png" width={503} height={308} />
              <Image alt="Auto" src="/images/car.webp" width={498} height={280}/>
            </div>
            <div className={`${styles.container} fade-in`}>
              <div>
                <Trans
                  t={t}
                  i18nKey="transportVariantsDescription"
                />
              </div>
            </div>
          </div>
          <a href="/docs/Certifikát vahy.pdf" download target="_blank" rel="noreferer">
            <Button variant="outlined">{t('certs')}</Button>
          </a>
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