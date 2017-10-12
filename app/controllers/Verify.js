const config = require('../config/config.server')
const router = require('express').Router()
const models = require('../models')
const _ = require('lodash')
const generateToken = require('../helpers/generateToken')
/**
 * Access token
 * This endpoint provides you with your authorization token
 * 
 * POST https://moneywave.herokuapp.com/v1/merchant/verify
 * https://moneywave-doc.herokuapp.com/index.html#get-access-token
 * 
 */
router.post('/v1/merchant/verify', (req, res, next) => {
  let { apiKey = '', secret = '' } = req.body
  if(apiKey != 'ts_LieLieApiKey', secret != 'ts_LieLieApiSecret'){
    return res.status(400).json({
        "status": "failure",
        "message": "we don't like secrets"
    });
  }
  return res.status(200).json({
    "status": "success",
    "token": generateToken({
      apiKey
    }, secret), // a valid merchant token
    "config":{}
  })
})
 
module.exports = router