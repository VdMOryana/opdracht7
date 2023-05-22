import React from 'react';
import Head from 'next/head';

import Image from 'next/image';
import Logo from '../../public/Logo.png';

import styles from '@/styles/Help.module.css';

export default function DefecteFiets() {
    return(
        <>
        <Head>
          <title> Antwerpen Rollers </title>
        </Head>

        <main >
          <div className={styles.Header}>
              < Image className={styles.Logo}
              src ={Logo} 
              alt="Logo"
              />
          </div>
        </main>
        </>
    )
}