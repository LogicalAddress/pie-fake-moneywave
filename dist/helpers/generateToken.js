"use strict";

var jwt = require('jwt-simple');
/*
* https://moneywave-doc.herokuapp.com/index.html#authentication
* with the authorization token and it’s also important to note 
* that the token expires every 2 hours. 
*/
var generateToken = function generateToken(client, clientSecret) {
    var token = jwt.encode({
        client: client,
        exp: Date.now() + 7200000 //now + 2hrs, 
    }, "SERVER_SECRET" + clientSecret);

    return token;
};

module.exports = generateToken;