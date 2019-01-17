import axios from 'axios';

const defaults = {
    baseURL: `/api`,
    timeout: 20000
};

Object.assign(axios.defaults, defaults);

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        if (response.data) return response.data;
    } else {
        console.error('Response Request to API with ERROR Status');
        throw response;
    }
}

function apiGet(url, jwt) {
    return axios.get(url, { headers: { Authorization: jwt } }).then(checkStatus);
}

function apiPost(url, payload, jwt) {
    return axios.post(url, payload || {}, { headers: { Authorization: jwt } }).then(checkStatus);
}

function apiPut(url, payload, jwt) {
    return axios.put(url, payload || {}, { headers: { Authorization: jwt } }).then(checkStatus);
}

function apiDelete(url, jwt) {
    return axios.delete(url, { headers: { Authorization: jwt } }).then(checkStatus);
}

function makeApiPost(url) {
    return payload => apiPost(url, payload);
}

export default {
    // Users
    newUser: makeApiPost(`/user`),
    login: makeApiPost(`/login`),
    // Ledger
    readLedger(jwt, from, to, type) {
        return apiGet(`/transactions?from=${from}&to=${to}&type=${type || 'domain'}`, jwt);
    },
    // Schemas
    getSchemaList(jwt) {
        return apiGet(`/schema`, jwt);
    },
    getSchemaDetails(jwt, schemaId) {
        return apiGet(`/schema/${encodeURIComponent(schemaId)}`, jwt);
    },
    submitNewSchema(jwt, payload) {
        return apiPost(`/schema`, payload, jwt);
    },
    getAttributeTypes(jwt) {
        return apiGet(`/attribute/type`, jwt);
    },
    getAllProofTemplates(jwt) {
        return apiGet(`/proofrequesttemplate`, jwt);
    },
    getProofTemplate(jwt, id) {
        return apiGet(`/proofrequesttemplate/${id}`, jwt);
    },
    updateProofTemplate(jwt, id, payload) {
        return apiPut(`/proofrequesttemplate/${id}`, payload, jwt);
    },
    submitNewProofTemplate(jwt, payload) {
        return apiPost(`/proofrequesttemplate`, payload, jwt);
    },
    deleteProofTemplateById(jwt, id) {
        return apiDelete(`/proofrequesttemplate/${id}`, jwt);
    },
    getDefaultWalletInfo(jwt) {
        return apiGet(`/wallet/default`, jwt);
    }
};
