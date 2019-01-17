'use strict';

var utils = require('../utils/writer.js');
var Schema = require('../service/SchemaService');

module.exports.apiSchemaGET = function apiSchemaGET(req, res, next) {
    var wallet = req.swagger.params['wallet'].value;
    var onlyActive = req.swagger.params['onlyActive'].value;
    Schema.apiSchemaGET(wallet, onlyActive)
        .then(function(response) {
            utils.writeJson(res, response);
        })
        .catch(function(response) {
            utils.writeJson(res, response);
        });
};

module.exports.apiSchemaPOST = function apiSchemaPOST(req, res, next) {
    var wallet = req.swagger.params['wallet'].value;
    var body = req.swagger.params['body'].value;
    Schema.apiSchemaPOST(wallet, body)
        .then(function(response) {
            utils.writeJson(res, response);
        })
        .catch(function(response) {
            utils.writeJson(res, response);
        });
};

module.exports.apiSchemaSchemaidGET = function apiSchemaSchemaidGET(req, res, next) {
    var schemaid = req.swagger.params['schemaid'].value;
    var wallet = req.swagger.params['wallet'].value;
    Schema.apiSchemaSchemaidGET(schemaid, wallet)
        .then(function(response) {
            utils.writeJson(res, response);
        })
        .catch(function(response) {
            utils.writeJson(res, response);
        });
};

module.exports.apiSchemaSchemaidPATCH = function apiSchemaSchemaidPATCH(req, res, next) {
    var schemaid = req.swagger.params['schemaid'].value;
    var wallet = req.swagger.params['wallet'].value;
    var body = req.swagger.params['body'].value;
    Schema.apiSchemaSchemaidPATCH(schemaid, wallet, body)
        .then(function(response) {
            utils.writeJson(res, response);
        })
        .catch(function(response) {
            utils.writeJson(res, response);
        });
};
