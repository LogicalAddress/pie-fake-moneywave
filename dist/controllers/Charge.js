'use strict';

var config = require('../config/config.server');
var router = require('express').Router();
var models = require('../models');
var _ = require('lodash');
var decodeToken = require('../helpers/decodeToken');
var uniqueKey = require('unique-key');

/**
 * Card to Any Vault (Bank, Wallet etc)
 * Directly charge a customer
 * https://moneywave-doc.herokuapp.com/index.html#card-to-account
 * 
 */
router.post('/v1/transfer', function (req, res, next) {
  var _req$body = req.body,
      _req$body$firstname = _req$body.firstname,
      firstname = _req$body$firstname === undefined ? null : _req$body$firstname,
      _req$body$lastname = _req$body.lastname,
      lastname = _req$body$lastname === undefined ? null : _req$body$lastname,
      email = _req$body.email,
      phonenumber = _req$body.phonenumber,
      apiKey = _req$body.apiKey,
      narration = _req$body.narration,
      _req$body$medium = _req$body.medium,
      medium = _req$body$medium === undefined ? 'web' : _req$body$medium,
      _req$body$redirecturl = _req$body.redirecturl,
      redirecturl = _req$body$redirecturl === undefined ? 'https://logicaladdress.com' : _req$body$redirecturl,
      amount = _req$body.amount,
      _req$body$fee = _req$body.fee,
      fee = _req$body$fee === undefined ? '45' : _req$body$fee,
      _req$body$recipient = _req$body.recipient,
      recipient = _req$body$recipient === undefined ? 'wallet' : _req$body$recipient,
      _req$body$card_no = _req$body.card_no,
      card_no = _req$body$card_no === undefined ? null : _req$body$card_no,
      _req$body$cvv = _req$body.cvv,
      cvv = _req$body$cvv === undefined ? null : _req$body$cvv,
      _req$body$expiry_year = _req$body.expiry_year,
      expiry_year = _req$body$expiry_year === undefined ? null : _req$body$expiry_year,
      _req$body$expiry_mont = _req$body.expiry_month,
      expiry_month = _req$body$expiry_mont === undefined ? null : _req$body$expiry_mont,
      _req$body$charge_auth = _req$body.charge_auth,
      charge_auth = _req$body$charge_auth === undefined ? '' : _req$body$charge_auth,
      _req$body$pin = _req$body.pin,
      pin = _req$body$pin === undefined ? '' : _req$body$pin,
      _req$body$charge_with = _req$body.charge_with,
      charge_with = _req$body$charge_with === undefined ? null : _req$body$charge_with,
      _req$body$sender_acco = _req$body.sender_account_number,
      sender_account_number = _req$body$sender_acco === undefined ? null : _req$body$sender_acco,
      _req$body$sender_bank = _req$body.sender_bank,
      sender_bank = _req$body$sender_bank === undefined ? null : _req$body$sender_bank;


  if (apiKey != 'ts_LieLieApiKey') {
    return res.status(400).json({
      "status": "failure",
      "message": "we don't like secrets"
    });
  }
  // TODO: Do Validation as done in moneywave
  var decodedToken = decodeToken(req.headers['authorization'] || 'invalid', 'ts_LieLieApiSecret');
  if (decodedToken && decodedToken.client.apiKey == 'ts_LieLieApiKey' && decodedToken.exp > Date.now()) {

    if (firstname && lastname && card_no && cvv && expiry_year && expiry_month && !sender_account_number) {
      //This is a card transactions
      return models.card.findOne({
        where: {
          card_no: card_no,
          cvv: cvv,
          expiry_year: expiry_year,
          expiry_month: expiry_month
        },
        attributes: {
          exclude: []
        }
      }).then(function (card) {
        console.log(card);
        if (card && card.id !== undefined) {
          if (card.card_is_valid) {
            var charge = require("../helpers/serviceCharge")(amount);
            var flutterChargeReference = uniqueKey(10, 'FakeMW');
            var chargedFee = charge.moneywaveCommission + fee;
            var merchantCommission = Math.abs(fee - charge.moneywaveCommission);
            var moneywaveCommission = charge.moneywaveCommission;
            var netDebitAmount = charge.amount + fee;
            var amountToSend = charge.amount;
            var amountToCharge = charge.amount;
            models.transaction.create({
              id: uniqueKey(10, 'trx'),
              firstName: firstname,
              lastName: lastname,
              phoneNumber: phonenumber,
              flutterChargeReference: flutterChargeReference,
              chargedFee: chargedFee, merchantCommission: merchantCommission,
              moneywaveCommission: moneywaveCommission, netDebitAmount: netDebitAmount,
              amountToSend: amountToSend, amountToCharge: amountToCharge,
              chargedBytoken: req.headers['authorization'] || 'invalid'
            }).then(function (tranx) {
              console.log(tranx);
            });
            return res.status(200).json({
              "status": "success",
              "message": card.success_response,
              "data": {
                "transfer": { "id": 4998,
                  "type": "fund-wallet",
                  "firstName": firstname,
                  "lastName": lastname,
                  "phoneNumber": phonenumber,
                  "recipientPhone": null,
                  "isCardValidationSuccessful": false,
                  "isDeliverySuccessful": false,
                  "status": "started",
                  "medium": "web",
                  "ip": "54.196.45.207",
                  "exchangeRate": null,
                  amountToSend: amountToSend / 100,
                  amountToCharge: amountToCharge / 100,
                  "disburseCurrency": "NGN",
                  "chargeCurrency": "NGN",
                  "flutterChargeResponseCode": "02",
                  "flutterChargeResponseMessage": "Pending, Validation",
                  "flutterDisburseResponseMessage": null,
                  flutterChargeReference: flutterChargeReference,
                  "flutterDisburseReference": null,
                  "flutterDisburseResponseCode": null,
                  merchantCommission: merchantCommission / 100,
                  moneywaveCommission: moneywaveCommission / 100,
                  netDebitAmount: netDebitAmount / 100,
                  chargedFee: chargedFee / 100,
                  "receiptNumber": null,
                  "redirectUrl": "https://logicaladdress.com",
                  "meta": "{\"walletURef\":0,\"chargeMethod\":\"VBVSECURECODE\"}",
                  "createdAt": "2017-03-14T09:56:05.000Z",
                  "updatedAt": "2017-03-14T09:56:08.000Z",
                  "deletedAt": null,
                  "userId": 205,
                  "merchantId": 140,
                  "beneficiaryId": 13,
                  "accountId": null,
                  "cardId": 378,
                  "account": null,
                  "pendingValidation": true }
              } });
          }
          return res.status(401).json({
            status: "error",
            code: "INVALID_CARD",
            message: card.failure_response
          });
        } else {
          return res.status(401).json({
            status: "error",
            code: "INVALID_CARD",
            message: "Provided card is not a valid card"
          });
        }
      }).catch(function (error) {
        return res.status(error.status || 400).json({
          "status": "error",
          "code": "UNKNOWN_ERROR",
          message: error.message || 'Oops! Something went wrong'
        });
      });
    }

    if (firstname && lastname && charge_with && sender_account_number && sender_bank && !card_no) {
      //This is account to wallet, probably
      return res.status(200).json({
        status: "success"
      });
    }
  } else {
    return res.status(401).json({
      "status": "error",
      "message": "Your token as expired or doesn't exist, kindly request a \
           new one every 2hrs. See https://moneywave-doc.herokuapp.com/index.html#authentication"
    });
  }
});

module.exports = router;