const round = (value, decimals = 0) => (
  Number(Math.round(value+'e'+decimals)+'e-'+decimals)
)

module.exports = (amount = 0) => {
  amount = parseFloat(amount)
  const mwPercentage = 0.014, mwBaseFee = 10
  let moneywaveCommission = (mwPercentage * amount) + mwBaseFee
  
  amount = round(amount)
  moneywaveCommission = round(moneywaveCommission)
  
  return {
    amount: amount * 100,
    moneywaveCommission: moneywaveCommission * 100
  }
}