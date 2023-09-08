class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
    this._authorization = headers.authorization;
    this._cardId = "64f77814e5aaa3082e748197";
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        authorization: this._authorization,
      },
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
  }
  cardsAddedRequest() {
    return fetch(`${this._baseUrl}cards`, {
      headers: {
        authorization: this._authorization,
      },
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
  }

  changeLikeCardStatus() {
    return fetch(`${this._baseUrl}cards/${this._cardId}`, {
      method: "GET",
      headers: {
        authorization: this._authorization,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res.status);
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(`Error: ${error}`);
      });
  }
}

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/web_es_07/",
  headers: {
    authorization: "d73ff8a4-5ad7-42cb-999c-d084ca2e6847",
    "content-Type": "application/json",
  },
});
export default api;
