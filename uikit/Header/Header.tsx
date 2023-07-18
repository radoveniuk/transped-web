import Image from 'next/image';
import Link from 'next/link';
import { Montserrat_Alternates } from 'next/font/google';
import classNames from 'classnames';
import { IoIosArrowDown } from 'react-icons/io';
import { IoMenuSharp } from 'react-icons/io5';
// import useTranslation from 'next-translate/useTranslation';

import styles from './Header.module.scss';

const LANGS = ['uk', 'sk', 'en', 'de', 'it', 'hu', 'pl'];

const font = Montserrat_Alternates({
  subsets: ['cyrillic', 'latin'],
  weight: '500',
});

const Header = () => {
  // const { lang } = useTranslation();

  return (
    <header className={classNames(font.className, styles.header)}>
      <div className="container">
        <div className={styles.headerContent}>
          <div className={styles.logoContainer}>
            <Link href="/"><Image className={styles.logo} src="/images/Logo.png" width={108} height={157} alt="Tranped s.r.o logo" /></Link>
          </div>
          <nav className={styles.nav}>
            <Link href="/">Головна</Link>
            <Link href="/products">Продукти</Link>
            <Link href="/investors">Звʼязок з інвесторами</Link>
            <Link href="/logystics">Логістика</Link>
            <Link href="/quality">Якість</Link>
            <Link href="/contacts">Контакти</Link>
          </nav>
          <div className={styles.rightActions}>
            <div className={styles.link}>
              <div className={styles.top}>UK<IoIosArrowDown size={16} /></div>
              <div className={styles.bot}>
                <div className={styles.links}>
                  {LANGS.filter((l) => l !== 'uk').map((l) => <Link key={l} className={styles.link} href={'/'} locale={l}>{l}</Link>)}
                </div>
              </div>
            </div>
            <button className={styles.burgerMenu}>
              <IoMenuSharp size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;