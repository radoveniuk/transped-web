import { useState } from 'react';
import classNames from 'classnames';
import { AiFillFileText } from 'react-icons/ai';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Trans, useTranslation } from 'next-i18next';
import Head from 'next/head';
import Image from 'next/image';
import { Montserrat_Alternates, Montserrat } from 'next/font/google';

import Skeleton from '@/uikit/Skeleton';

import styles from '@/styles/Home.module.scss';

const pageTitleFont = Montserrat_Alternates({
  subsets: ['latin'],
  weight: '600',
});

const pageDescriptionFont = Montserrat_Alternates({
  subsets: ['latin', 'cyrillic'],
  weight: '500',
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
        'home',
      ])),
    },
  };
}

export default function Home() {
  const { t } = useTranslation('home');
  const [heroImageLoaded, setHeroImageLoaded] = useState(false);
  return (
    <>
      <Head>
        <title>Transped s.r.o.</title>
        <meta name="description" content="Member of Grain Alliance" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={textFont.className}>
        <section className={classNames(styles.hero)}>
          <div className={styles.left}>
            <div className={`${styles.leftContent} fade-in`}>
              <h1 className={classNames(styles.title, pageTitleFont.className)}>Transped <span className={styles.postfix}>s.r.o.</span></h1>
              <p className={classNames(styles.description, pageDescriptionFont.className)} dangerouslySetInnerHTML={{ __html: t('title') }} />
            </div>
          </div>
          {!heroImageLoaded && <Skeleton className={styles.rightPlaceholder} />}
          <Image className={styles.right} src={'/images/HomeHero.png'} onLoad={() => { setHeroImageLoaded(true); }} width={956} height={751} alt={''} />
        </section>
        <section className={styles.holding}>
          <div className={styles.left}>
            <a className={styles.imageLink} href="http://www.grainalliance.com/" target="_blank" rel="noreferer"><Image className={styles.holdingLogo} src={'/images/GrainAlliance.png'} width={262} height={387} alt={''} /></a>
          </div>
          <div className={styles.right}>
            <h2 className={classNames(styles.title, pageTitleFont.className, 'fade-in')}>Grain Alliance</h2>
            <Trans
              t={t}
              i18nKey="holdingDescription"
              components={{
                root: <div className={`${styles.description} fade-in`} />,
                holding: <div className={styles.aboutHolding} />,
                holdinglink: <a className={styles.pageLink} style={{ display: 'inline' }} href="http://www.grainalliance.com/" target="_blank" rel="noreferer" />,
                holdingimg: <Image className={styles.holdingLogoMobile} src={'/images/GrainAlliance.png'} width={82} height={134} alt={''} />,
                div: <div/>,
              }}
            />
          </div>
        </section>
        <section className={styles.logistics}>
          <h2 className={classNames(styles.title, pageTitleFont.className, 'fade-in')}>{t('logisticsTitle')}</h2>
          <iframe className={styles.video} width="1120" height="630" src="https://www.youtube.com/embed/A36OtGtN5D8" title="Логістика Transped s.r.o." allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </section>
        <section className={styles.aboutUs}>
          <h2 className={classNames(styles.title, pageTitleFont.className, 'fade-in')}>{t('aboutUsTitle')}</h2>
          <div className={styles.content}>
            <div className={classNames(styles.left, textFont.className, 'fade-in')}>
              <Trans
                t={t}
                i18nKey="aboutUsDescription"
              />
            </div>
            <div className={styles.right}>
              <iframe className={styles.video} width="560" height="315" src="https://www.youtube-nocookie.com/embed/perFwzk3ijo" title="the unique experience of the Baryshivska grain company Grain Alliance was discussed in Bratislava" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
          </div>
          <div className={classNames(styles.conclusion, textFont.className, 'fade-in')}>
            {t('aboutUsConclusion')}
          </div>
        </section>
        <section className={styles.status}>
          <h2 className={classNames(styles.title, pageTitleFont.className, 'fade-in')}>{t('statusTitle')}</h2>
          <p className={classNames(styles.description, textFont.className, 'fade-in')}>
            <Trans
              t={t}
              i18nKey="statusDescription"
            />
          </p>
          <div className={`${styles.links} fade-in`}>
            <a className={styles.imageLink} href="https://latifundist.com/en/novosti/60495-grain-alliance-otrimaye-kredit-10-mln-na-modernizatsiyu-elevatora-u-slovachchini" target="_blank" rel="noreferer">
              <Image src="/images/LatifundistLogo.png" width={433} height={55} alt="Link to Latifundist.com" />
            </a>
            <a className={styles.imageLink} href="https://edition.cnn.com/2023/03/02/politics/usaid-ukraine-grain-partnerships/index.html?fbclid=IwAR0kUdWA7WoYjiNa5wSOuluwbLKeuwJAfWV_CtbkAeMFchDs9GZwWts7hJ8" target="_blank" rel="noreferer">
              <Image src="/images/CNN.png" width={135} height={135} alt="Link to CNN" />
            </a>
          </div>
        </section>
        <section className={styles.cooperation}>
          <h2 className={classNames(styles.title, pageTitleFont.className, 'fade-in')}>{t('cooperationTitle')}</h2>
          <div className={classNames(styles.description, textFont.className, 'fade-in')}>
            {t('certs')}<br/><br/>
            <ul className={styles.sertificates}>
              <li><a className={styles.pageLink}><AiFillFileText size={20}/>ISCC</a></li>
              <li><a className={styles.pageLink}><AiFillFileText size={20}/>GMP+</a></li>
              <li><a className={styles.pageLink}><AiFillFileText size={20}/>&quot;Europe Soya&quot;</a></li>
              <li><a className={styles.pageLink}><AiFillFileText size={20}/>{t('UKSUP')}</a></li>
            </ul>
            <br/>
            <Trans
              t={t}
              i18nKey="cooperationDescription"
            />
          </div>
        </section>
      </main>
    </>
  );
}
