'use strict';

/**
 * List messages
 * List messages
 *
 * wallet String (Optional) A unique id value (or \"default\") identifying a wallet (optional)
 * type String (Optional) A single message type to filter by (optional)
 * no response value expected for this operation
 **/
exports.apiMessageGET = function(wallet, type) {
    return new Promise(function(resolve, reject) {
        resolve();
    });
};

/**
 * Delete a message
 * Delete a message
 *
 * messageId String A unique string value identifying a message.
 * wallet String (Optional) A unique id value (or \"default\") identifying a wallet (optional)
 * no response value expected for this operation
 **/
exports.apiMessageMessageIdDELETE = function(messageId, wallet) {
    return new Promise(function(resolve, reject) {
        resolve();
    });
};

/**
 * Retrieve a message
 * Retrieve a message
 *
 * messageId String A unique string value identifying a message.
 * wallet String (Optional) A unique id value (or \"default\") identifying a wallet (optional)
 * no response value expected for this operation
 **/
exports.apiMessageMessageIdGET = function(messageId, wallet) {
    return new Promise(function(resolve, reject) {
        resolve();
    });
};

/**
 * Send message
 * Send message
 *
 * body Message_post  (optional)
 * no response value expected for this operation
 **/
exports.apiMessagePOST = function(body) {
    return new Promise(function(resolve, reject) {
        resolve();
    });
};

/**
 * Agent Message Endpoint
 * Agent Message Endpoint
 *
 * body Indy_post  (optional)
 * no response value expected for this operation
 **/
exports.indyPOST = function(body) {
    return new Promise(function(resolve, reject) {
        resolve();
    });
};
