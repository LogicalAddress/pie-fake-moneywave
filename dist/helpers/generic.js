'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var config = require('../config/config.server');
var googleLibphonenumber = require('google-libphonenumber');
var PNF = googleLibphonenumber.PhoneNumberFormat;
var phoneUtil = googleLibphonenumber.PhoneNumberUtil.getInstance();

var TeleSignSDK = require('telesignsdk');
var _config$telesign = config.telesign,
    apiKey = _config$telesign.apiKey,
    customerId = _config$telesign.customerId,
    restEndpoint = _config$telesign.restEndpoint,
    timeout = _config$telesign.timeout;

var telesign = new TeleSignSDK(customerId, apiKey, restEndpoint, timeout);

var hasOwnProperty = Object.prototype.hasOwnProperty;

module.exports = {
  formatPhone: function formatPhone(phone) {
    var countryCode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'NG';

    return phoneUtil.format(phoneUtil.parse(phone, countryCode), PNF.E164).substr(1);
  },

  isEmpty: function isEmpty() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};


    // null and undefined are 'empty'
    if (obj == null) return true;

    // Assume if it has a length property with a non-zero value
    // that that property is correct.
    if (obj.length > 0) return false;
    if (obj.length === 0) return true;

    // If it isn't an object at this point
    // it is empty, but it can't be anything *but* empty
    // Is it empty?  Depends on your application.
    if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') {
      return true;
    }

    // Otherwise, does it have any properties of its own?
    // Note that this doesn't handle
    // toString and valueOf enumeration bugs in IE < 9
    for (var key in obj) {
      if (hasOwnProperty.call(obj, key)) return false;
    }

    return true;
  },
  sendSms: function sendSms() {
    var body = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var recipient = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var messageType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'OTP';

    return new Promise(function (resolve, reject) {
      telesign.sms.message(function (err, reply) {
        if (err) {
          console.log('Error: Could not reach TeleSign\'s servers');
          console.error(err); // network failure likely cause for error
          reject(err);
        } else {
          console.log('Message sent to ' + recipient, body);
          console.log(reply);
          resolve(reply); // save the reference_id to check status of the message
        }
      }, recipient, body, messageType);
    });
  },
  createOrUpdate: function createOrUpdate(model) {
    var where = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var defaults = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    model.findOne({
      where: where
    }).then(function (res) {
      if (res && !undefined.isEmpty(res)) {
        return res.update(defaults);
      } else {
        var newObj = Object.assign(where, defaults);
        return model.create(newObj);
      }
    });
  }
};