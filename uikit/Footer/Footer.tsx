import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { DEFAULT_TEXT_FONT } from '@/constants/fonts';
import { useTranslation } from 'next-i18next';

import styles from './Footer.module.scss';

export default function Footer() {
  const { t } = useTranslation('common');
  return null;
  return (
    <footer className={`${styles.footer} ${DEFAULT_TEXT_FONT.className}`}>
      <div className={styles.subs}>
        <div className={styles.sub}>
          <Image className={styles.logo} src="/images/Logo1.png" width={137} height={200} alt="Tranped s.r.o logo" />
          <div className={styles.pages}>
            <Link href="/investors">{t('home')}</Link>
            <Link href="/investors">{t('2investors')}</Link>
            <Link href="/quality">{t('quality')}</Link>
            <Link href="/logistics">{t('logistics')}</Link>
            <Link href="/products">{t('products')}</Link>
            <Link href="/products">{t('contacts')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}