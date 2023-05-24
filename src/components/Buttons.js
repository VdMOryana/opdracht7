import React from 'react';
import Link from 'next/link';
import styles from '@/styles/ButtonGroup.module.css'

function ButtonGroup() {
  return (
    <div className={styles.ButtonGroup}>
      <Link href="/defecte_fiets">
        <button className={styles.button}> Defecte fiets </button>
      </Link>
      <Link href="/defect_station">
      <button className={styles.button}> Defect station </button>
      </Link>
      <Link href="/problemen">
      <button className={styles.button}> Problemen bij nemen of terugplaatsen fiets </button>
      </Link>
      <Link href="/account">
      <button className={styles.button}> Kaart verloren </button>
      </Link>
    </div>
  );
}

export default ButtonGroup;
