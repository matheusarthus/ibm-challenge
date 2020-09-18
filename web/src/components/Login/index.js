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

  return (
    <Container>
      <Ilustration src={ilustration} />
      <Logo>This Error will be fine.</Logo>

      <GoogleButton type="submit" onClick={() => loginWithGoogle()}>
        <FcGoogle />
        <span>Sign in with Google</span>
      </GoogleButton>
      <TwitterButton type="submit">
        <FiTwitter color="#fff" />
        <span>Sign in with Twitter</span>
      </TwitterButton>
      <LinkedinButton type="submit">
        <FaLinkedinIn />
        <span>Sign in with Linkedin</span>
      </LinkedinButton>
    </Container>
  );
}

export default Login;
