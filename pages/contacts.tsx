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
        <section className={`${PAGE_TITLE_FONT.className} ${infoPageStyles.contacts}`}>
          <h2 className={`${infoPageStyles.title} fade-in`}>{t('ourTeam')}</h2>
          <div className={`${infoPageStyles.grid} fade-in`}>
            <ContactCard dbName="Bartolomej Némethi"/>
            <ContactCard dbName="Vladyslav Nahynailo"/>
            <ContactCard dbName="Alexander Boda"/>
            <ContactCard dbName="Tair Musayev"/>
          </div>
        </section>
        <section className={`dark ${styles.geoData}`}>
          <h1 className={`${PAGE_TITLE_FONT.className} ${infoPageStyles.title} fade-in`}>{t('address')}</h1>
          <div className={styles.content}>
            <div className={styles.left}><iframe className="fade-in" frameBorder="0" scrolling="no" src="https://maps.google.com/maps?width=100%25&amp;height=280&amp;hl=en&amp;q=48.420511,22.053232+(Transper%20storrage)&amp;t=k&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" /></div>
            <div className={styles.right}>
              <p><span style={{ fontSize: 20 }}>TRANSPED s.r.o.</span><br/><br/>Priemyselná 204, <br/>Čierna nad Tisou,<br/>Slovakia<br/><br/><a href="https://goo.gl/maps/Y8aRe9SKyrfwdrk86" rel="noreferrer" target="_blank">GPS: 48.420511, 22.053232</a></p>
              <a href="https://goo.gl/maps/Y8aRe9SKyrfwdrk86" rel="noreferrer" target="_blank"><Button variant="outlined">{t('navigate')}<SiGooglemaps size={30} /></Button></a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}