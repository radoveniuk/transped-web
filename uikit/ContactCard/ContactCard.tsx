import Image from 'next/image';
import styles from './ContactCard.module.scss';

type Props = {
  avatarUrl?: string;
  name: string;
  flags?: string[];
  position?: string;
  email: string;
  phone: string;
};

const getFlag = (lang: string) => {
  if (lang === 'en') {
    return 'https://flagcdn.com/w80/gb-eng.png';
  }
  if (lang === 'uk') {
    return 'https://flagcdn.com/w80/ua.png';
  }
  return `https://flagcdn.com/w80/${lang}.png`;
};

export default function ContactCard(props: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <Image src={props.avatarUrl || '/images/contacts/anonim.png'} height={160} width={160} alt="Card avatar" className={styles.avatar} />
        <div className={styles.info}>
          <div className={styles.name}>{props.name}</div>
          <div className={styles.flags}>
            {props.flags?.map((locale) => (
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
        <div className={styles.position} dangerouslySetInnerHTML={{ __html: props.position || '' }} />
        <div className={styles.contacts}>
          <a href={`mailto:${props.email}`} className={styles.email}>{props.email}</a>
          <a href={`tel:${props.phone}`} className={styles.phone}>{props.phone}</a>
        </div>
      </div>
    </div>
  );
};
