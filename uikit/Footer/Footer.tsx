import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { DEFAULT_TEXT_FONT } from '@/constants/fonts';
import { useTranslation } from 'next-i18next';

import styles from './Footer.module.scss';

export default function Footer() {
  const { t } = useTranslation('common');
  return (
    <footer className={`${styles.footer} ${DEFAULT_TEXT_FONT.className}`}>
      <div className={styles.sub}>
        <Image className={styles.logo} src="/images/Logo.png" width={137} height={200} alt="Tranped s.r.o logo" />
        <div className={styles.pages}>
          <Link href="/investors">{t('2investors')}</Link>
          <Link href="/qualty">{t('quality')}</Link>
          <Link href="/logystics">{t('logystics')}</Link>
          <Link href="/products">{t('products')}</Link>
        </div>
      </div>
      <div className={styles.sub}>
        <div className={styles.phones}>
          <div>{t('phoneStorage')}</div>
          <a href="tel:+421 56 67 23 940">+421 56 67 23 940</a>
        </div>
        <div className={styles.phones}>
          <div>{t('phoneOffice')}</div>
          <a href="tel:+421 917 336 901">+421 917 336 901</a>
          <a href="tel:+421 907 934 592">+421 907 934 592</a>
          <a href="tel:+421 907 672 239">+421 907 672 239</a>
        </div>
      </div>
      <div className={styles.socials}>
        <a><FaFacebook size={50} /></a>
        <a><FaWhatsapp size={50} /></a>
        <a><FaEnvelope size={50} /></a>
      </div>
    </footer>
  );
}