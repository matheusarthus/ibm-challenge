import React from 'react';

import { Container, Header, Form, Logo } from './styles';

function Dashboard() {
  const logOut = () => {
    window.open('http://localhost:3333/auth/logout', '_self');
  };

  return (
    <Container>
      <Header>
        <div>
          <Logo>This Error will be fine.</Logo>
        </div>
        <div>
          <button
            type="button"
            onClick={() => {
              logOut();
            }}
          >
            Log-out
          </button>
        </div>
      </Header>
      <Form />
    </Container>
  );
}

export default Dashboard;
