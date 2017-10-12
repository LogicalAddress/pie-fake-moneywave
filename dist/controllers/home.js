'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();


/* GET users listing. */
router.get('/', function (req, res, next) {
  res.sendFile(_path2.default.resolve(__dirname, './../../public', 'index.html'));
});

module.exports = router;