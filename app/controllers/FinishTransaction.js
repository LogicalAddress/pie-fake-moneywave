
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
            { "transfer": 
                { "id": 5032,
                "type": "transfer",
                "firstName": "John",
                "lastName": "Doe",
                "phoneNumber": "+2348105667440",
                "recipientPhone": null,
                "isCardValidationSuccessful": false,
                "isDeliverySuccessful": false,
                "status": "started",
                "medium": "web",
                "ip": "129.56.0.165",
                "exchangeRate": null,
                "amountToSend": 500,
                "amountToCharge": 590,
                "disburseCurrency": "NGN",
                "chargeCurrency": "NGN",
                "flutterChargeResponseCode": "00",
                "flutterChargeResponseMessage": "Pending OTP validation",
                "flutterDisburseResponseMessage": null,
                "flutterChargeReference": "MWV-1489523230971",
                "flutterDisburseReference": null,
                "flutterDisburseResponseCode": null,
                "merchantCommission": 45,
                "moneywaveCommission": 0,
                "netDebitAmount": 590,
                "chargedFee": 90,
                "receiptNumber": null,
                "redirectUrl": "your_redirect_url",
                "meta": {"chargeMethod":"VBVSECURECODE"},
                "createdAt": "2017-03-14T20:27:10.000Z",
                "updatedAt": "2017-03-14T20:27:14.000Z",
                "deletedAt": null,
                "userId": 205,
                "merchantId": 140,
                "beneficiaryId": 19,
                "accountId": 6,
                "cardId": null,
                "account": {
                "accountName": "SHAWN MICHAELS",
                "accountNumber":"0690000004",
                "bankCode":"044",
                "bankName":"",
                "createdAt": "2016-10-17T15:55:15.000Z",
                "currency" : "NGN",
                "deletedAt":null
                },
                "beneficiary":{
                    "accountName":"ANGUS BROWN",
                    "accountNumber" :"0690000005",
                    "bankCode":"044",
                    "bankName":"",
                    "createdAt" : "2016-11-27T14:51:42.000Z",
                    "currency":"NGN",
                    "deletedAt":null,
                    "id":19,
                    "updatedAt":"2016-11-27T14:51:42.000Z",
                    "userId": 0
                    },
                "authparams":
                    {"description":"Please validate with the OTP sent to your mobile or email",
                    "validateparameter":"OTP"
                    },
                "pendingValidation": true 
                } 
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