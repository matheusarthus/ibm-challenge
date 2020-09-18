import React, { useEffect, useState } from 'react';

// import { Container } from './styles';

import api from '../../services/api';

function Login() {
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
