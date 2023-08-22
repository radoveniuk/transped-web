import Image from 'next/image';
import { useTranslation } from 'next-i18next';

import { DEFAULT_TEXT_FONT } from '@/constants/fonts';

import styles from './Footer.module.scss';

export default function Footer() {
  const { t } = useTranslation('common');
  return (
    <footer className={`${styles.footer} ${DEFAULT_TEXT_FONT.className}`}>
      <div className={styles.content}>
        <Image className={styles.logo} src="/images/Logo1.png" width={65} height={100} alt="Tranped s.r.o logo" />
        <div className={styles.rights}>
          <div className="mb-12">Copyright © 2023 | Transped s.r.o.</div>
          <p>{t('gdpr')}</p>
        </div>
      </div>
    </footer>
  );
}