'use strict';

/**
 * Allow users to login, will return them a JWT valid for a specific amount of time
 * Allow users to login, will return them a JWT valid for a specific amount of time
 *
 * body Login_post  (optional)
 * no response value expected for this operation
 **/
exports.apiLoginPOST = function(body) {
    return new Promise(function(resolve, reject) {
        resolve();
    });
};

/**
 * Register a new user
 * Register a new user
 *
 * body User_post  (optional)
 * returns inline_response_201
 **/
exports.apiUserPOST = function(body) {
    return new Promise(function(resolve, reject) {
        var examples = {};
        examples['application/json'] = {
            id: 'id'
        };
        if (Object.keys(examples).length > 0) {
            resolve(examples[Object.keys(examples)[0]]);
        } else {
            resolve();
        }
    });
};

/**
 * Delete a User
 * Delete a User
 *
 * user String A unique id value (or \"me\") identifying this user.
 * no response value expected for this operation
 **/
exports.apiUserUserDELETE = function(user) {
    return new Promise(function(resolve, reject) {
        resolve();
    });
};

/**
 * Retrieve a user
 * Retrieve a user
 *
 * user String A unique id value (or \"me\") identifying this user.
 * no response value expected for this operation
 **/
exports.apiUserUserGET = function(user) {
    return new Promise(function(resolve, reject) {
        resolve();
    });
};

/**
 * Update a User (at least one of the properties must be provided)
 * Update a User (at least one of the properties must be provided)
 *
 * user String A unique id value (or \"me\") identifying this user.
 * body User_put  (optional)
 * no response value expected for this operation
 **/
exports.apiUserUserPUT = function(user, body) {
    return new Promise(function(resolve, reject) {
        resolve();
    });
};
