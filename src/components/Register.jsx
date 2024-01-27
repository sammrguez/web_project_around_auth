import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <>
      <Header>
        <Link to='/signup' className='header__sign'>
          {' '}
          Iniciar Sesión
        </Link>
      </Header>
    </>
  );
}

export default Register;
