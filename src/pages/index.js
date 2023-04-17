import styles from '@/styles/Home.module.css';

import Head from 'next/head';
import NavigationBar from '@/components/Navigation';

export default function Home() {
  return (
    <>
      <Head>
        <title>Antwerpen Rollers</title>
      </Head>
      <main>
        <NavigationBar/>
      </main>
    </>
  )
}