'use strict';

var utils = require('../utils/writer.js');
var User = require('../service/UserService');

module.exports.apiLoginPOST = function apiLoginPOST(req, res, next) {
    var body = req.swagger.params['body'].value;
    User.apiLoginPOST(body)
        .then(function(response) {
            utils.writeJson(res, response);
        })
        .catch(function(response) {
            utils.writeJson(res, response);
        });
};

module.exports.apiUserPOST = function apiUserPOST(req, res, next) {
    var body = req.swagger.params['body'].value;
    User.apiUserPOST(body)
        .then(function(response) {
            utils.writeJson(res, response);
        })
        .catch(function(response) {
            utils.writeJson(res, response);
        });
};

module.exports.apiUserUserDELETE = function apiUserUserDELETE(req, res, next) {
    var user = req.swagger.params['user'].value;
    User.apiUserUserDELETE(user)
        .then(function(response) {
            utils.writeJson(res, response);
        })
        .catch(function(response) {
            utils.writeJson(res, response);
        });
};

module.exports.apiUserUserGET = function apiUserUserGET(req, res, next) {
    var user = req.swagger.params['user'].value;
    User.apiUserUserGET(user)
        .then(function(response) {
            utils.writeJson(res, response);
        })
        .catch(function(response) {
            utils.writeJson(res, response);
        });
};

module.exports.apiUserUserPUT = function apiUserUserPUT(req, res, next) {
    var user = req.swagger.params['user'].value;
    var body = req.swagger.params['body'].value;
    User.apiUserUserPUT(user, body)
        .then(function(response) {
            utils.writeJson(res, response);
        })
        .catch(function(response) {
            utils.writeJson(res, response);
        });
};
