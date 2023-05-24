import React from 'react';
import Head from 'next/head';
import DefFiets from '@/components/DefecteFiets';


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

          <div>
            <h1 className={styles.TussenTitels}> Melding defecte fiets </h1>
            <p className={styles.OnderTitels}> Fietsnummer </p>
            <input className={styles.SearchBalk} type="text"/>
          </div>

          <div>
            <p className={styles.OnderTitels}> U kan verschillende opties kiezen </p>
          </div>

          <DefFiets/>

          <button className={styles.SearchButton} > Verzenden </button>

        </main>
        </>
    )
}

