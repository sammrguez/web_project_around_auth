import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <>
      <Header>
        <Link to='/signup' className='header__sign'>
          {' '}
          Registrate
        </Link>
      </Header>
    </>
  );
}

export default Login;
