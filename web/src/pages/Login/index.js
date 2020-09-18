import React, { useEffect, useState } from 'react';

// import { Container } from './styles';

import api from '../../services/api';
import history from '../../services/history';

function Login() {
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

        if (response.data.success) {
          history.push('/main', { user: response.data.user });
        }
      } catch (err) {
        console.log(err);
      }
    }

    autoLogin();
  }, []);

  const loginWithGoogle = async () => {
    window.open('http://localhost:3333/auth/google', '_self');
  };

  return (
    <div>
      <h1>Login</h1>
      <div>
        <button type="button" onClick={() => loginWithGoogle()}>
          Login with google
        </button>
      </div>
    </div>
  );
}

export default Login;
