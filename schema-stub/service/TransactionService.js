'use strict';

/**
 * Retrieve Nym from ledger
 * Retrieve Nym from ledger
 *
 * did String Did of NYM record to retrieve
 * wallet String (Optional) A unique id value (or \"default\") identifying a wallet (optional)
 * no response value expected for this operation
 **/
exports.apiNymDidGET = function(did, wallet) {
    return new Promise(function(resolve, reject) {
        resolve();
    });
};

/**
 * Send Nym request to the ledger
 * Send Nym request to the ledger
 *
 * body Nym_post  (optional)
 * no response value expected for this operation
 **/
exports.apiNymPOST = function(body) {
    return new Promise(function(resolve, reject) {
        resolve();
    });
};

/**
 * Get ledger transactions from-to indexes
 *
 * from BigDecimal Sequence Number of first transaction to query (greater than 0)
 * to BigDecimal Sequence Number of last transaction to query (greater than from index)
 * wallet String (Optional) A unique id value (or \"default\") identifying a wallet (optional)
 * type String Ledger Type: pool, domain, config. By default is DOMAIN (optional)
 * no response value expected for this operation
 **/
exports.apiTransactionsGET = function(from, to, wallet, type) {
    return new Promise(function(resolve, reject) {
        resolve();
    });
};
