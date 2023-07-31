import { DEFAULT_TEXT_FONT, PAGE_TITLE_FONT } from '@/constants/fonts';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Image from 'next/image';
import { AiFillFileText } from 'react-icons/ai';

import styles from '@/styles/InfoPage.module.scss';
import ContactCard from '@/uikit/ContactCard/ContactCard';

export async function getStaticProps({ locale }: {locale: string}) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
        'quality',
      ])),
    },
  };
}

export default function Quality () {
  return (
    <>
      <Head>
        <title>Quality | Transped s.r.o.</title>
        <meta name="description" content="Member of Grain Alliance" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={DEFAULT_TEXT_FONT.className}>
        <section className={styles.hero}>
          <div className={styles.left}>
            <div className={styles.leftContent}>
              <h1 className={`${styles.title} ${PAGE_TITLE_FONT.className}`}>Якість</h1>
              <div className={styles.sideInfo}>
                <div className={styles.sideInfoTitle}>Сертифікати:</div>
                <ul className={styles.sideInfoList}>
                  <li><a className={styles.docLink}><AiFillFileText size={20}/>ISCC</a></li>
                  <li><a className={styles.docLink}><AiFillFileText size={20}/>GMP+</a></li>
                  <li><a className={styles.docLink}><AiFillFileText size={20}/>&quot;Європа соя&quot;</a></li>
                  <li><a className={styles.docLink}><AiFillFileText size={20}/>UKSUP</a></li>
                </ul>
              </div>
            </div>
          </div>
          <Image src="/images/QualityHero.png" className={styles.right} width={1028} height={751} alt="Image of elevators and flags" />
        </section>
        <section className={`${styles.text} ${styles.dark}`}>
          <h2 className={styles.title}>Гарантії якості</h2>
          <div className={styles.container}>
            <p className={styles.container}>
            Ми ретельно відносимося до якості та безпеки наших продуктів. Усе зерно не містить ГМО. Ми забезпечуємо простежуваність показників якості продуктів від виробника зерна до продавця.<br/><br/>
            Наші активи в Україні також включають загальні потужності для зберігання близько 350 тис. тонн у 6 елеваторах (Пирятин, Яготин, Ніжин, Березань, Баришівка, Ярмолинці). Кожен елеватор обладнаний власною лабораторією, яка гарантує високу якість та відповідність зерна вимогам стандартів України та ЄС.
            </p>
            <div className={styles.images}>
              <Image alt="Harvest" src="/images/harvest.png" width={536} height={336} />
            </div>
          </div>
        </section>
        <section className={`${styles.contacts}`}>
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
              name="Александр Бода"
              avatarUrl="/images/contacts/AB.png"
              position="Менеджер з автологістики"
              email={'alexander.boda@grainalliance.com'}
              phone="+421 917 336 901"
              flags={['sk', 'hu', 'ru']}
            />
          </div>
        </section>
      </main>
    </>
  );
}