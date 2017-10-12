'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _uniqueKey = require('unique-key');

var _uniqueKey2 = _interopRequireDefault(_uniqueKey);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (randomId) {
  return function () {
    var len = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 16;
    var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    return (0, _uniqueKey2.default)(len, prefix);
  };
};