import React from 'react';
import Head from 'next/head';
import DefStation from '@/components/DefectStation';


import Image from 'next/image';
import Logo from '../../public/Logo.png';

import styles from '@/styles/Help.module.css';

export default function DefectStation() {
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
            <h1 className={styles.TussenTitels}> Melding defect station </h1>
            <p className={styles.OnderTitels}> Stationsnummer </p>
            <input className={styles.SearchBalk} type="text"/>
          </div>

          <div>
            <p className={styles.OnderTitels}> U kan verschillende opties kiezen </p>
          </div>

          <DefStation/>

          <button className={styles.SearchButton} > Verzenden </button>

        </main>
        </>
    )
}

