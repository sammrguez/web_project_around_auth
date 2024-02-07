import React, { useState } from 'react';
import Header from './Header';
import Signs from './Signs';
import { Link, useNavigate } from 'react-router-dom';
import * as auth from '../utils/auth';
import InfoTooltip from '../components/InfoTooltip';

function Register() {
  const navigate = useNavigate();

  const [userCredentials, setuserCredentials] = useState({
    email: '',
    password: '',
  });

  const [successRegister, setsuccessRegister] = useState(false);
  const [shoulBeInfoOpen, setShoulBeInfoOpen] = useState(false);

  function onCloseInfoTool() {
    setShoulBeInfoOpen(false);
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setuserCredentials({
      ...userCredentials,
      [name]: value,
    });
    console.log(userCredentials);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    console.log(userCredentials);
    auth
      .register(userCredentials.email, userCredentials.password)
      .then((data) => {
        console.log(data);
        if (data) {
          navigate('../signin', { state: 'success' });
        } else {
          setShoulBeInfoOpen(true);
          setsuccessRegister(false);
        }
      });
    console.log(userCredentials);
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
      <InfoTooltip
        isSuccess={successRegister}
        shoulBeInfoOpen={shoulBeInfoOpen}
        onCloseBtn={onCloseInfoTool}
      />
    </>
  );
}

export default Register;
