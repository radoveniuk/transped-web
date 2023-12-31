import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import classNames from 'classnames';
import { IoIosArrowDown } from 'react-icons/io';
import { IoMenuSharp } from 'react-icons/io5';
// import useTranslation from 'next-translate/useTranslation';
import { i18n } from '../../next-i18next.config';

import styles from './Header.module.scss';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { DEFAULT_TEXT_FONT } from '@/constants/fonts';

const LANGS = i18n.locales;

const Header = () => {
  const { i18n, t } = useTranslation('common');

  const router = useRouter();

  const getFlag = (lang: string) => {
    if (lang === 'en') {
      return 'https://flagcdn.com/w80/gb.png';
    }
    if (lang === 'uk') {
      return 'https://flagcdn.com/w80/ua.png';
    }
    return `https://flagcdn.com/w80/${lang}.png`;
  };

  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    document.documentElement.style.overflowY = openMobileMenu ? 'auto' : 'hidden';
    setOpenMobileMenu(prev => !prev);
  };

  return (
    <>
      <header className={classNames(DEFAULT_TEXT_FONT.className, styles.header)}>
        <div className={styles.headerContent}>
          <div className={styles.logoContainer}>
            <Link href="/" onClick={() => void setOpenMobileMenu(false)}><Image className={styles.logo} src="/images/Logo1.png" width={108} height={157} alt="Tranped s.r.o logo" /></Link>
          </div>
          <nav className={styles.nav}>
            <Link href="/" className={router.asPath === '/' ? styles.active : ''}>{t('home')}</Link>
            <Link href="/investors" className={router.asPath === '/investors' ? styles.active : ''}>{t('2investors')}</Link>
            <Link href="/products" className={router.asPath === '/products' ? styles.active : ''}>{t('products')}</Link>
            <Link href="/logistics" className={router.asPath === '/logistics' ? styles.active : ''}>{t('logistics')}</Link>
            <Link href="/quality" className={router.asPath === '/quality' ? styles.active : ''}>{t('quality')}</Link>
            <Link href="/contacts" className={router.asPath === '/contacts' ? styles.active : ''}>{t('contacts')}</Link>
          </nav>
          <div className={styles.rightActions}>
            <ul className={styles.langs}>
              {LANGS.map((l) => (
                <li key={l}>
                  <Link className={styles.link} href={router.asPath} locale={l} title={l}>
                    <Image
                      src={getFlag(l)}
                      width="20"
                      height="14"
                      alt={l}
                      className={l === i18n.language ? styles.active : ''}
                    />
                  </Link>
                </li>
              ))}
            </ul>
            <div className={`${styles.langsDropdown} ${styles.link}`}>
              <div className={styles.top}>{i18n.language}<IoIosArrowDown size={16} /></div>
              <div className={styles.bot}>
                <div className={styles.links}>
                  {LANGS.filter((l) => l !== i18n.language).map((l) => (
                    <Link key={l} className={styles.link} href={router.asPath} locale={l}>
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
            <button className={`${styles.burgerMenu} ${styles['menu-toggle']} ${openMobileMenu && styles['nav-open']}`} onClick={toggleMobileMenu}>
              <span className={`${styles['menu-toggle-bar']} ${styles['menu-toggle-bar--top']}`}></span>
              <span className={`${styles['menu-toggle-bar']} ${styles['menu-toggle-bar--middle']}`}></span>
              <span className={`${styles['menu-toggle-bar']} ${styles['menu-toggle-bar--bottom']}`}></span>
            </button>
          </div>
        </div>
      </header>
      <div className={`${DEFAULT_TEXT_FONT.className} ${styles.mobMenu} ${openMobileMenu && styles.active}`}>
        <nav className={styles.nav}>
          <Link onClick={toggleMobileMenu} href="/" className={router.asPath === '/' ? styles.active : ''}>{t('home')}</Link>
          <Link onClick={toggleMobileMenu} href="/investors" className={router.asPath === '/investors' ? styles.active : ''}>{t('2investors')}</Link>
          <Link onClick={toggleMobileMenu} href="/products" className={router.asPath === '/products' ? styles.active : ''}>{t('products')}</Link>
          <Link onClick={toggleMobileMenu} href="/logistics" className={router.asPath === '/logistics' ? styles.active : ''}>{t('logistics')}</Link>
          <Link onClick={toggleMobileMenu} href="/quality" className={router.asPath === '/quality' ? styles.active : ''}>{t('quality')}</Link>
          <Link onClick={toggleMobileMenu} href="/contacts" className={router.asPath === '/contacts' ? styles.active : ''}>{t('contacts')}</Link>
        </nav>
      </div>
    </>
  );
};

export default Header;