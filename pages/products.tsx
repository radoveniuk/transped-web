import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Trans, useTranslation } from 'next-i18next';

import { DEFAULT_TEXT_FONT, PAGE_TITLE_FONT } from '@/constants/fonts';
import ContactCard from '@/uikit/ContactCard/ContactCard';
import Button from '@/uikit/Button/Button';

import styles from '@/styles/InfoPage.module.scss';

export async function getStaticProps({ locale }: {locale: string}) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
        'products',
      ])),
    },
  };
}

export default function Products () {
  const { t } = useTranslation('products');
  return (
    <>
      <Head>
        <title>Products | Transped s.r.o.</title>
        <meta name="description" content="Member of Grain Alliance" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.content} ${DEFAULT_TEXT_FONT.className}`}>
        <section className={styles.hero}>
          <div className={styles.left}>
            <div className={styles.leftContent}>
              <h1 className={`${styles.title} ${PAGE_TITLE_FONT.className} fade-in`}>
                <Trans
                  i18nKey="title"
                  t={t}
                />
              </h1>
              <Link className="fade-in" href="/contacts">
                <Button>{t('contactsBtn')}</Button>
              </Link>
            </div>
          </div>
          <Image src="/images/ProductsHero.png" className={styles.right} width={945} height={531} alt="Grain" />
        </section>
        <section className={`${styles.text} ${styles.dark}`}>
          <h2 className={`${styles.title} fade-in`}>{t('qualityProductTitle')}</h2>
          <p className={`${styles.container} fade-in`}>
            <Trans
              t={t}
              i18nKey="qualityProductDescription"
              components={{ pageLink: <Link href="/quality"/> }}
            />
          </p>
          <Link href="/quality">
            <Button variant="outlined">{t('certs')}</Button>
          </Link>
        </section>
        <section className={styles.cultures}>
          <h2 className={`${styles.title} fade-in`}>{t('cultures')}</h2>
          <div className={`${styles.grid} fade-in`}>
            <div className={styles.photoCard}>
              <Image className={styles.photo} src="/images/sunf.png" width={434} height={439} alt="Photo" />
              <p className={styles.alt}>{t('sunflower')}</p>
            </div>
            <div className={styles.photoCard}>
              <Image className={styles.photo} src="/images/corn1.png" width={434} height={439} alt="Photo" />
              <p className={styles.alt}>{t('corn')}</p>
            </div>
            <div className={`${styles.photoCard} ${styles.reverse}`}>
              <Image className={styles.photo} src="/images/grain.png" width={434} height={439} alt="Photo" />
              <p className={styles.alt}>{t('grain')}</p>
            </div>
            <div className={`${styles.photoCard} ${styles.reverse}`}>
              <Image className={styles.photo} src="/images/soy.png" width={434} height={439} alt="Photo" />
              <p className={styles.alt}>{t('soy')}</p>
            </div>
          </div>
          <Button>{t('allCulturesBtn')}</Button>
        </section>
        <section className={`${styles.contacts} ${styles.dark}`}>
          <h2 className={`${styles.title} fade-in`}>{t('contactsTitle')}</h2>
          <p className={`${styles.container} fade-in`}>{t('contactsDescription')}</p>
          <div className={styles.grid}>
            <ContactCard dbName="Bartolomej Némethi" />
            <ContactCard dbName="Yaroslav Krylov" />
          </div>
        </section>
      </main>
    </>
  );
}