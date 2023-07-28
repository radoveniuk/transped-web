import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';

import styles from '@/styles/Investors.module.scss';
import Image from 'next/image';
import { Montserrat, Montserrat_Alternates } from 'next/font/google';
import { AiFillFileText } from 'react-icons/ai';

const pageTitleFont = Montserrat_Alternates({
  subsets: ['latin', 'cyrillic'],
  weight: '600',
});

const textFont = Montserrat({
  subsets: ['latin', 'cyrillic'],
  weight: '500',
});

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
      <main className={textFont.className}>
        <section className={styles.hero}>
          <div className={styles.left}>
            <div className={styles.leftContent}>
              <h1 className={`${styles.title} ${pageTitleFont.className}`}>Звʼязок з інвесторами</h1>
              <div className={styles.docs}>
                <div className={styles.docsTitle}>Фінансові звіти</div>
                <ul className={styles.docsList}>
                  <li><a className={styles.docLink}><AiFillFileText size={20}/>Фіскальний рік 2023</a></li>
                  <li><a className={styles.docLink}><AiFillFileText size={20}/>Фіскальний рік 2022</a></li>
                  <li><a className={styles.docLink}><AiFillFileText size={20}/>Фіскальний рік 2021</a></li>
                </ul>
              </div>
            </div>
          </div>
          <Image src="/images/InvestorsHero.png" className={styles.right} width={1028} height={751} alt="Image of elevators and flags" />
        </section>
      </main>
    </>
  );
}