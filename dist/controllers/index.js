'use strict';

var fs = require('fs');
var path = require('path');
var router = require('express').Router();
var _ = require('lodash');
var basename = path.basename(module.filename);

fs.readdirSync(__dirname).filter(function (file) {
  return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js';
}).forEach(function (file) {
  var route = require(path.join(__dirname, file));
  if (!_.isEmpty(route)) router.use(route);
});

module.exports = router;