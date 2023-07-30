import { ButtonHTMLAttributes } from 'react';

import styles from './Button.module.scss';
import { Montserrat_Alternates } from 'next/font/google';

const buttonFont = Montserrat_Alternates({
  subsets: ['latin', 'cyrillic'],
  weight: '600',
});

type ButtonVariant = 'contained' | 'outlined';

export default function Button({ variant = 'contained', className, ...props }: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: ButtonVariant }) {
  return (
    <button className={`${styles.button} ${buttonFont.className} ${styles[variant]} ${className}`} type="button" {...props} />
  );
}