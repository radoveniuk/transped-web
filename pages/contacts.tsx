import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { AiFillPhone } from 'react-icons/ai';
import { FaEnvelope } from 'react-icons/fa';
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
          <div className={styles.cards}>
            <div className={styles.addressCard}>
              <div style={{ width: '100%' }}><iframe width="100%" height="280" frameBorder="0" scrolling="no" src="https://maps.google.com/maps?width=100%25&amp;height=280&amp;hl=en&amp;q=48.633622,21.715736+(Transped%20office)&amp;t=k&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" /></div>
              <div className={`${PAGE_TITLE_FONT.className} ${styles.title} mt-15 mb-15 fade-in`}>{t('office')}</div>
              <div className={`${styles.contactsData} fade-in`}>
                <div className={styles.col}>
                  TRANŠPED s r.o.<br/>
                  Hviezdoslavova 1020/8<br/>
                  Trebišov, SR<br/><br/>
                  IČO: 36 216 739<br/>
                  IČ DPH: SK2021693718
                </div>
                <div className={styles.col}>
                  {t('phone')}:<br/>
                  <a href="tel:+421 56 67 23 940">+421 56 67 23 940</a><br/><br/>
                  <a href="https://goo.gl/maps/gMptFj6f8ZKwmg3p6" rel="noreferrer" target="_blank">GPS: 48.633622, 21.715736</a><br/><br/>
                  e-mail:<br/>
                  <a href="mailto:lumix.trade@gmail.com">lumix.trade@gmail.com</a>
                </div>
              </div>
              <div className={`mt-20 ${styles.actions}`}>
                <a href="tel:+421 56 67 23 940"><Button variant="outlined"><AiFillPhone size={30} /></Button></a>
                <a href="mailto:lumix.trade@gmail.com"><Button variant="outlined"><FaEnvelope size={30} /></Button></a>
                <a href="https://goo.gl/maps/gMptFj6f8ZKwmg3p6" rel="noreferrer" target="_blank"><Button variant="outlined"><SiGooglemaps size={30} /></Button></a>
              </div>
            </div>
            <div className={`${styles.addressCard} ${styles.reverse}`}>
              <div className={`${PAGE_TITLE_FONT.className} ${styles.title} mb-15`}>{t('storage')}</div>
              <div className={`${styles.contactsData} mb-15 fade-in`}>
                <div className={styles.col}>
                  TRANŠPED s r.o.<br/>
                  Priemyselná 204<br/>
                  Čierna nad Tisou, SR<br/><br/>
                  e-mail:<br/>
                  <a href="mailto:transped.tv@gmail.com">transped.tv@gmail.com</a><br/>
                  <a href="mailto:transped.col@gmail.com">transped.col@gmail.com</a>
                </div>
                <div className={styles.col}>
                  {t('phone')}:<br/>
                  <a href="tel:+421 917 336 901">+421 917 336 901</a><br/>
                  <a href="tel:+421 907 934 592">+421 907 934 592</a><br/>
                  <a href="tel:+421 907 672 239">+421 907 672 239</a><br/><br/>
                  <a href="https://goo.gl/maps/Y8aRe9SKyrfwdrk86" rel="noreferrer" target="_blank">GPS: 48.420511, 22.053232</a>
                </div>
              </div>
              <div className={`mb-20 ${styles.actions}`}>
                <a href="tel:+421 917 336 901"><Button variant="outlined"><AiFillPhone size={30} /></Button></a>
                <a href="mailto:transped.tv@gmail.com"><Button variant="outlined"><FaEnvelope size={30} /></Button></a>
                <a href="https://goo.gl/maps/Y8aRe9SKyrfwdrk86" rel="noreferrer" target="_blank"><Button variant="outlined"><SiGooglemaps size={30} /></Button></a>
              </div>
              <div style={{ width: '100%' }}><iframe width="100%" height="280" frameBorder="0" scrolling="no" src="https://maps.google.com/maps?width=100%25&amp;height=280&amp;hl=en&amp;q=48.420511,22.053232+(Transper%20storrage)&amp;t=k&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" /></div>
            </div>
          </div>
        </section>
        <section className={`${infoPageStyles.contacts} dark`}>
          <h2 className={`${infoPageStyles.title} fade-in`}>{t('ourTeam')}</h2>
          <div className={`${infoPageStyles.grid} fade-in`}>
            <ContactCard dbName="Bartolomej Némethi"/>
            <ContactCard dbName="Alexander Boda"/>
            <ContactCard dbName="Vladyslav Nahynailo"/>
            <ContactCard dbName="Yaroslav Krylov"/>
            <ContactCard dbName="Tair Musayev"/>
          </div>
        </section>
      </main>
    </>
  );
}