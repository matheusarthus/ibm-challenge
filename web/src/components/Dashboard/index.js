import React from 'react';

// import { Container } from './styles';

function Dashboard() {
  const logOut = () => {
    window.open('http://localhost:3333/auth/logout', '_self');
  };

  return <h1>Dashboard</h1>;
}

export default Dashboard;
