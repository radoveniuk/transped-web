import Image from 'next/image';
import Link from 'next/link';
import { DEFAULT_TEXT_FONT } from '@/constants/fonts';

import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={`${styles.footer} ${DEFAULT_TEXT_FONT.className}`}>
      <div className={styles.content}>
        <Image className={styles.logo} src="/images/Logo1.png" width={65} height={100} alt="Tranped s.r.o logo" />
        <div className={styles.rights}>
          <div className="mb-12">Copyright © 2023 | Transped s.r.o.</div>
          <Link href="/gdpr" className={styles.pageLink}>GDPR</Link>
        </div>
      </div>
    </footer>
  );
}