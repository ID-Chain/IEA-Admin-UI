'use strict';

var utils = require('../utils/writer.js');
var Wallet = require('../service/WalletService');

module.exports.apiWalletGET = function apiWalletGET(req, res, next) {
    Wallet.apiWalletGET()
        .then(function(response) {
            utils.writeJson(res, response);
        })
        .catch(function(response) {
            utils.writeJson(res, response);
        });
};

module.exports.apiWalletPOST = function apiWalletPOST(req, res, next) {
    var body = req.swagger.params['body'].value;
    Wallet.apiWalletPOST(body)
        .then(function(response) {
            utils.writeJson(res, response);
        })
        .catch(function(response) {
            utils.writeJson(res, response);
        });
};

module.exports.apiWalletWalletDELETE = function apiWalletWalletDELETE(req, res, next) {
    var wallet = req.swagger.params['wallet'].value;
    Wallet.apiWalletWalletDELETE(wallet)
        .then(function(response) {
            utils.writeJson(res, response);
        })
        .catch(function(response) {
            utils.writeJson(res, response);
        });
};

module.exports.apiWalletWalletGET = function apiWalletWalletGET(req, res, next) {
    var wallet = req.swagger.params['wallet'].value;
    Wallet.apiWalletWalletGET(wallet)
        .then(function(response) {
            utils.writeJson(res, response);
        })
        .catch(function(response) {
            utils.writeJson(res, response);
        });
};
