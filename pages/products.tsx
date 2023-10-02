import { useState } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Trans, useTranslation } from 'next-i18next';
import Lightbox from 'react-18-image-lightbox';

import { DEFAULT_TEXT_FONT, PAGE_TITLE_FONT } from '@/constants/fonts';
import ContactCard from '@/uikit/ContactCard';
import Button from '@/uikit/Button';
import ScrollDown from '@/uikit/ScrollDown';

import styles from '@/styles/InfoPage.module.scss';

const images = [
  '/images/cultures-gallery/1.webp',
  '/images/cultures-gallery/2.webp',
  '/images/cultures-gallery/3.webp',
  '/images/cultures-gallery/4.webp',
  '/images/cultures-gallery/5.webp',
];

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
  const [isOpenGallery, setIsOpenGallery] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(1);
  const [galleryHash, setGalleryHash] = useState('1');
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
          <div className={`${styles.left} fade-in`}>
            <div className={styles.leftContent}>
              <h1 className={`${styles.title} ${PAGE_TITLE_FONT.className}`}>
                <Trans
                  i18nKey="title"
                  t={t}
                />
              </h1>
              <p className={styles.sideInfo}>
                <Trans
                  t={t}
                  i18nKey="description"
                />
              </p>
              <Link href="/contacts">
                <Button>{t('contactsBtn')}</Button>
              </Link>
            </div>
          </div>
          <div className={`${styles.right} fade-in`} id={styles.ProductsHeroImage} />
          <ScrollDown />
        </section>
        <section className={`${styles.text} dark`}>
          <h2 className={`${styles.title} fade-in`}>{t('qualityProductTitle')}</h2>
          <div className={styles.container}>
            <div className={styles.images}>
              <Image alt="Harvest" src="/images/harvest0.webp" width={957} height={751} />
            </div>
            <div className={`${styles.container} fade-in`}>
              <div>
                <Trans
                  t={t}
                  i18nKey="qualityProductDescription"
                  components={{ pageLink: <Link href="/quality"/> }}
                />
              </div>
            </div>
          </div>
          <Link href="/quality">
            <Button variant="outlined">{t('certs')}</Button>
          </Link>
        </section>
        <section className={styles.cultures}>
          <h2 className={`${styles.title} fade-in`}>{t('cultures')}</h2>
          <div className={`${styles.grid} fade-in`}>
            <div className={styles.photoCard}>
              <Image className={styles.photo} src="/images/sunf1.png" width={434} height={439} alt="Photo" />
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
          <Button
            onClick={() => {
              setIsOpenGallery(true);
              setTimeout(() => {
                setGalleryHash((new Date()).getTime().toString());
              }, 100);
            }}
          >
            {t('allCulturesBtn')}
          </Button>
          {isOpenGallery && (
            <Lightbox
              key={galleryHash}
              mainSrc={images[photoIndex]}
              nextSrc={images[(photoIndex + 1) % images.length]}
              prevSrc={images[(photoIndex + images.length - 1) % images.length]}
              onCloseRequest={() => setIsOpenGallery(false)}
              onMovePrevRequest={() => {
                setPhotoIndex((photoIndex + images.length - 1) % images.length);
              }}
              onMoveNextRequest={() => {
                setPhotoIndex((photoIndex + 1) % images.length);
              }}
            />
          )}
        </section>
        <section className={`${styles.contacts} dark`}>
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