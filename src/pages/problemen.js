import React from 'react';
import Head from 'next/head';

import Image from 'next/image';
import Logo from '../../public/Logo.png';

import styles from '@/styles/Help.module.css';

export default function Problemen() {
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

          <div>
            <h1 className={styles.TussenTitels}> Problemen bij nemen of terugplaatsen fiets </h1>
            <p className={styles.OnderTitels}> Slotnummer </p>
            <input className={styles.SearchBalk} type="text"/>

            <p className={styles.OnderTitels}> Fietsnummer </p>
            <input className={styles.SearchBalk} type="text"/>

            <p className={styles.OnderTitels}> Stationsnummer </p>
            <input className={styles.SearchBalk} type="text"/>

          </div>


          <button className={styles.SearchButton} > Verzenden </button>

        </main>
        </>
    )
}

