import Api from "./APIclass.js";
const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/web_es_07/",
  headers: {
    authorization: "d73ff8a4-5ad7-42cb-999c-d084ca2e6847",
    "content-Type": "application/json",
  },
});
export default api;
