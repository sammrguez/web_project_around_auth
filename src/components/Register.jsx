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
      <Signs
        header={'Regístrate'}
        buttonText={'Regístrate'}
        linkSpan={'../signin'}
        linkSpanText={'¿Ya eres miembro? Inicia sesión aquí'}
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

export default Register;
