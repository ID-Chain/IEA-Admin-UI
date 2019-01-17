import * as types from './mutation-types';

export function showErrorNotification(error, commit) {
    // Set default error message
    let errorMsg = 'Something went wrong.';
    // If error has response data, use it for the error message
    if (error && error.response) {
        if (error.response.status === 401) {
            const auth = window.localStorage.getItem('agentAdminAuth');
            errorMsg = 'Invalid Credentials';
            if (auth) {
                window.localStorage.removeItem('agentAdminAuth');
                errorMsg = 'Session expired, please login again!';
                setTimeout(() => location.reload(), 3000);
            }
        }
    } else if (error && error.message) {
        errorMsg = 'Error: ' + error.message;
    }
    commit(types.SHOW_NOTIFICATION, {
        msg: errorMsg,
        type: 'error'
    });
    throw error;
}

export function apiCallWrapper(commit, showSpinner, apiFun) {
    if (showSpinner) commit(types.IS_LOADING, true);
    return apiFun()
        .then(result => {
            if (showSpinner) commit(types.IS_LOADING, false);
            return Promise.resolve(result);
        })
        .catch(error => {
            if (showSpinner) commit(types.IS_LOADING, false);
            throw showErrorNotification(error, commit);
        });
}

export function loadIntoSlot(commit, slotType, showSpinner, apiFun) {
    return apiCallWrapper(commit, showSpinner, apiFun).then(result => {
        commit(slotType, result);
        return Promise.resolve(result);
    });
}

export default { showErrorNotification, apiCallWrapper, loadIntoSlot };
