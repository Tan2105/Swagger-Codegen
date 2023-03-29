'use strict';


/**
 * Operation to fetch all the employees
 *
 * employeename String 
 * returns employees
 **/
exports.employeeGET = function(employeename) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "Designation" : "Software Developer",
  "Salary" : 50000,
  "EmployeeID" : 3,
  "EmployeeName" : "Sam"
}, {
  "Designation" : "Software Developer",
  "Salary" : 50000,
  "EmployeeID" : 3,
  "EmployeeName" : "Sam"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Updates an existing employee
 *
 * body Employee  (optional)
 * no response value expected for this operation
 **/
exports.employeePUT = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 *
 * find String 
 * returns employees
 **/
exports.employeefindGET = function(find) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "Designation" : "Software Developer",
  "Salary" : 50000,
  "EmployeeID" : 3,
  "EmployeeName" : "Sam"
}, {
  "Designation" : "Software Developer",
  "Salary" : 50000,
  "EmployeeID" : 3,
  "EmployeeName" : "Sam"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * id Integer 
 * returns employee
 **/
exports.employeeidDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Designation" : "Software Developer",
  "Salary" : 50000,
  "EmployeeID" : 3,
  "EmployeeName" : "Sam"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

