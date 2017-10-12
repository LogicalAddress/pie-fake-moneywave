const jwt = require('jwt-simple')
/*
* https://moneywave-doc.herokuapp.com/index.html#authentication
* with the authorization token and it’s also important to note 
* that the token expires every 2 hours. 
*/
const generateToken = (client, clientSecret) => {
    let token = jwt.encode({
        client,
        exp: (Date.now()) + 7200000 //now + 2hrs, 
    }, "SERVER_SECRET" + clientSecret)
    
    return token
}

module.exports = generateToken