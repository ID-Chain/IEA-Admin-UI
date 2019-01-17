'use strict';

var utils = require('../utils/writer.js');
var Credential = require('../service/CredentialService');

module.exports.apiCredentialGET = function apiCredentialGET(req, res, next) {
    var wallet = req.swagger.params['wallet'].value;
    var schema = req.swagger.params['schema'].value;
    var schemaIssuerDid = req.swagger.params['schemaIssuerDid'].value;
    var schemaName = req.swagger.params['schemaName'].value;
    var schemaVersion = req.swagger.params['schemaVersion'].value;
    var issuerDid = req.swagger.params['issuerDid'].value;
    var credDefId = req.swagger.params['credDefId'].value;
    Credential.apiCredentialGET(wallet, schema, schemaIssuerDid, schemaName, schemaVersion, issuerDid, credDefId)
        .then(function(response) {
            utils.writeJson(res, response);
        })
        .catch(function(response) {
            utils.writeJson(res, response);
        });
};

module.exports.apiCredentialIdGET = function apiCredentialIdGET(req, res, next) {
    var id = req.swagger.params['id'].value;
    var wallet = req.swagger.params['wallet'].value;
    Credential.apiCredentialIdGET(id, wallet)
        .then(function(response) {
            utils.writeJson(res, response);
        })
        .catch(function(response) {
            utils.writeJson(res, response);
        });
};

module.exports.apiCredentialPOST = function apiCredentialPOST(req, res, next) {
    var body = req.swagger.params['body'].value;
    Credential.apiCredentialPOST(body)
        .then(function(response) {
            utils.writeJson(res, response);
        })
        .catch(function(response) {
            utils.writeJson(res, response);
        });
};

module.exports.apiCredentialdefCreddefDELETE = function apiCredentialdefCreddefDELETE(req, res, next) {
    var creddef = req.swagger.params['creddef'].value;
    var wallet = req.swagger.params['wallet'].value;
    Credential.apiCredentialdefCreddefDELETE(creddef, wallet)
        .then(function(response) {
            utils.writeJson(res, response);
        })
        .catch(function(response) {
            utils.writeJson(res, response);
        });
};

module.exports.apiCredentialdefCreddefGET = function apiCredentialdefCreddefGET(req, res, next) {
    var creddef = req.swagger.params['creddef'].value;
    var wallet = req.swagger.params['wallet'].value;
    Credential.apiCredentialdefCreddefGET(creddef, wallet)
        .then(function(response) {
            utils.writeJson(res, response);
        })
        .catch(function(response) {
            utils.writeJson(res, response);
        });
};

module.exports.apiCredentialdefGET = function apiCredentialdefGET(req, res, next) {
    var wallet = req.swagger.params['wallet'].value;
    Credential.apiCredentialdefGET(wallet)
        .then(function(response) {
            utils.writeJson(res, response);
        })
        .catch(function(response) {
            utils.writeJson(res, response);
        });
};

module.exports.apiCredentialdefPOST = function apiCredentialdefPOST(req, res, next) {
    var body = req.swagger.params['body'].value;
    Credential.apiCredentialdefPOST(body)
        .then(function(response) {
            utils.writeJson(res, response);
        })
        .catch(function(response) {
            utils.writeJson(res, response);
        });
};

module.exports.apiCredentialissuePOST = function apiCredentialissuePOST(req, res, next) {
    var body = req.swagger.params['body'].value;
    Credential.apiCredentialissuePOST(body)
        .then(function(response) {
            utils.writeJson(res, response);
        })
        .catch(function(response) {
            utils.writeJson(res, response);
        });
};

module.exports.apiCredentialofferPOST = function apiCredentialofferPOST(req, res, next) {
    var body = req.swagger.params['body'].value;
    Credential.apiCredentialofferPOST(body)
        .then(function(response) {
            utils.writeJson(res, response);
        })
        .catch(function(response) {
            utils.writeJson(res, response);
        });
};

module.exports.apiCredentialrequestPOST = function apiCredentialrequestPOST(req, res, next) {
    var body = req.swagger.params['body'].value;
    Credential.apiCredentialrequestPOST(body)
        .then(function(response) {
            utils.writeJson(res, response);
        })
        .catch(function(response) {
            utils.writeJson(res, response);
        });
};
