const round = (value, decimals = 0) => (
  Number(Math.round(value+'e'+decimals)+'e-'+decimals)
)

module.exports = (amount = 45, fee = 0) => {
  amount = parseFloat(amount)//maybe with round
  fee = parseFloat(fee)
  const mwPercentage = 0.014, mwBaseFee = 10
  let moneywaveCommission = (mwPercentage * amount) + mwBaseFee
  let merchantCommission = fee

  moneywaveCommission = round(moneywaveCommission)
  let chargedFee = moneywaveCommission + merchantCommission;
  
  return {
    amount: amount * 100,
    moneywaveCommission: moneywaveCommission * 100,
    chargedFee: (chargedFee) * 100,
    amountToCharge: (chargedFee + amount) * 100,
    merchantCommission: merchantCommission * 100,
    netDebitAmount: (chargedFee + amount) * 100,
  }
}