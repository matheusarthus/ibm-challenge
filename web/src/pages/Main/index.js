import React, { useEffect } from 'react';

// import { Container } from './styles';

import history from '../../services/history';

function Main() {
  useEffect(() => {
    console.log('main');
  }, []);

  const logOut = () => {
    window.open('http://localhost:3333/auth/logout', '_self');
  };

  return (
    <div>
      <h1>MAIN</h1>
      <div>
        <button type="button" onClick={() => logOut()}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Main;
