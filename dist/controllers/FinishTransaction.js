'use strict';

var config = require('../config/config.server');
var router = require('express').Router();
var models = require('../models');
var _ = require('lodash');
var decodeToken = require('../helpers/decodeToken');

/**
 * 
 */
router.post('/v1/transfer/charge/auth/card', function (req, res, next) {
    var _req$body = req.body,
        _req$body$transaction = _req$body.transactionRef,
        transactionRef = _req$body$transaction === undefined ? null : _req$body$transaction,
        _req$body$otp = _req$body.otp,
        otp = _req$body$otp === undefined ? null : _req$body$otp;


    if (true) {
        //verify transactionToken
        models.transaction.findOne({
            where: { flutterChargeReference: transactionRef, transaction_status: 'started' }
        }).then(function (trx) {
            if (!trx || !trx.id) {
                return res.status(401).json({
                    "status": "error",
                    "message": "transaction reference cannot be used twice"
                });
            }
            trx.transaction_status = 'completed';
            trx.save().then(function (updated) {
                return res.status(200).json({
                    "status": "success",
                    "data": {
                        "id": 5030,
                        "type": "transfer",
                        "firstName": trx.firstName,
                        "lastName": trx.lastName,
                        "phoneNumber": trx.phoneNumber,
                        "recipientPhone": null,
                        "isCardValidationSuccessful": false,
                        "isDeliverySuccessful": true,
                        "status": "completed",
                        "medium": "web",
                        "ip": "129.56.0.165",
                        "exchangeRate": null,
                        "amountToSend": trx.amountToSend / 100,
                        "amountToCharge": trx.amountToCharge / 100,
                        "disburseCurrency": "NGN",
                        "chargeCurrency": "NGN",
                        "flutterChargeResponseCode": "00",
                        "flutterChargeResponseMessage": "Approved Or Completed Successfully",
                        "flutterDisburseResponseMessage": "Approved Or Completed Successfully",
                        "flutterChargeReference": trx.flutterChargeReference,
                        "flutterDisburseReference": trx.flutterChargeReference,
                        "flutterDisburseResponseCode": "00",
                        "merchantCommission": trx.merchantCommission / 100,
                        "moneywaveCommission": trx.moneywaveCommission / 100,
                        "netDebitAmount": trx.netDebitAmount / 100,
                        "chargedFee": trx.chargedFee / 100,
                        "receiptNumber": null,
                        "redirectUrl": "http://logicaladdress.com",
                        "meta": { "chargeMethod": "VBVSECURECODE" },
                        "createdAt": trx.createdAt,
                        "updatedAt": trx.updatedAt,
                        "deletedAt": null,
                        "userId": 205,
                        "merchantId": 140,
                        "beneficiaryId": 19,
                        "accountId": 6,
                        "cardId": null,
                        "is_completed": true
                    }
                });
            }).catch(function (error) {});
        }).catch(function (err) {
            return res.status(401).json({
                "status": "error",
                "message": "transaction reference not found, please commence the transaction again"
            });
        });
    } else {
        return res.status(401).json({
            "status": "error",
            "message": "Your token as expired or doesn't exist, kindly request a \
               new one every 2hrs. See https://moneywave-doc.herokuapp.com/index.html#authentication"
        });
    }
});

module.exports = router;