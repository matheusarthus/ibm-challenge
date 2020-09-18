import React, { useEffect } from 'react';

// import { Container } from './styles';

import api from '../../services/api';
import history from '../../services/history';

function Main() {
  useEffect(() => {
    async function autoLogin() {
      try {
        const response = await api.get('auth/login/success', {
          withCredentials: true,
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Credentials': true,
          },
        });

        if (!response.data.success) {
          history.push('/login');
        }
      } catch (err) {
        console.log(err);
      }
    }

    autoLogin();
  }, []);
  return (
    <div>
      <h1>MAIN</h1>
    </div>
  );
}

export default Main;
