'use strict';

/**
 * Retrieve a (pending) connection
 * Retrieve a (pending) connection
 *
 * myDid String A unique did used in a pairwise
 * wallet String (Optional) A unique id value (or \"default\") identifying a wallet (optional)
 * returns inline_response_200
 **/
exports.apiConnectionMyDidGET = function(myDid, wallet) {
    return new Promise(function(resolve, reject) {
        var examples = {};
        examples['application/json'] = {
            theirDid: 'theirDid',
            acknowledged: true,
            myDid: 'myDid'
        };
        if (Object.keys(examples).length > 0) {
            resolve(examples[Object.keys(examples)[0]]);
        } else {
            resolve();
        }
    });
};

/**
 * Delete a connection offer by _id
 * Delete a connection offer by _id
 *
 * connectionOfferId String connection offer _id
 * wallet String (Optional) A unique id value (or \"default\") identifying a wallet (optional)
 * no response value expected for this operation
 **/
exports.apiConnectionofferConnectionOfferIdDELETE = function(connectionOfferId, wallet) {
    return new Promise(function(resolve, reject) {
        resolve();
    });
};

/**
 * Retrieve a connection offer by _id
 * Retrieve a connection offer by _id
 *
 * connectionOfferId String connection offer _id
 * wallet String (Optional) A unique id value (or \"default\") identifying a wallet (optional)
 * no response value expected for this operation
 **/
exports.apiConnectionofferConnectionOfferIdGET = function(connectionOfferId, wallet) {
    return new Promise(function(resolve, reject) {
        resolve();
    });
};

/**
 * List all my connection offers
 * List all my connection offers
 *
 * wallet String (Optional) A unique id value (or \"default\") identifying a wallet (optional)
 * no response value expected for this operation
 **/
exports.apiConnectionofferGET = function(wallet) {
    return new Promise(function(resolve, reject) {
        resolve();
    });
};

/**
 * Create a new connection offer
 * Create a new connection offer
 *
 * body Connectionoffer_post  (optional)
 * no response value expected for this operation
 **/
exports.apiConnectionofferPOST = function(body) {
    return new Promise(function(resolve, reject) {
        resolve();
    });
};

/**
 * Delete a connection request by _id
 * Delete a connection request by _id
 *
 * connectionRequestId String connection request _id
 * wallet String (Optional) A unique id value (or \"default\") identifying a wallet (optional)
 * no response value expected for this operation
 **/
exports.apiConnectionrequestConnectionRequestIdDELETE = function(connectionRequestId, wallet) {
    return new Promise(function(resolve, reject) {
        resolve();
    });
};

/**
 * Retrieve a connection request by _id
 * Retrieve a connection request by _id
 *
 * connectionRequestId String connection request _id
 * wallet String (Optional) A unique id value (or \"default\") identifying a wallet (optional)
 * no response value expected for this operation
 **/
exports.apiConnectionrequestConnectionRequestIdGET = function(connectionRequestId, wallet) {
    return new Promise(function(resolve, reject) {
        resolve();
    });
};

/**
 * List all my connection requests
 * List all my connection requests
 *
 * wallet String (Optional) A unique id value (or \"default\") identifying a wallet (optional)
 * no response value expected for this operation
 **/
exports.apiConnectionrequestGET = function(wallet) {
    return new Promise(function(resolve, reject) {
        resolve();
    });
};

/**
 * Accept a connection offer and/or send a connection request
 * Accept a connection offer and/or send a connection request
 *
 * body Connectionrequest_post  (optional)
 * no response value expected for this operation
 **/
exports.apiConnectionrequestPOST = function(body) {
    return new Promise(function(resolve, reject) {
        resolve();
    });
};

/**
 * Accept a connection request and send a connection response
 * Accept a connection request and send a connection response
 *
 * body Connectionresponse_post  (optional)
 * no response value expected for this operation
 **/
exports.apiConnectionresponsePOST = function(body) {
    return new Promise(function(resolve, reject) {
        resolve();
    });
};
