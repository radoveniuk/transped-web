import { PropsWithChildren } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import { AiFillFileText } from 'react-icons/ai';
import { Trans, useTranslation } from 'next-i18next';

import ContactCard from '@/uikit/ContactCard';
import ScrollDown from '@/uikit/ScrollDown';
import { DEFAULT_TEXT_FONT, PAGE_TITLE_FONT } from '@/constants/fonts';

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

const DocLink = ({ children }: PropsWithChildren) => {
  return <a href="/docs/TRANSPED_Daňové priznanie PO 2022.pdf" download target="_blank" rel="noreferer" className={styles.docLink}><AiFillFileText size={20}/>{children}</a>;
};

export default function Investors () {
  const { t } = useTranslation('investors');
  return (
    <>
      <Head>
        <title>Investor relations | Transped s.r.o.</title>
        <meta name="description" content="Member of Grain Alliance" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={DEFAULT_TEXT_FONT.className}>
        <section className={styles.hero}>
          <div className={styles.left}>
            <div className={styles.leftContent}>
              <h1 className={`${styles.title} ${PAGE_TITLE_FONT.className} fade-in`}>
                <Trans
                  t={t}
                  i18nKey="title"
                />
              </h1>
              <Trans
                t={t}
                i18nKey="cooperationDescription"
                components={{
                  root: <p className={styles.sideInfo} />,
                  docLink: <DocLink />,
                }}
              />
            </div>
          </div>
          <div className={`${styles.right} fade-in`} id={styles.InvestorsHeroImage} />
          <ScrollDown />
        </section>
        <section className={`${styles.contacts} dark`}>
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