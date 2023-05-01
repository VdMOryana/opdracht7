import React, { useState } from 'react';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    // Voer hier code uit om de inloggegevens te verifiëren en de gebruiker in te loggen
  };

  return (
    <div>
      <h1>Inloggen</h1>
      <form>
        <label>
          Gebruikersnaam:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <br />
        <label>
          Wachtwoord:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>Inloggen</button>
      </form>
    </div>
  );
}

export default LoginPage;
