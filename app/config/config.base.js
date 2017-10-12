const env = process.env.NODE_ENV || 'development'

const configBase = {
  development: {
    apiUrl: 'localhost'
  },
  production: {
    apiUrl: '',
  },
  test: {
    apiUrl: ''
  },
}

module.exports = Object.assign({}, configBase[env], {
  env,
  appName: 'fake-moneywave.herokuapp.com',
})