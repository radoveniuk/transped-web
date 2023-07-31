import Button from '@/uikit/Button';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Image from 'next/image';

import styles from '@/styles/InfoPage.module.scss';
import { DEFAULT_TEXT_FONT, PAGE_TITLE_FONT } from '@/constants/fonts';
import Link from 'next/link';
import ContactCard from '@/uikit/ContactCard/ContactCard';

export async function getStaticProps({ locale }: {locale: string}) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
        'logystics',
      ])),
    },
  };
}

export default function Logystics () {
  return (
    <>
      <Head>
        <title>Logystics | Transped s.r.o.</title>
        <meta name="description" content="Member of Grain Alliance" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={DEFAULT_TEXT_FONT.className}>
        <section className={styles.hero}>
          <div className={styles.left}>
            <div className={styles.leftContent}>
              <h1 className={`${styles.title} ${PAGE_TITLE_FONT.className}`}>Логістика</h1>
              <div className={styles.sideInfo}>
                <div className={styles.sideInfoTitle}>Додаткові послуги:</div>
                <ul className={styles.sideInfoList}>
                  <li>Послуги з митного декларування</li>
                  <li>Підготовка всіх митних і транспортних документів (SAD, SADd, DCH, DCHd, CMR, EUR, T1)</li>
                  <li>Забезпечення митних платежів</li>
                  <li>Комплексні консультації з митних та експедиторських питань</li>
                  <li>Перевалка зерна</li>
                </ul>
              </div>
              <Link href="/contacts">
                <Button className="mt-10">Замовити</Button>
              </Link>
            </div>
          </div>
          <Image src="/images/LogysticsHero.png" className={styles.right} width={945} height={531} alt="Grain" />
        </section>
        <section className={`${styles.dark} ${styles.text}`}>
          <h2 className={styles.title}>Варіанти перевезень</h2>
          <div className={styles.container}>
            <div className={styles.images}>
              <Image alt="Railway" src="/images/vagon.png" width={503} height={308} />
              <Image alt="Auto" src="/images/car.png" width={498} height={280}/>
            </div>
            <div className={styles.container}>
              <div>
                Для забезпечення своєчасних поставок зерна з України кінцевому покупцеві в Європі група компаній володіє власним парком залізничних вагонів в Україні - загальною кількістю 230 вагонів для української колії, а також власним автомобільним парком для доставки зерна шляхами Європи – від 25 тон до 1000 тон.<br/><br/>
                До нашого зерносховища веде українська залізниця з шириною колії 1520 мм. Ми можемо прийматинаше зерно на цих коліях.<br/><br/>
                До нашого зерносховища також є дві європейські колії з шириною колії 1435 мм.<br/><br/>
                Ми також можемо зберігати зерно, імпортоване з України, в нашому зерносховищі на наших критихскладах.<br/><br/>
                У нас є перевірені та сертифіковані автомобільні ваги, на яких ми можемо точно завантажувати зерно на вантажівки<br/>
                <div className="mt-20">
                  <Link href="/quality">
                    <Button variant="outlined">Сертифікати</Button>
                  </Link>
                </div>
              </div>
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