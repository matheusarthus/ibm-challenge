import React, { useState, useEffect } from 'react';

// import { Container } from './styles';

import Login from '../../components/Login';
import Dashboard from '../../components/Dashboard';

import api from '../../services/api';

function Main() {
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

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
          setAuthenticated(true);
          setUser(response.data.user);
        }
      } catch (err) {
        console.log(err);
      }
    }

    autoLogin();
  }, []);

  return authenticated ? <Dashboard user={user} /> : <Login />;
}

export default Main;
