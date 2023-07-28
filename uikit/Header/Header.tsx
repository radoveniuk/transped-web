import Image from 'next/image';
import Link from 'next/link';
import { Montserrat_Alternates } from 'next/font/google';
import classNames from 'classnames';
import { IoIosArrowDown } from 'react-icons/io';
import { IoMenuSharp } from 'react-icons/io5';
// import useTranslation from 'next-translate/useTranslation';
import { i18n } from '../../next-i18next.config';

import styles from './Header.module.scss';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

const LANGS = i18n.locales;

const font = Montserrat_Alternates({
  subsets: ['cyrillic', 'latin'],
  weight: '500',
});

const Header = () => {
  const { i18n } = useTranslation();

  const router = useRouter();

  const getFlag = (lang: string) => {
    if (lang === 'en') {
      return 'https://flagcdn.com/w20/gb-eng.png';
    }
    if (lang === 'uk') {
      return 'https://flagcdn.com/w20/ua.png';
    }
    return `https://flagcdn.com/w20/${lang}.png`;
  };

  return (
    <header className={classNames(font.className, styles.header)}>
      <div className={styles.headerContent}>
        <div className={styles.logoContainer}>
          <Link href="/"><Image className={styles.logo} src="/images/Logo.png" width={108} height={157} alt="Tranped s.r.o logo" /></Link>
        </div>
        <nav className={styles.nav}>
          <Link href="/" className={router.asPath === '/' ? styles.active : ''}>Головна</Link>
          <Link href="/investors" className={router.asPath === '/investors' ? styles.active : ''}>Інвесторам</Link>
          <Link href="/products" className={router.asPath === '/products' ? styles.active : ''}>Продукти</Link>
          <Link href="/logystics" className={router.asPath === '/logystics' ? styles.active : ''}>Логістика</Link>
          <Link href="/quality" className={router.asPath === '/quality' ? styles.active : ''}>Якість</Link>
          <Link href="/contacts" className={router.asPath === '/contacts' ? styles.active : ''}>Контакти</Link>
        </nav>
        <div className={styles.rightActions}>
          <div className={styles.link}>
            <div className={styles.top}>{i18n.language}<IoIosArrowDown size={16} /></div>
            <div className={styles.bot}>
              <div className={styles.links}>
                {LANGS.filter((l) => l !== i18n.language).map((l) => (
                  <Link key={l} className={styles.link} href={'/'} locale={l}>
                    <Image
                      src={getFlag(l)}
                      width="20"
                      height="14"
                      alt={l}
                    />
                    {l}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <button className={styles.burgerMenu}>
            <IoMenuSharp size={30} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;