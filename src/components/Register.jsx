import React, { useState } from 'react';
import Header from './Header';
import Signs from './Signs';
import { Link, useNavigate } from 'react-router-dom';
import * as auth from '../utils/auth';

function Register() {
  const [userCredentials, setuserCredentials] = useState({
    email: ' ',
    password: ' ',
  });
  const navigate = useNavigate();
  const [successRegister, setsuccessRegister] = useState(null);

  function handleChange(evt) {
    const { name, value } = evt.target;
    setuserCredentials({
      ...userCredentials,
      [name]: value,
    });
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    auth
      .register(userCredentials.email, userCredentials.password)
      .then((data) => {
        console.log(data);

        if (data) {
          setsuccessRegister(true);
          navigate('../signin');
        } else {
          setsuccessRegister(false);
        }
      });
  }

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
          required
        />
      </Signs>
    </>
  );
}

export default Register;
