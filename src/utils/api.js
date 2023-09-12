class Api {
  constructor({ address, groupId, token }) {
    // this._baseUrl = baseUrl;
    this._address = address;
    // this._headers = headers;
    this._groupId = groupId;
    this._token = token;
    // this._authorization = headers.authorization;
    this._cardId = "64f77814e5aaa3082e748197";
  }

  getUserInfo() {
    return fetch(`${this._address}/${this._groupId}/users/me`, {
      headers: {
        authorization: this._token,
        "content-Type": "application/json",
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
    return fetch(`${this._address}/${this._groupId}/cards`, {
      headers: {
        authorization: this._token,
        "content-Type": "application/json",
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

  changeLikeCardStatus(cardId, isLiked) {
    console.log(isLiked);
    if (isLiked) {
      return fetch(`${this._address}/${this._groupId}/cards/likes/${cardId}`, {
        method: "DELETE",
        headers: {
          authorization: this._token,
          "content-Type": "application/json",
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
    } else {
      return fetch(`${this._address}/${this._groupId}/cards/likes/${cardId}`, {
        method: "PUT",
        headers: {
          authorization: this._token,
          "content-Type": "application/json",
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
  }
}

// const api = new Api({
//   baseUrl: "https://around.nomoreparties.co",
//   headers: {
//     authorization: "d73ff8a4-5ad7-42cb-999c-d084ca2e6847",
//     "content-Type": "application/json",
//   },
// });

const api = new Api({
  address: "https://around.nomoreparties.co/v1",
  groupId: `web_es_07/`,
  token: "d73ff8a4-5ad7-42cb-999c-d084ca2e6847",
});
export default api;
