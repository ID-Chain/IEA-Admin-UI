'use strict';

var utils = require('../utils/writer.js');
var Transaction = require('../service/TransactionService');

module.exports.apiNymDidGET = function apiNymDidGET(req, res, next) {
    var did = req.swagger.params['did'].value;
    var wallet = req.swagger.params['wallet'].value;
    Transaction.apiNymDidGET(did, wallet)
        .then(function(response) {
            utils.writeJson(res, response);
        })
        .catch(function(response) {
            utils.writeJson(res, response);
        });
};

module.exports.apiNymPOST = function apiNymPOST(req, res, next) {
    var body = req.swagger.params['body'].value;
    Transaction.apiNymPOST(body)
        .then(function(response) {
            utils.writeJson(res, response);
        })
        .catch(function(response) {
            utils.writeJson(res, response);
        });
};

module.exports.apiTransactionsGET = function apiTransactionsGET(req, res, next) {
    var from = req.swagger.params['from'].value;
    var to = req.swagger.params['to'].value;
    var wallet = req.swagger.params['wallet'].value;
    var type = req.swagger.params['type'].value;
    Transaction.apiTransactionsGET(from, to, wallet, type)
        .then(function(response) {
            utils.writeJson(res, response);
        })
        .catch(function(response) {
            utils.writeJson(res, response);
        });
};
