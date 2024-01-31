export const BASE_URL = 'https://register.nomoreparties.co';

export const register = ({ email, password }) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      password: password,
      email: email,
    }),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(res.status);
    })

    .catch((error) => {
      console.log(`Error: ${error}`);
    });
};
