import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { Montserrat } from 'next/font/google';

import styles from './Footer.module.scss';

const font = Montserrat({ subsets: ['latin'] });

export default function Footer() {
  return (
    <footer className={`${styles.footer} ${font.className}`}>
      <div className={styles.sub}>
        <Image className={styles.logo} src="/images/Logo.png" width={137} height={200} alt="Tranped s.r.o logo" />
        <div className={styles.pages}>
          <Link href="/investors">Інвестування</Link>
          <Link href="/contacts">Контакти</Link>
          <Link href="/logystics">Логістика</Link>
          <Link href="/products">Продукти</Link>
        </div>
      </div>
      <div className={styles.sub}>
        <div className={styles.phones}>
          <div>Телефон склад</div>
          <a href="tel:+421 56 67 23 940">+421 56 67 23 940</a>
        </div>
        <div className={styles.phones}>
          <div>Телефон офіс</div>
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