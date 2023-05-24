import Head from 'next/head';
import Image from 'next/image';
import Logo from '../../public/Logo.png';

import React from 'react';
import styles from '@/styles/Layout.module.css'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Antwerpen Rollers</title>
      </Head>

    <main>
      <div className={styles.Header}>
          <Image className={styles.Logo}
            src ={Logo} 
            alt="Logo"
          />
        </div>
    </main>  
    </>
  )
}