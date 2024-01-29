import React from 'react';
import Header from './Header';
import Signs from './Signs';
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
      <Signs
        header={'Inicia sesión'}
        buttonText={'Inicia sesión'}
        linkSpan={'../signup'}
        linkSpanText={'¿Aún no eres miembro? Regístrate aquí'}
      >
        <input
          type='text'
          className='sign__input'
          placeholder='Correo electrónico'
          id='email'
          name='place-name'
          minLength='4'
          maxLength='30'
          required
        />
        <input
          type='text'
          className='sign__input'
          placeholder='Contraseña'
          id='password'
          name='place-name'
          minLength='4'
          maxLength='30'
          required
        />
      </Signs>
    </>
  );
}

export default Login;
