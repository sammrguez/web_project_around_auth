import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <Header>
      <Link to='/register'> Regístrate</Link>
    </Header>
  );
}

export default Login;
