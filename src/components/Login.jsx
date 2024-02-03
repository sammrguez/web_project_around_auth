import React, { useEffect, useState } from 'react';
import Header from './Header';
import Signs from './Signs';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import * as auth from '../utils/auth';
import InfoTooltipo from './InfoTooltipo';

function Login({ handleLogin }) {
  const navigate = useNavigate();
  const [userCredentials, setuserCredentials] = useState({
    email: '',
    password: '',
  });

  const [successRegister, setsuccessRegister] = useState(false);

  const [shoulBeInfoOpen, setShoulBeInfoOpen] = useState(false);

  const location = useLocation();

  function onCloseInfoTool() {
    setShoulBeInfoOpen(false);
  }

  useEffect(() => {
    console.log('shoulBeInfoOpenlog1');
    console.log(shoulBeInfoOpen);
    if (location.state === 'success') {
      setShoulBeInfoOpen(true);
      setsuccessRegister(true);

      console.log('shoulBeInfoOpenlog2');
      console.log(shoulBeInfoOpen);
    }
  }, [location.state]);

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
      <InfoTooltipo
        isSuccess={successRegister}
        shoulBeInfoOpen={shoulBeInfoOpen}
        onCloseBtn={onCloseInfoTool}
      />
    </>
  );
}

export default Login;
