"use strict";

var jwt = require('jwt-simple');

var decodeToken = function decodeToken(token, clientSecret) {
    var object = jwt.decode(token, "SERVER_SECRET" + clientSecret);

    return object;
};

module.exports = decodeToken;