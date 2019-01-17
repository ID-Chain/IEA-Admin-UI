'use strict';

const schemaList = [
    {
        name: 'Passport',
        version: '1.0',
        created: 0,
        schemaId: 'Th7MpTaRZVRYnPiabds81Y:2:Passport:1.0'
    },
    {
        name: 'ID_NL',
        version: '2.0',
        created: 10000,
        schemaId: 'Th7MpTaRZVRYnPiabds81Y:2:ID_NL:2.0'
    },
    {
        name: 'Passport',
        version: '2.0',
        created: 20000,
        schemaId: 'Th7MpTaRZVRYnPiabds81Y:2:Passport:2.0'
    }
];

/**
 * List schemas
 * List schemas from the logged in user
 *
 * wallet String (Optional) A unique id value (or \"default\") identifying a wallet (optional)
 * onlyActive Boolean (Optional) Flag to filter all non-active schemas (optional)
 * returns List
 **/
exports.apiSchemaGET = function(wallet, onlyActive) {
    return new Promise(function(resolve, reject) {
        var examples = {};
        examples['application/json'] = [
            {
                name: 'Passport',
                version: '1.0',
                created: 0,
                schemaId: 'Th7MpTaRZVRYnPiabds81Y:2:Passport:1.0'
            },
            {
                name: 'ID_NL',
                version: '2.0',
                created: 10000,
                schemaId: 'Th7MpTaRZVRYnPiabds81Y:2:ID_NL:2.0'
            },
            {
                name: 'Passport',
                version: '2.0',
                created: 20000,
                schemaId: 'Th7MpTaRZVRYnPiabds81Y:2:Passport:2.0'
            }
        ];
        if (Object.keys(examples).length > 0) {
            resolve(examples[Object.keys(examples)[0]]);
        } else {
            resolve();
        }
    });
};

/**
 * Create a Schema
 * Create a Schema, Credential Definition & Revocation Registry (if revocable) for the logged in user
 *
 * wallet String (Optional) A unique id value (or \"default\") identifying a wallet (optional)
 * body Schema_post  (optional)
 * no response value expected for this operation
 **/
exports.apiSchemaPOST = function(wallet, body) {
    return new Promise(function(resolve, reject) {
        resolve();
    });
};

/**
 * Retrieve a schema
 * Retrieve a schema
 *
 * schemaid String A unique string value identifying this schema.
 * wallet String (Optional) A unique id value (or \"default\") identifying a wallet (optional)
 * returns schema_details
 **/
exports.apiSchemaSchemaidGET = function(schemaid, wallet) {
    return new Promise(function(resolve, reject) {
        const id = schemaList.findIndex(s => s.schemaId === schemaid);
        if (id === -1) resolve({});
        resolve(
            Object.assign(
                {},
                {
                    attributes: [{ name: 'givenName', type: 'string' }],
                    isDeprecated: false,
                    lowLevelSchema: {
                        name: 'passport',
                        attr_names: [
                            'nationality-code@https://en.wikipedia.org/wiki/iso_3166-1_alpha-3',
                            'bsn@https://nl.wikipedia.org/wiki/burgerservicenummer',
                            'surname@http://schema.org/text',
                            'gender@http://schema.org/gendertype',
                            'given-name@http://schema.org/text',
                            'date-of-issue@https://en.wikipedia.org/wiki/unix_time',
                            'date-of-expiry@https://en.wikipedia.org/wiki/unix_time',
                            'birth-date@https://en.wikipedia.org/wiki/unix_time',
                            'document-number@http://schema.org/number',
                            'birth-place@http://schema.org/text',
                            'authority@http://schema.org/place',
                            'credential-offered@https://en.wikipedia.org/wiki/unix_time'
                        ],
                        version: '5.0'
                    },
                    credentialDefinitionId: 'Th7MpTaRZVRYnPiabds81Y:3:CL:15:TAG1',
                    revocationRegistryId: ''
                },
                schemaList[id]
            )
        );
    });
};

/**
 * Alter schema by the given operation
 *
 *
 * schemaid String A unique string value identifying this schema.
 * wallet String (Optional) A unique id value (or \"default\") identifying a wallet (optional)
 * body Body  (optional)
 * no response value expected for this operation
 **/
exports.apiSchemaSchemaidPATCH = function(schemaid, wallet, body) {
    return new Promise(function(resolve, reject) {
        resolve();
    });
};
