const TokenService = {
  getAuthToken() {
    let storage = localStorage.getItem('config');
    storage = JSON.parse(storage);
    return storage.TOKEN_KEY;
  },
  getUserId() {
    let storage = localStorage.getItem('config');
    storage = JSON.parse(storage);
    return storage.USER_ID;
  },
  clearAuthToken() {
    window.localStorage.removeItem('config');
  },
  hasAuthToken() {
    console.log('logged in? ', !!localStorage['config']);
    return !!localStorage['config'];
  },
  makeBasicAuthToken(userName, password) {
    return window.btoa(`${userName}:${password}`);
  },
};

export default TokenService;
