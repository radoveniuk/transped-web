import { Montserrat, Montserrat_Alternates } from 'next/font/google';

export const DEFAULT_TEXT_FONT = Montserrat({
  subsets: ['latin', 'cyrillic'],
  weight: '500',
});

export const PAGE_TITLE_FONT = Montserrat_Alternates({
  subsets: ['latin', 'cyrillic'],
  weight: '600',
});