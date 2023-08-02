import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import styles from '@/styles/Contacts.module.scss';
import infoPageStyles from '@/styles/InfoPage.module.scss';
import { DEFAULT_TEXT_FONT, PAGE_TITLE_FONT } from '@/constants/fonts';
import ContactCard from '@/uikit/ContactCard/ContactCard';

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
          <h1 className={`${PAGE_TITLE_FONT.className} ${styles.pageTitle}`}>Контакти</h1>
          <div className={styles.cards}>
            <div className={styles.addressCard}>
              <div className={styles.map}></div>
              <div className={`${PAGE_TITLE_FONT.className} ${styles.title} mt-15 mb-15`}>Офіс</div>
              <div className={styles.contactsData}>
                <div className={styles.col}>
                  TRANŠPED s r.o.<br/>
                  Hviezdoslavova 1020/8<br/>
                  Trebišov, SR<br/><br/>
                  IČO: 36 216 739<br/>
                  IČ DPH: SK2021693718
                </div>
                <div className={styles.col}>
                  Телефон:<br/>
                  +421 56 67 23 940<br/><br/>
                  GPS: 48.633622, 21.715736<br/><br/>
                  e-mail:<br/>
                  lumix.trade@gmail.com
                </div>
              </div>
            </div>
            <div className={`${styles.addressCard} ${styles.reverse}`}>
              <div className={`${PAGE_TITLE_FONT.className} ${styles.title} mb-15`}>Елеватор</div>
              <div className={`${styles.contactsData} mb-15`}>
                <div className={styles.col}>
                  TRANŠPED s r.o.<br/>
                  Priemyselná 204<br/>
                  Čierna nad Tisou, SR<br/><br/>
                  e-mail:<br/>
                  transped.tv@gmail.com<br/>
                  transped.col@gmail.com
                </div>
                <div className={styles.col}>
                  Телефон:<br/>
                  +421 917 336 901<br/>
                  +421 907 934 592<br/>
                  +421 907 672 239<br/><br/>
                  GPS: 48.420511, 22.053232
                </div>
              </div>
              <div className={styles.map}></div>
            </div>
          </div>
        </section>
        <section className={`${infoPageStyles.contacts} dark`}>
          <h2 className={infoPageStyles.title}>Наша команда</h2>
          <div className={infoPageStyles.grid}>
            <ContactCard
              avatarUrl="/images/contacts/BN.png"
              name="Бартоломей Неметі"
              position="Виконавчий директор, менеджер по з/д логістиці"
              email={'bartolomej.nemethi@grainalliance.com'}
              phone={'+421 918 403 112'}
              flags={['sk', 'en', 'ru', 'hu']}
            />
            <ContactCard
              name="Александр Бода"
              avatarUrl="/images/contacts/AB.png"
              position="Менеджер з автологістики"
              email={'alexander.boda@grainalliance.com'}
              phone="+421 917 336 901"
              flags={['sk', 'hu', 'ru']}
            />
            <ContactCard
              avatarUrl="/images/contacts/VN.png"
              name="Владислав Нагинайло"
              position="Виконавчий директор, менеджер з юридичних питань"
              email={'vladyslav.nahynailo@grainalliance.com'}
              phone={'+421 950 202 985'}
              flags={['ua', 'en', 'sk']}
            />
            <ContactCard
              name="Ярослав Крилов"
              position="Трейдер"
              email={'yaroslav.krylov@grainalliance.com'}
              phone=""
              flags={['ua', 'en']}
            />
            <ContactCard
              avatarUrl="/images/contacts/TM.png"
              name="Таір Мусаєв"
              position="Трейдер"
              email={'tahir.musayev@grainalliance.com'}
              phone="+380992619300"
              flags={['en', 'az', 'tr', 'uk']}
            />
          </div>
        </section>
      </main>
    </>
  );
}