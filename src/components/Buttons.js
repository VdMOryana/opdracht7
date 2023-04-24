import React from 'react';
import styles from '@/styles/ButtonGroup.module.css'

function ButtonGroup() {
  return (
    <div className={styles.ButtonGroup}>
      <button className={styles.button}> Defecte fiets </button>
      <button className={styles.button}> Defect station </button>
      <button className={styles.button}> Problemen bij nemen of terugplaatsen fiets </button>
      <button className={styles.button}> Kaart verloren </button>
    </div>
  );
}

export default ButtonGroup;
