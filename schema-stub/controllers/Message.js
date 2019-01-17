'use strict';

var utils = require('../utils/writer.js');
var Message = require('../service/MessageService');

module.exports.apiMessageGET = function apiMessageGET(req, res, next) {
    var wallet = req.swagger.params['wallet'].value;
    var type = req.swagger.params['type'].value;
    Message.apiMessageGET(wallet, type)
        .then(function(response) {
            utils.writeJson(res, response);
        })
        .catch(function(response) {
            utils.writeJson(res, response);
        });
};

module.exports.apiMessageMessageIdDELETE = function apiMessageMessageIdDELETE(req, res, next) {
    var messageId = req.swagger.params['messageId'].value;
    var wallet = req.swagger.params['wallet'].value;
    Message.apiMessageMessageIdDELETE(messageId, wallet)
        .then(function(response) {
            utils.writeJson(res, response);
        })
        .catch(function(response) {
            utils.writeJson(res, response);
        });
};

module.exports.apiMessageMessageIdGET = function apiMessageMessageIdGET(req, res, next) {
    var messageId = req.swagger.params['messageId'].value;
    var wallet = req.swagger.params['wallet'].value;
    Message.apiMessageMessageIdGET(messageId, wallet)
        .then(function(response) {
            utils.writeJson(res, response);
        })
        .catch(function(response) {
            utils.writeJson(res, response);
        });
};

module.exports.apiMessagePOST = function apiMessagePOST(req, res, next) {
    var body = req.swagger.params['body'].value;
    Message.apiMessagePOST(body)
        .then(function(response) {
            utils.writeJson(res, response);
        })
        .catch(function(response) {
            utils.writeJson(res, response);
        });
};

module.exports.indyPOST = function indyPOST(req, res, next) {
    var body = req.swagger.params['body'].value;
    Message.indyPOST(body)
        .then(function(response) {
            utils.writeJson(res, response);
        })
        .catch(function(response) {
            utils.writeJson(res, response);
        });
};
