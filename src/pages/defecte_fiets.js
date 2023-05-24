import React from 'react';
import DefFiets from '@/components/DefecteFiets';

import styles from '@/styles/Help.module.css';

export default function DefecteFiets() {
    return(
        <>

        <main >
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

