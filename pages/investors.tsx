import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';

import styles from '@/styles/InfoPage.module.scss';
import Image from 'next/image';
import { AiFillFileText } from 'react-icons/ai';
import { DEFAULT_TEXT_FONT, PAGE_TITLE_FONT } from '@/constants/fonts';
import ContactCard from '@/uikit/ContactCard';

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
  return (
    <>
      <Head>
        <title>Investors | Transped s.r.o.</title>
        <meta name="description" content="Member of Grain Alliance" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={DEFAULT_TEXT_FONT.className}>
        <section className={styles.hero}>
          <div className={styles.left}>
            <div className={styles.leftContent}>
              <h1 className={`${styles.title} ${PAGE_TITLE_FONT.className}`}>Звʼязок<br/> з інвесторами</h1>
              <div className={styles.sideInfo}>
                <div className={styles.sideInfoTitle}>Фінансові звіти:</div>
                <ul className={styles.sideInfoList}>
                  <li><a className={styles.docLink}><AiFillFileText size={20}/>Фіскальний рік 2023</a></li>
                  <li><a className={styles.docLink}><AiFillFileText size={20}/>Фіскальний рік 2022</a></li>
                  <li><a className={styles.docLink}><AiFillFileText size={20}/>Фіскальний рік 2021</a></li>
                </ul>
              </div>
            </div>
          </div>
          <Image src="/images/InvestorsHero.png" className={styles.right} width={1028} height={751} alt="Image of elevators and flags" />
        </section>
        <section className={`${styles.text} ${styles.dark}`}>
          <h2 className={styles.title}>Співпраця</h2>
          <p className={styles.container}>
          Нашим пріорітетом є чітке і відкрите спілкування з акціонерами, інвесторами, банками та аналітиками. Ми спрямовані на забезпечення надання їм та нашим клієнтам актуальної та достовірної інформації.<br/><br/>
          Глобальним партнером групи з аудиту є компанія ERNST&YOUNG<br/><br/>
          Транспед був придбаний групою BZK Grain Alliance AB у 2022 році. З того часу відбуваєтьсящорічний аудит з боку ERNST&YOUNG<br/><br/>
          ФІНАНСОВУ ЗВІТНІСТЬ Transped s.r.o. можна побачити <a  className={styles.docLink}>тут</a>
          </p>
        </section>
        <section className={styles.contacts}>
          <h2 className={styles.title}>Контактні особи</h2>
          <div className={styles.grid}>
            <ContactCard
              avatarUrl="/images/contacts/BN.png"
              name="Бартоломей Неметі"
              position="Виконавчий директор, менеджер по з/д логістиці"
              email={'bartolomej.nemethi@grainalliance.com'}
              phone={'+421 918 403 112'}
              flags={['sk', 'en', 'ru', 'hu']}
            />
            <ContactCard
              avatarUrl="/images/contacts/Zahlada.png"
              name="Заглада Євген"
              position="Фінансовий директор Групи компаній Grain Alliance"
              email={'evgeniy.zaglada@grainalliance.com'}
              phone={'+421 918 403 112'}
              flags={['ua', 'en', 'ru']}
            />
          </div>
        </section>
      </main>
    </>
  );
}