'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.employeeGET = function employeeGET (req, res, next, employeename) {
  Default.employeeGET(employeename)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.employeePUT = function employeePUT (req, res, next, body) {
  Default.employeePUT(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.employeefindGET = function employeefindGET (req, res, next, find) {
  Default.employeefindGET(find)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.employeeidDELETE = function employeeidDELETE (req, res, next, id) {
  Default.employeeidDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
