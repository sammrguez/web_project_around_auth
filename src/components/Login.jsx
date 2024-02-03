import React, { useState } from 'react';
import Header from './Header';
import Signs from './Signs';
import { Link, useNavigate } from 'react-router-dom';
import * as auth from '../utils/auth';

function Login({ handleLogin }) {
  const navigate = useNavigate();
  const [userCredentials, setuserCredentials] = useState({
    email: '',
    password: '',
  });

  function handleChange(evt) {
    const { name, value } = evt.target;
    setuserCredentials({
      ...userCredentials,
      [name]: value,
    });
  }
  function handleSubmit(evt) {
    evt.preventDefault();
    console.log(userCredentials);
    if (!userCredentials.email || !userCredentials.password) {
      return;
    }
    auth
      .authorize(userCredentials.email, userCredentials.password)
      .then((data) => {
        console.log(data);
        if (data.token) {
          setuserCredentials({
            email: '',
            password: '',
          });

          navigate('/');
          handleLogin();
        }
      })
      .catch((err) => console.log(err));
  }
  // falta hacer el handle Loggin
  // data is undefined

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

export default Login;
