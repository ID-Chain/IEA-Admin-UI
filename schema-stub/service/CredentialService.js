'use strict';

/**
 * List all credentials of specific wallet (UNTESTED ENDPOINT)
 * List all credentials of specific wallet (UNTESTED ENDPOINT)
 *
 * wallet String (Optional) A unique id value (or \"default\") identifying a wallet (optional)
 * schema String (Optional) schemaId to filter credentials (optional)
 * schemaIssuerDid String (Optional) schemaIssuerDid to filter credentials (optional)
 * schemaName String (Optional) schemaName to filter credentials (optional)
 * schemaVersion String (Optional) schemaVersion to filter credentials (optional)
 * issuerDid String (Optional) issuerDid to filter credentials (optional)
 * credDefId String (Optional) credDefId to filter credentials (optional)
 * no response value expected for this operation
 **/
exports.apiCredentialGET = function(wallet, schema, schemaIssuerDid, schemaName, schemaVersion, issuerDid, credDefId) {
    return new Promise(function(resolve, reject) {
        resolve();
    });
};

/**
 * Retrieve a credential
 * Retrieve a credential
 *
 * id String A unique string value identifying this credential.
 * wallet String (Optional) A unique id value (or \"default\") identifying a wallet (optional)
 * no response value expected for this operation
 **/
exports.apiCredentialIdGET = function(id, wallet) {
    return new Promise(function(resolve, reject) {
        resolve();
    });
};

/**
 * Store a credential
 * Store a credential
 *
 * body Credential_post  (optional)
 * no response value expected for this operation
 **/
exports.apiCredentialPOST = function(body) {
    return new Promise(function(resolve, reject) {
        resolve();
    });
};

/**
 * Delete a credential definition
 * Delete a credential definition
 *
 * creddef String A unique string value identifying this credential definition.
 * wallet String (Optional) A unique id value (or \"default\") identifying a wallet (optional)
 * no response value expected for this operation
 **/
exports.apiCredentialdefCreddefDELETE = function(creddef, wallet) {
    return new Promise(function(resolve, reject) {
        resolve();
    });
};

/**
 * Retrieve a credential definition from the ledger
 * Retrieve a credential definition from the ledger
 *
 * creddef String A unique string value identifying this credential definition.
 * wallet String (Optional) A unique id value (or \"default\") identifying a wallet (optional)
 * no response value expected for this operation
 **/
exports.apiCredentialdefCreddefGET = function(creddef, wallet) {
    return new Promise(function(resolve, reject) {
        resolve();
    });
};

/**
 * List credential definitions of wallet
 * List credential definitions of wallet
 *
 * wallet String (Optional) A unique id value (or \"default\") identifying a wallet (optional)
 * no response value expected for this operation
 **/
exports.apiCredentialdefGET = function(wallet) {
    return new Promise(function(resolve, reject) {
        resolve();
    });
};

/**
 * Create a credential definition
 * Create a credential definition
 *
 * body Credentialdef_post  (optional)
 * no response value expected for this operation
 **/
exports.apiCredentialdefPOST = function(body) {
    return new Promise(function(resolve, reject) {
        resolve();
    });
};

/**
 * Issue a credential
 * Issue a credential
 *
 * body Credentialissue_post  (optional)
 * no response value expected for this operation
 **/
exports.apiCredentialissuePOST = function(body) {
    return new Promise(function(resolve, reject) {
        resolve();
    });
};

/**
 * Create a credential offer
 * Create a credential offer
 *
 * body Credentialoffer_post  (optional)
 * no response value expected for this operation
 **/
exports.apiCredentialofferPOST = function(body) {
    return new Promise(function(resolve, reject) {
        resolve();
    });
};

/**
 * Accept credential offer and create credential request
 * Accept credential offer and create credential request
 *
 * body Credentialrequest_post  (optional)
 * no response value expected for this operation
 **/
exports.apiCredentialrequestPOST = function(body) {
    return new Promise(function(resolve, reject) {
        resolve();
    });
};
