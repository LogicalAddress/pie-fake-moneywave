
const config = require('../config/config.server')
const router = require('express').Router()
const models = require('../models')
const _ = require('lodash')
const decodeToken = require('../helpers/decodeToken')

/**
 * 
 */
router.post('/v1/transfer/charge/auth/card', (req, res, next) => {

    let { transactionRef = null, otp = null } = req.body

    if(true){//verify transactionToken

        return res.status(200).json({
            "status": "success",
        "data": 
         { 
           "id": 5030,
           "type": "transfer",
           "firstName": "John",
           "lastName": "Doe",
           "phoneNumber": "+2348105667440",
           "recipientPhone": null,
           "isCardValidationSuccessful": false,
           "isDeliverySuccessful": true,
           "status": "completed",
           "medium": "web",
           "ip": "129.56.0.165",
           "exchangeRate": null,
           "amountToSend": 500,
           "amountToCharge": 590,
           "disburseCurrency": "NGN",
           "chargeCurrency": "NGN",
           "flutterChargeResponseCode": "00",
           "flutterChargeResponseMessage": "Approved Or Completed Successfully",
           "flutterDisburseResponseMessage": "Approved Or Completed Successfully",
           "flutterChargeReference": "MWV-1489516350660",
           "flutterDisburseReference": "MWV-1489516350660",
           "flutterDisburseResponseCode": "00",
           "merchantCommission": 45,
           "moneywaveCommission": 0,
           "netDebitAmount": 590,
           "chargedFee": 90,
           "receiptNumber": null,
           "redirectUrl": "your_redirect_url",
           "meta": {"chargeMethod":"VBVSECURECODE"},
           "createdAt": "2017-03-14T18:32:30.000Z",
           "updatedAt": "2017-03-14T18:32:46.000Z",
           "deletedAt": null,
           "userId": 205,
           "merchantId": 140,
           "beneficiaryId": 19,
           "accountId": 6,
           "cardId": null,
           "user": 
            { "id": 205,
              "email": "michaelonyeforo112@gmail.com",
              "saveCard": true,
              "createdAt": "2017-01-20T15:17:01.000Z",
              "updatedAt": "2017-01-20T15:17:01.000Z",
              "deletedAt": null },
           "account": 
            { "id": 6,
              "accountNumber": "0690000004",
              "accountName": "SHAWN MICHAELS",
              "bankCode": "044",
              "bankName": "",
              "userId": 7,
              "currency": "NGN",
              "createdAt": "2016-10-17T15:55:15.000Z",
              "updatedAt": "2016-10-17T15:55:15.000Z",
              "deletedAt": null },
           "beneficiary": 
            { "id": 19,
              "accountNumber": "0690000005",
              "accountName": "ANGUS BROWN",
              "bankCode": "044",
              "bankName": "",
              "userId": 0,
              "currency": "NGN",
              "createdAt": "2016-11-27T14:51:42.000Z",
              "updatedAt": "2016-11-27T14:51:42.000Z",
              "deletedAt": null },
            "card": null,
           "is_completed": true
             } 
       });
    }else{
        return res.status(401).json({
            "status": "error",
            "message": "Your token as expired or doesn't exist, kindly request a \
               new one every 2hrs. See https://moneywave-doc.herokuapp.com/index.html#authentication"
          });
    }
})


 
module.exports = router