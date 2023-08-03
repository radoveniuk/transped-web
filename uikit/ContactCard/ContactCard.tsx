import Image from 'next/image';
import styles from './ContactCard.module.scss';
import db from '@/data/team.json';
import { useTranslation } from 'next-i18next';

type Props = {
  avatarUrl?: string;
  name?: string;
  flags?: string[];
  position?: string;
  email?: string;
  phone?: string;
  dbName?: string;
};

const getFlag = (lang: string) => {
  if (lang === 'en') {
    return 'https://flagcdn.com/w80/gb.png';
  }
  if (lang === 'uk') {
    return 'https://flagcdn.com/w80/ua.png';
  }
  return `https://flagcdn.com/w80/${lang}.png`;
};

export default function ContactCard(props: Props) {
  const { i18n } = useTranslation();
  let data = props;
  if (props.dbName) {
    const finded = db.find((person) => person.nameEN === props.dbName) as any;
    data = {
      ...finded,
      position: finded?.position[i18n.language],
      name: i18n.language !== 'uk' ? finded.nameEN : finded.nameUK,
    };
  }
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <Image src={data.avatarUrl || '/images/contacts/anonim.png'} height={160} width={160} alt="Card avatar" className={styles.avatar} />
        <div className={styles.info}>
          <div className={styles.name}>{data.name}</div>
          <div className={styles.flags}>
            {data.flags?.map((locale) => (
              <Image
                key={locale}
                src={getFlag(locale)}
                width="40"
                height="25"
                alt={locale}
                className={styles.flag}
              />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.position} dangerouslySetInnerHTML={{ __html: data.position || '' }} />
        <div className={styles.contacts}>
          <a href={`mailto:${data.email}`} className={styles.email}>{data.email}</a>
          <a href={`tel:${data.phone}`} className={styles.phone}>{data.phone}</a>
        </div>
      </div>
    </div>
  );
};
