import React, { useState } from 'react';

import styles from '@/styles/Account.module.css';


function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <>
    <main>

      <div>
        <h1 className={styles.TussenTitels}> Inloggen</h1>
        <form>
          <p className={styles.OnderTitels}> Gebruikersnaam </p>
            <input className={styles.SearchBalk} type="text"/>
          
          <p className={styles.OnderTitels}> Wachtwoord </p>
            <input className={styles.SearchBalk} type="text"/>

          <button className={styles.SearchButton}> Inloggen</button>
        </form>
      </div>
    </main>
    </>
  );
}

export default LoginPage;
