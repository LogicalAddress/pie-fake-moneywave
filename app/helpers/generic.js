const config = require('../config/config.server')
const googleLibphonenumber = require('google-libphonenumber')
const PNF = googleLibphonenumber.PhoneNumberFormat
const phoneUtil = googleLibphonenumber.PhoneNumberUtil.getInstance()

const TeleSignSDK = require('telesignsdk')
const { apiKey, customerId, restEndpoint, timeout } = config.telesign
const telesign = new TeleSignSDK(customerId, apiKey, restEndpoint, timeout)

var hasOwnProperty = Object.prototype.hasOwnProperty

module.exports = {
  formatPhone: (phone, countryCode = 'NG') => {
    return phoneUtil.format(phoneUtil.parse(phone, countryCode), PNF.E164).substr(1)
  },

  isEmpty: (obj = {}) => {

    // null and undefined are 'empty'
    if (obj == null) return true

    // Assume if it has a length property with a non-zero value
    // that that property is correct.
    if (obj.length > 0)    return false
    if (obj.length === 0)  return true

    // If it isn't an object at this point
    // it is empty, but it can't be anything *but* empty
    // Is it empty?  Depends on your application.
    if (typeof obj !== 'object') {
      return true
    }

    // Otherwise, does it have any properties of its own?
    // Note that this doesn't handle
    // toString and valueOf enumeration bugs in IE < 9
    for (var key in obj) {
        if (hasOwnProperty.call(obj, key)) return false
    }

    return true
  },
  sendSms: (body = '', recipient = '', messageType = 'OTP')=> {
    return new Promise((resolve, reject) => {
      telesign.sms.message(function(err, reply){
        if(err){
          console.log('Error: Could not reach TeleSign\'s servers')
          console.error(err) // network failure likely cause for error
          reject(err)
        } else{
          console.log(`Message sent to ${recipient}`, body)
          console.log(reply)
          resolve(reply) // save the reference_id to check status of the message
        }
      },
      recipient,
      body,
      messageType)
    })
  },
  createOrUpdate: (model, where = {}, defaults = {}) => {
    model.findOne({
      where
    }).then(res => {
      if(res && !this.isEmpty(res)) {
        return res.update(defaults)
      } else {
        const newObj = Object.assign(where, defaults)
        return model.create(newObj)
      }
    })
  },
}
