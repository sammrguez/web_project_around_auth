import React from 'react';
import Header from './Header';
import Signs from './Signs';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <>
      <Header>
        <Link to='/signin' className='header__sign'>
          {' '}
          Iniciar Sesión
        </Link>
      </Header>
      <Signs header={'Regístrate'} />
    </>
  );
}

export default Register;
