import React, { useState } from 'react';
import Header from './Header';
import Signs from './Signs';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [userCredentials, setuserCredentials] = useState({
    email: ' ',
    password: ' ',
  });

  function handleChange(evt) {
    const { name, value } = evt.target;
    setuserCredentials({
      ...userCredentials,
      [name]: value,
    });
  }
  function handleSubmit() {}

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
        onSubmit={handleSubmit}
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
