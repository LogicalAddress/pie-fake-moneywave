'use strict';

var config = require('../config/config.server');
var router = require('express').Router();
var models = require('../models');
var _ = require('lodash');
var generateToken = require('../helpers/generateToken');
/**
 * Access token
 * This endpoint provides you with your authorization token
 * 
 * POST https://moneywave.herokuapp.com/v1/merchant/verify
 * https://moneywave-doc.herokuapp.com/index.html#get-access-token
 * 
 */
router.post('/v1/merchant/verify', function (req, res, next) {
  var _req$body = req.body,
      _req$body$apiKey = _req$body.apiKey,
      apiKey = _req$body$apiKey === undefined ? '' : _req$body$apiKey,
      _req$body$secret = _req$body.secret,
      secret = _req$body$secret === undefined ? '' : _req$body$secret;

  if (apiKey != 'ts_LieLieApiKey', secret != 'ts_LieLieApiSecret') {
    return res.status(400).json({
      "status": "failure",
      "message": "we don't like secrets"
    });
  }
  return res.status(200).json({
    "status": "success",
    "token": generateToken({
      apiKey: apiKey
    }, secret), // a valid merchant token
    "config": {}
  });
});

module.exports = router;