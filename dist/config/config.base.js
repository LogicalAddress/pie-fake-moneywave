'use strict';

var env = process.env.NODE_ENV || 'development';

var configBase = {
  development: {
    apiUrl: 'localhost'
  },
  production: {
    apiUrl: ''
  },
  test: {
    apiUrl: ''
  }
};

module.exports = Object.assign({}, configBase[env], {
  env: env,
  appName: 'fake-moneywave.herokuapp.com'
});