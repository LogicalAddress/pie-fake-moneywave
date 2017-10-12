const jwt = require('jwt-simple')

const decodeToken = (token, clientSecret) => {
    let object = jwt.decode(token, "SERVER_SECRET" + clientSecret)
    
    return object
}

module.exports = decodeToken