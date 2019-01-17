'use strict';

var utils = require('../utils/writer.js');
var Connection = require('../service/ConnectionService');

module.exports.apiConnectionMyDidGET = function apiConnectionMyDidGET(req, res, next) {
    var myDid = req.swagger.params['myDid'].value;
    var wallet = req.swagger.params['wallet'].value;
    Connection.apiConnectionMyDidGET(myDid, wallet)
        .then(function(response) {
            utils.writeJson(res, response);
        })
        .catch(function(response) {
            utils.writeJson(res, response);
        });
};

module.exports.apiConnectionofferConnectionOfferIdDELETE = function apiConnectionofferConnectionOfferIdDELETE(
    req,
    res,
    next
) {
    var connectionOfferId = req.swagger.params['connectionOfferId'].value;
    var wallet = req.swagger.params['wallet'].value;
    Connection.apiConnectionofferConnectionOfferIdDELETE(connectionOfferId, wallet)
        .then(function(response) {
            utils.writeJson(res, response);
        })
        .catch(function(response) {
            utils.writeJson(res, response);
        });
};

module.exports.apiConnectionofferConnectionOfferIdGET = function apiConnectionofferConnectionOfferIdGET(
    req,
    res,
    next
) {
    var connectionOfferId = req.swagger.params['connectionOfferId'].value;
    var wallet = req.swagger.params['wallet'].value;
    Connection.apiConnectionofferConnectionOfferIdGET(connectionOfferId, wallet)
        .then(function(response) {
            utils.writeJson(res, response);
        })
        .catch(function(response) {
            utils.writeJson(res, response);
        });
};

module.exports.apiConnectionofferGET = function apiConnectionofferGET(req, res, next) {
    var wallet = req.swagger.params['wallet'].value;
    Connection.apiConnectionofferGET(wallet)
        .then(function(response) {
            utils.writeJson(res, response);
        })
        .catch(function(response) {
            utils.writeJson(res, response);
        });
};

module.exports.apiConnectionofferPOST = function apiConnectionofferPOST(req, res, next) {
    var body = req.swagger.params['body'].value;
    Connection.apiConnectionofferPOST(body)
        .then(function(response) {
            utils.writeJson(res, response);
        })
        .catch(function(response) {
            utils.writeJson(res, response);
        });
};

module.exports.apiConnectionrequestConnectionRequestIdDELETE = function apiConnectionrequestConnectionRequestIdDELETE(
    req,
    res,
    next
) {
    var connectionRequestId = req.swagger.params['connectionRequestId'].value;
    var wallet = req.swagger.params['wallet'].value;
    Connection.apiConnectionrequestConnectionRequestIdDELETE(connectionRequestId, wallet)
        .then(function(response) {
            utils.writeJson(res, response);
        })
        .catch(function(response) {
            utils.writeJson(res, response);
        });
};

module.exports.apiConnectionrequestConnectionRequestIdGET = function apiConnectionrequestConnectionRequestIdGET(
    req,
    res,
    next
) {
    var connectionRequestId = req.swagger.params['connectionRequestId'].value;
    var wallet = req.swagger.params['wallet'].value;
    Connection.apiConnectionrequestConnectionRequestIdGET(connectionRequestId, wallet)
        .then(function(response) {
            utils.writeJson(res, response);
        })
        .catch(function(response) {
            utils.writeJson(res, response);
        });
};

module.exports.apiConnectionrequestGET = function apiConnectionrequestGET(req, res, next) {
    var wallet = req.swagger.params['wallet'].value;
    Connection.apiConnectionrequestGET(wallet)
        .then(function(response) {
            utils.writeJson(res, response);
        })
        .catch(function(response) {
            utils.writeJson(res, response);
        });
};

module.exports.apiConnectionrequestPOST = function apiConnectionrequestPOST(req, res, next) {
    var body = req.swagger.params['body'].value;
    Connection.apiConnectionrequestPOST(body)
        .then(function(response) {
            utils.writeJson(res, response);
        })
        .catch(function(response) {
            utils.writeJson(res, response);
        });
};

module.exports.apiConnectionresponsePOST = function apiConnectionresponsePOST(req, res, next) {
    var body = req.swagger.params['body'].value;
    Connection.apiConnectionresponsePOST(body)
        .then(function(response) {
            utils.writeJson(res, response);
        })
        .catch(function(response) {
            utils.writeJson(res, response);
        });
};
