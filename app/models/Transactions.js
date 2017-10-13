module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define('transaction', {
    id: {
      type: DataTypes.STRING(32),
      primaryKey: true,
    },
    firstName: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    phoneNumber: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    amountToSend: {
      type: DataTypes.INTEGER(20),
      defaultValue: 0,
      allowNull: false,
    },
    amountToCharge: {
        type: DataTypes.INTEGER(20),
        defaultValue: 0,
        allowNull: false,
    },
    merchantCommission: {
        type: DataTypes.INTEGER(20),
        defaultValue: 0,
        allowNull: false,
    },
    moneywaveCommission: {
        type: DataTypes.INTEGER(20),
        defaultValue: 0,
        allowNull: false,
    },
    netDebitAmount: {
        type: DataTypes.INTEGER(20),
        defaultValue: 0,
        allowNull: false,
    },
    flutterChargeReference: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    chargedBytoken: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    chargedFee: {
        type: DataTypes.INTEGER(20),
        defaultValue: 0,
        allowNull: false,
    },
    transaction_status: {
      type: DataTypes.STRING(32),
      defaultValue: 'started',
      allowNull: false,
    },
  })
  return Transaction
}