import React from 'react';
import { useHistory } from 'react-router-dom';

import Container from '../../components/Container'
import { NavigationButton } from  './styles'

import logo from '../../assets/images/logo.png';

export default function Home() {
  const history = useHistory();

  return (
    <Container>
      <img src={logo} alt="logo-vale" ></img>
      <h1>Tool Services Filler</h1>
      <NavigationButton onClick={() => history.push('/vsc')}>VSC</NavigationButton>
      <NavigationButton onClick={() => history.push('/gdb')}>GDB</NavigationButton>
    </Container>
  );
}
