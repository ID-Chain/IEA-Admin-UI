'use strict';

var utils = require('../utils/writer.js');
var Proof = require('../service/ProofService');

module.exports.apiProofPOST = function apiProofPOST(req, res, next) {
    var body = req.swagger.params['body'].value;
    Proof.apiProofPOST(body)
        .then(function(response) {
            utils.writeJson(res, response);
        })
        .catch(function(response) {
            utils.writeJson(res, response);
        });
};

module.exports.apiProofrequestPOST = function apiProofrequestPOST(req, res, next) {
    var body = req.swagger.params['body'].value;
    Proof.apiProofrequestPOST(body)
        .then(function(response) {
            utils.writeJson(res, response);
        })
        .catch(function(response) {
            utils.writeJson(res, response);
        });
};

module.exports.apiProofverificationPOST = function apiProofverificationPOST(req, res, next) {
    var body = req.swagger.params['body'].value;
    Proof.apiProofverificationPOST(body)
        .then(function(response) {
            utils.writeJson(res, response);
        })
        .catch(function(response) {
            utils.writeJson(res, response);
        });
};
