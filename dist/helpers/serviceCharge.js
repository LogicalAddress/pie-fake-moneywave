'use strict';

var round = function round(value) {
  var decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
};

module.exports = function () {
  var amount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 45;
  var fee = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  amount = parseFloat(amount);
  fee = parseFloat(fee);
  var mwPercentage = 0.014,
      mwBaseFee = 10;
  var moneywaveCommission = Math.floor(mwPercentage * amount + mwBaseFee);
  var merchantCommission = fee - moneywaveCommission;

  return {
    amount: amount * 100,
    moneywaveCommission: moneywaveCommission * 100,
    chargedFee: (moneywaveCommission + merchantCommission) * 100,
    merchantCommission: merchantCommission * 100,
    netDebitAmount: (amount - (moneywaveCommission + merchantCommission)) * 100
  };
};