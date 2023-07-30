import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';

import styles from '@/styles/InfoPage.module.scss';
import Image from 'next/image';
import Button from '@/uikit/Button/Button';
import { DEFAULT_TEXT_FONT, PAGE_TITLE_FONT } from '@/constants/fonts';
import ContactCard from '@/uikit/ContactCard/ContactCard';

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
              <h1 className={`${styles.title} ${PAGE_TITLE_FONT.className}`}>Продукти та торгівля</h1>
              <Button>Зв&apos;язатися з нами</Button>
            </div>
          </div>
          <Image src="/images/ProductsHero.png" className={styles.right} width={945} height={531} alt="Grain" />
        </section>
        <section className={`${styles.text} ${styles.dark}`}>
          <h2 className={styles.title}>Лише високоякісний продукт</h2>
          <p>
          Виробником зернових та інших культур, які пропонує на продаж Transped s.r.o. є ТОВ &quot;Баришівськазернова компанія&quot;, Україна. Щорічний врожай до 500 тисяч тонн зерна.<br/><br/>
          Дана компанія обробляє близько 60 тисяч гектарів землі в Україні, розташованих переважно в Київській, Черкаській, Полтавській та Чернігівській областях, які знаходяться далеко від театру бойових дій в Україні.<br/><br/>
          Ми ретельно відносимося до якості та безпеки наших продуктів. Усе зерно не містить ГМО. Ми забезпечуємо простежуваність показників якості продуктів від виробника зерна до продавця.<br/><br/>
          Наші активи в Україні також включають загальні потужності для зберігання близько 350 тис. тонн у 6 елеваторах (Пирятин, Яготин, Ніжин, Березань, Баришівка, Ярмолинці). Кожен елеватор обладнанийвласною лабораторією, яка гарантує високу якість та відповідність зерна вимогам стандартів Українита ЄС.<br/><br/>
          Transped s.r.o., як і виробник зерна, має сертифікати ISCC, GMP+, &quot;Європа соя&quot;, UKSUP (торгівля, збір, зберігання та перевалка), переглянути які можна в розділі цього сайту «ЯКІСТЬ».
          </p>
          <Button variant="outlined">Сертифікати</Button>
        </section>
        <section className={styles.cultures}>
          <h2 className={styles.title}>Основні культури</h2>
          <Button>Всі культури</Button>
        </section>
        <section className={`${styles.contacts} ${styles.dark}`}>
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
              name="Ярослав Крилов"
              // position="Фінансовий директор Групи компаній Grain Alliance"
              email={'yaroslav.krylov@grainalliance.com'}
              phone=""
              flags={['ua', 'en']}
            />
          </div>
        </section>
      </main>
    </>
  );
}