import Head from 'next/head';
import Image from 'next/image';
import { Montserrat_Alternates, Montserrat } from 'next/font/google';
import styles from '@/styles/Home.module.scss';
import classNames from 'classnames';
import { AiFillFileText } from 'react-icons/ai';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

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
  return (
    <>
      <Head>
        <title>Transped s.r.o.</title>
        <meta name="description" content="Member of Grain Alliance" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className={classNames(styles.hero)}>
          <div className={styles.left}>
            <div className={styles.leftContent}>
              <h1 className={classNames(styles.title, pageTitleFont.className)}>Transped <span className={styles.postfix}>s.r.o.</span></h1>
              <p className={classNames(styles.description, pageDescriptionFont.className)} dangerouslySetInnerHTML={{ __html: t('title') }} />
            </div>
          </div>
          <Image className={styles.right} src={'/images/HomeHero.png'} width={956} height={751} alt={''} />
          <Image className={styles.rightMobile} src={'/images/HomeMobileHero.png'} width={397} height={755} alt={''} />
        </section>
        <section className={styles.holding}>
          <div className={styles.left}>
            <a className={styles.imageLink} href="http://www.grainalliance.com/" target="_blank" rel="noreferer"><Image className={styles.holdingLogo} src={'/images/GrainAlliance.png'} width={262} height={387} alt={''} /></a>
          </div>
          <div className={styles.right}>
            <h2 className={classNames(styles.title, pageTitleFont.className)}>Grain Alliance</h2>
            <div className={classNames(styles.description, textFont.className)}>
              <div className={styles.aboutHolding}><div>Наша група компаній називається <a className={styles.pageLink} style={{ display: 'inline' }} href="http://www.grainalliance.com/" target="_blank" rel="noreferer">BZK Grain Alliance AB (Швеція)</a>, яка є 100% власником словацької торгово-перевалочної дочірньої компанії на ринку ЄС - Transped s.r.o.</div><Image className={styles.holdingLogoMobile} src={'/images/GrainAlliance.png'} width={82} height={134} alt={''} /></div><br/><br/>
              Ми обробляємо близько 60 тис. га землі в Україні, розташованих  в Київській, Черкаській, Полтавській та Чернігівській областях. Основними культурами у виробництві є кукурудза та соя, а додатковими культурами - насіння соняшнику та озима пшениця, тощо. Вся продукція не містить ГМО. Наші активи в Україні також включають загальні потужностідля зберігання близько 350 тис. тонн у 6 елеваторах (Пирятин, Яготин, Ніжин, Березань, Баришівка, Ярмолинці). Кожен елеватор обладнаний власною лабораторією. Вся продукція тестується в наших лабораторіях, а вибіркові партії перевіряються Державними фітосанітарними лабораторіями. Для забезпечення поставок ми також володіємо власним парком залізничних вагонів в Україні - загальною кількістю більше 230 вагонів для української колії.<br/><br/>
              Transped s.r.o. - перевантажувальний і торговий підрозділ в ЄС. Ми перевозимо та продаємо власне українське зерно в Європу, переважно в Італію, Німеччину, Австрію та інші країни.
            </div>
          </div>
        </section>
        <section className={styles.logystics}>
          <h2 className={classNames(styles.title, pageTitleFont.className)}>Логістика Transped&nbsp;s.r.o.</h2>
          <iframe className={styles.video} width="1120" height="630" src="https://www.youtube.com/embed/A36OtGtN5D8" title="Логістика Transped s.r.o." allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </section>
        <section className={styles.aboutUs}>
          <h2 className={classNames(styles.title, pageTitleFont.className)}>Про нас</h2>
          <div className={styles.content}>
            <div className={classNames(styles.left, textFont.className)}>
          Transped s.r.o. була заснована у 2002 році. У квітні 2022 року компанію та її елеватор у місті Черна-над-Тисою придбала шведська компанія BZK Grain Alliance AB. Відтоді для компанії та елеваторапочалося нове життя, яке розвивають шведські інвестори.<br/><br/>
          Презентація нашої нової компанії Transped s.r.o. відбулася у вересні 2022 року в Братиславі за участюМіністрів і Послів Словаччини, Швеції та України.
            </div>
            <div className={styles.right}>
              <iframe className={styles.video} width="560" height="315" src="https://www.youtube-nocookie.com/embed/perFwzk3ijo" title="the unique experience of the Baryshivska grain company Grain Alliance was discussed in Bratislava" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
          </div>
          <div className={classNames(styles.conclusion, textFont.className)}>
          Transped володіє елеватором з можливістю одночасного зберігання близько 20 тис. тонн у місті Чієрна-над-Тісоу, Словаччина. Силос має можливість приймати зерно на українську колію, зберігатийого в силосі, якщо необхідно, і відвантажувати на європейську колію або на вантажівки. Ми продаємо як FCA/FOR, так і CPT/DAP, вантажівками або поїздами.
          </div>
        </section>
        <section className={styles.status}>
          <h2 className={classNames(styles.title, pageTitleFont.className)}>Компанія зі світовим іміджем</h2>
          <p className={classNames(styles.description, textFont.className)}>
        Розуміючи важливість та довгостроковий характер цього проєкту як для України, так і для Словаччини, Європейська Комісія, Європейський банк реконструкції та розвитку, Посольство Швеції в Словаччині та Агентство США з міжнародного розвитку (USAID) підтримують його та приділяютьйому особливу увагу.<br/><br/>
        Про це можна прочитати тут:
          </p>
          <div className={styles.links}>
            <a className={styles.imageLink} href="https://latifundist.com/en/novosti/60495-grain-alliance-otrimaye-kredit-10-mln-na-modernizatsiyu-elevatora-u-slovachchini" target="_blank" rel="noreferer">
              <Image src="/images/LatifundistLogo.png" width={433} height={55} alt="Link to Latifundist.com" />
            </a>
            <a className={styles.imageLink} href="https://edition.cnn.com/2023/03/02/politics/usaid-ukraine-grain-partnerships/index.html?fbclid=IwAR0kUdWA7WoYjiNa5wSOuluwbLKeuwJAfWV_CtbkAeMFchDs9GZwWts7hJ8" target="_blank" rel="noreferer">
              <Image src="/images/CNN.png" width={135} height={135} alt="Link to CNN" />
            </a>
          </div>
        </section>
        <section className={styles.cooperation}>
          <h2 className={classNames(styles.title, pageTitleFont.className)}>Співпраця з нами</h2>
          <div className={classNames(styles.description, textFont.className)}>
        Transped s.r.o. має сертифікати:<br/><br/>
            <ul className={styles.sertificates}>
              <li><a className={styles.pageLink}><AiFillFileText size={20}/>ISCC</a></li>
              <li><a className={styles.pageLink}><AiFillFileText size={20}/>GMP+</a></li>
              <li><a className={styles.pageLink}><AiFillFileText size={20}/>&quot;Європа соя&quot;</a></li>
              <li><a className={styles.pageLink}><AiFillFileText size={20}/>UKSUP (торгівля, збір, зберігання та перевалка)</a></li>
            </ul>
            <br/>
        Крім того, ми співпрацюємо зі страховою компанією Allianz Trade, наші торгівельні операції застраховані.<br/><br/>
        Ми пропонуємо до продажу кукурудзу, сою, пшеницю, соняшник та інші культури, вирощені нашоюгрупою компаній в Україні та доставлені нами до Європи.<br/><br/>
        Ми гарантуємо високу якість, найкращі ціни на зерно та будуємо довгострокові партнерські відносини.
          </div>
        </section>
      </main>
    </>
  );
}
