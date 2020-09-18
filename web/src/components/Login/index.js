import React from 'react';

import { FcGoogle } from 'react-icons/fc';
import { FiTwitter } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';

import {
  Container,
  Ilustration,
  Logo,
  GoogleButton,
  TwitterButton,
  LinkedinButton,
} from './styles';

import ilustration from '../../assets/ilustrate.jpg';

function Login() {
  const loginWithGoogle = async () => {
    window.open('http://localhost:3333/auth/google', '_self');
  };

  const loginWithTwitter = async () => {
    window.open('http://localhost:3333/auth/twitter', '_self');
  };

  const loginWithLinkedin = async () => {
    window.open('http://localhost:3333/auth/linkedin', '_self');
  };

  return (
    <Container>
      <Ilustration src={ilustration} />
      <Logo>This Error will be fine.</Logo>

      <GoogleButton type="button" onClick={() => loginWithGoogle()}>
        <FcGoogle />
        <span>Sign in with Google</span>
      </GoogleButton>
      <TwitterButton type="button" onClick={() => loginWithTwitter()}>
        <FiTwitter color="#fff" />
        <span>Sign in with Twitter</span>
      </TwitterButton>
      <LinkedinButton type="button" onClick={() => loginWithLinkedin()}>
        <FaLinkedinIn />
        <span>Sign in with Linkedin</span>
      </LinkedinButton>
    </Container>
  );
}

export default Login;
