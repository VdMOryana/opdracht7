import React from 'react';
import Link from 'next/link';

import styles from '@/styles/Help.module.css';

export default function Problemen() {
    return(
        <>
        <main >

          <div>
            <h1 className={styles.TussenTitels}> Problemen bij nemen of terugplaatsen fiets </h1>
            <p className={styles.OnderTitels}> Slotnummer </p>
            <input className={styles.SearchBalk} type="text"/>

            <p className={styles.OnderTitels}> Fietsnummer </p>
            <input className={styles.SearchBalk} type="text"/>

            <p className={styles.OnderTitels}> Stationsnummer </p>
            <input className={styles.SearchBalk} type="text"/>

          </div>

          <Link href="verzenden">
            <button className={styles.SearchButton} > Verzenden </button>
          </Link>

        </main>
        </>
    )
}

