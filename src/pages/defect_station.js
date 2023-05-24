import React from 'react';
import DefStation from '@/components/DefectStation';

import styles from '@/styles/Help.module.css';

export default function DefectStation() {
    return(
        <>
        <main >
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

