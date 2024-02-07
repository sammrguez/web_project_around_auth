const BASE_URL = 'https://register.nomoreparties.co';

export const register = (email, password) => {
  console.log(`desde auth ${email} ${password}`);
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },

    body: JSON.stringify({
      email,
      password,
    }),
  })
    .then((res) => {
      console.log(res);
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(res.status);
    })
    .catch((error) => {
      console.log(`Error: ${error}`);
    });
};

export const authorize = (email, password) => {
  console.log(`desde auth auth ${email} y ${password}`);
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => {
      console.log(res);
      if (!res.ok) {
        throw new Error(`Error al registrarse: ${res.status}`);
      }

      return res.json();
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      throw new Error(`Error en la solicitud de registro: ${err.message}`);
    });
};

export const getToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return err;
    });
};
