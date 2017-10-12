'use strict';

var configBase = require('./config.base');

var config = {
  production: {
    appUrl: 'https://fake-moneywave.herokuapp.com',
    port: process.env['PORT'] || 8080,
    db: {
      urlLive: process.env['DATABASE_URL']
    },
    telesign: {
      apiKey: 'ojLJzeqbkn2MLwPzf1+MGLTamnDoiO1r1WzcgB4DQbdT5xMuGbZ66vtUh/NLXbx0bXnES3iJRUPBLWiugKxs+g==',
      customerId: '9A95CEB0-8825-4AE4-91F8-1904CEBD797D',
      restEndpoint: 'https://rest-api.telesign.com',
      timeout: 10 * 1000
    },
    mailgun: {
      apiKey: 'key-c7d1548ad07d22c453bae353695b43ce',
      pubKey: 'pubkey-6ab24688986084806aeec3e391289ee2'
    }
  },
  development: {
    appUrl: 'localhost',
    port: process.env['PORT'] || 8080,
    db: {
      urlLive: 'mysql://root:yahweh@localhost/fakemoneywave'
    },
    telesign: {
      apiKey: 'ojLJzeqbkn2MLwPzf1+MGLTamnDoiO1r1WzcgB4DQbdT5xMuGbZ66vtUh/NLXbx0bXnES3iJRUPBLWiugKxs+g==',
      customerId: '9A95CEB0-8825-4AE4-91F8-1904CEBD797D',
      restEndpoint: 'https://rest-api.telesign.com',
      timeout: 10 * 1000
    },
    mailgun: {
      apiKey: 'key-c7d1548ad07d22c453bae353695b43ce',
      pubKey: 'pubkey-6ab24688986084806aeec3e391289ee2'
    }
  },
  test: {
    appUrl: 'localhost',
    port: process.env['PORT'] || 8080,
    db: {
      urlLive: 'mysql://root:yahweh@localhost/fakemoneywave'
    },
    telesign: {
      apiKey: 'ojLJzeqbkn2MLwPzf1+MGLTamnDoiO1r1WzcgB4DQbdT5xMuGbZ66vtUh/NLXbx0bXnES3iJRUPBLWiugKxs+g==',
      customerId: '9A95CEB0-8825-4AE4-91F8-1904CEBD797D',
      restEndpoint: 'https://rest-api.telesign.com',
      timeout: 10 * 1000
    },
    mailgun: {
      apiKey: 'key-c7d1548ad07d22c453bae353695b43ce',
      pubKey: 'pubkey-6ab24688986084806aeec3e391289ee2'
    }
  }
};

var serverConfig = Object.assign({}, configBase, config[configBase.env], {});

module.exports = serverConfig;