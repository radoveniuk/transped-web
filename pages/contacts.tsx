import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';

export async function getStaticProps({ locale }: {locale: string}) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
        'contacts',
      ])),
    },
  };
}

export default function Contacts () {
  return (
    <>
      <Head>
        <title>Contacts | Transped s.r.o.</title>
        <meta name="description" content="Member of Grain Alliance" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>

      </main>
    </>
  );
}