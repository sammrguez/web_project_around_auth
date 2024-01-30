import React, { useState } from 'react';
import Header from './Header';
import Signs from './Signs';
import { Link } from 'react-router-dom';
import errorMessageImage from '../images/error_message.svg';
import successMessageImage from '../images/success_message.svg';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleChange(evt) {
    switch (evt.target.name) {
      case 'email':
        setEmail(evt.target.value);

        break;

      case 'password':
        setPassword(evt.target.value);

        break;
    }
  }

  function handleSubmit() {}

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
        onSubmit={handleSubmit}
      >
        <input
          type='email'
          className='sign__input'
          placeholder='Correo electrónico'
          id='email'
          name='email'
          minLength='4'
          maxLength='30'
          onChange={handleChange}
          value={email}
          required
        />
        <input
          type='password'
          className='sign__input'
          placeholder='Contraseña'
          id='password'
          name='password'
          minLength='4'
          maxLength='30'
          onChange={handleChange}
          value={password}
          required
        />
      </Signs>
    </>
  );
}

export default Register;
