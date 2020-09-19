import React, { useState } from 'react';

import { Container, Header, Form, Logo } from './styles';

function Dashboard({ user }) {
  const [question, setQuestion] = useState('');

  const logOut = () => {
    // window.open('http://localhost:3333/auth/logout', '_self');
    console.log(question);
  };

  return (
    <>
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
      <Container>
        <Form>
          <h2>{`Hello, ${user && user.username.split(' ')[0]}.`}</h2>
          <input
            placeholder="What is your ERROR?"
            onChange={(item) => {
              setQuestion(item.target.value);
            }}
          />
          <button type="button">GO!</button>
        </Form>
      </Container>
    </>
  );
}

export default Dashboard;
