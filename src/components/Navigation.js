import React from 'react';
import styles from '@/styles/NavigationBar.module.css'

function NavigationBar() {
  return (
    <div className={styles.navigationBar}>
      <button className="homeButton">Home</button>
      <div className="spacer"></div>
      <button className="accountButton">Account</button>
    </div>
  );
}

export default NavigationBar;