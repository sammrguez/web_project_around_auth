import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <>
      <Header>
        <Link to='/login'> Iniciar Sesión</Link>
      </Header>
    </>
  );
}

export default Register;
