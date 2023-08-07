import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { SiGooglemaps } from 'react-icons/si';

import { DEFAULT_TEXT_FONT, PAGE_TITLE_FONT } from '@/constants/fonts';
import ContactCard from '@/uikit/ContactCard/ContactCard';

import infoPageStyles from '@/styles/InfoPage.module.scss';
import styles from '@/styles/Contacts.module.scss';
import Button from '@/uikit/Button/Button';

export async function getStaticProps({ locale }: {locale: string}) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
        'contacts',
      ])),
    },
  };
}

export default function Contacts () {
  const { t } = useTranslation('contacts');

  return (
    <>
      <Head>
        <title>Contacts | Transped s.r.o.</title>
        <meta name="description" content="Member of Grain Alliance" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={DEFAULT_TEXT_FONT.className}>
        <section className={styles.contacts}>
          <h1 className={`${PAGE_TITLE_FONT.className} ${styles.pageTitle} fade-in`}>{t('title')}</h1>
          <p>TRANSPED s r.o., Priemyselná 204, Čierna nad Tisou, SR<br/><a href="https://goo.gl/maps/Y8aRe9SKyrfwdrk86" rel="noreferrer" target="_blank">GPS: 48.420511, 22.053232</a></p>
          <div style={{ maxWidth: 800, width: '100%' }}><iframe className="fade-in" width="100%" height="480" frameBorder="0" scrolling="no" src="https://maps.google.com/maps?width=100%25&amp;height=280&amp;hl=en&amp;q=48.420511,22.053232+(Transper%20storrage)&amp;t=k&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" /></div>
          <a href="https://goo.gl/maps/Y8aRe9SKyrfwdrk86" rel="noreferrer" target="_blank"><Button variant="outlined">{t('navigate')}<SiGooglemaps size={30} /></Button></a>
        </section>
        <section className={`${infoPageStyles.contacts} dark`}>
          <h2 className={`${infoPageStyles.title} fade-in`}>{t('ourTeam')}</h2>
          <div className={`${infoPageStyles.grid} fade-in`}>
            <ContactCard dbName="Bartolomej Némethi"/>
            <ContactCard dbName="Vladyslav Nahynailo"/>
            <ContactCard dbName="Alexander Boda"/>
            <ContactCard dbName="Yaroslav Krylov"/>
            <ContactCard dbName="Tair Musayev"/>
          </div>
        </section>
      </main>
    </>
  );
}