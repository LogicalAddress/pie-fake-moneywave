'use strict';

var unique = require("unique-key");

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('cards', [{
      id: 'crd_' + unique(),
      card_no: '4242424242424242',
      cvv: '234',
      expiry_year: '20',
      expiry_month: '07',
      pin: '1239',
      success_response: "Charge Successful",
      failure_response: '',
      card_is_valid: true
    }, {
      id: 'crd_' + unique(),
      card_no: '4000056655665556',
      cvv: '454',
      expiry_year: '20',
      expiry_month: '06',
      pin: '1529',
      success_response: "Charge Successful",
      failure_response: '',
      card_is_valid: true
    }, {
      id: 'crd_' + unique(),
      card_no: '5555555555554444',
      cvv: '1003',
      expiry_year: '21',
      expiry_month: '11',
      pin: '9235',
      success_response: "Charge Successful",
      failure_response: '',
      card_is_valid: true
    }, {
      id: 'crd_' + unique(),
      card_no: '5200828282828210',
      cvv: '234',
      expiry_year: '21',
      expiry_month: '08',
      pin: '1240',
      success_response: "",
      failure_response: 'Charge Failed',
      card_is_valid: false
    }, {
      id: 'crd_' + unique(),
      card_no: '5105105105105100',
      cvv: '455',
      expiry_year: '21',
      expiry_month: '07',
      pin: '1529',
      success_response: "",
      failure_response: 'Charge Failed',
      card_is_valid: false
    }, {
      id: 'crd_' + unique(),
      card_no: '4000000400000008',
      cvv: '1003',
      expiry_year: '22',
      expiry_month: '12',
      pin: '2454',
      success_response: "",
      failure_response: 'Charge Failed',
      card_is_valid: false
    }, {
      id: 'crd_' + unique(),
      card_no: '5061082001206937280',
      cvv: '1003',
      expiry_year: '21',
      expiry_month: '11',
      pin: '9235',
      success_response: "Charge Successful",
      failure_response: '',
      card_is_valid: true
    }], {});
  },

  down: function down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('cards', null, {});
  }
};