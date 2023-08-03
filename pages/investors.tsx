import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';

import styles from '@/styles/InfoPage.module.scss';
import Image from 'next/image';
import { AiFillFileText } from 'react-icons/ai';
import { DEFAULT_TEXT_FONT, PAGE_TITLE_FONT } from '@/constants/fonts';
import ContactCard from '@/uikit/ContactCard';
import { Trans, useTranslation } from 'next-i18next';

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
              <h1 className={`${styles.title} ${PAGE_TITLE_FONT.className}`} style={{ whiteSpace: 'nowrap' }}>
                <Trans
                  t={t}
                  i18nKey="title"
                />
              </h1>
              <div className={styles.sideInfo}>
                <div className={styles.sideInfoTitle}>{t('finacialReports')}</div>
                <ul className={styles.sideInfoList}>
                  <li><a className={styles.docLink}><AiFillFileText size={20}/>Year 2023</a></li>
                  <li><a className={styles.docLink}><AiFillFileText size={20}/>Year 2022</a></li>
                  <li><a className={styles.docLink}><AiFillFileText size={20}/>Year 2021</a></li>
                </ul>
              </div>
            </div>
          </div>
          <Image src="/images/InvestorsHero.png" className={styles.right} width={1028} height={751} alt="Image of elevators and flags" />
        </section>
        <section className={`${styles.text} ${styles.dark}`}>
          <h2 className={styles.title}>{t('cooperationTitle')}</h2>
          <div className={styles.container}>
            <Trans
              t={t}
              i18nKey="cooperationDescription"
              components={{
                root: <p/>,
                docLink: <a className={styles.docLink} />,
              }}
            />
          </div>
        </section>
        <section className={styles.contacts}>
          <h2 className={styles.title}>{t('contactsTitle')}</h2>
          <p className={styles.container}>{t('contactsDescription')}</p>
          <div className={styles.grid}>
            <ContactCard dbName="Bartolomej Némethi" />
            <ContactCard dbName="Evgeniy Zaglada" />
          </div>
        </section>
      </main>
    </>
  );
}