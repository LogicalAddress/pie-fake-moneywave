const round = (value, decimals = 0) => (
  Number(Math.round(value+'e'+decimals)+'e-'+decimals)
)

module.exports = (amount = 45, fee = 0) => {
  amount = round(parseFloat(amount))
  fee = parseFloat(fee)
  const mwPercentage = 0.014, mwBaseFee = 10
  let moneywaveCommission = (mwPercentage * amount) + mwBaseFee
  let merchantCommission = fee - moneywaveCommission

  moneywaveCommission = round(moneywaveCommission)
  merchantCommission = round(merchantCommission)
  
  return {
    amount: amount * 100,
    moneywaveCommission: moneywaveCommission * 100,
    chargedFee: (moneywaveCommission + merchantCommission) * 100,
    merchantCommission: merchantCommission * 100,
    netDebitAmount: (amount - (moneywaveCommission + merchantCommission)) * 100
  }
}