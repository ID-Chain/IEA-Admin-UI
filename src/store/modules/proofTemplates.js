import api from '../api';
import * as types from '../mutation-types';
import storeUtils from '../utils';

const state = {
    list: [],
    selected: {}
};

const getters = {
    getProofTemplateList: state => state.list,
    getProofTemplateDetails: state => state.selected
};

const mutations = {
    [types.SET_PROOF_TEMPLATE_LIST](state, data) {
        state.list = data;
    },
    [types.SET_PROOF_TEMPLATE_DETAILS](state, data) {
        state.selected = data;
    }
};
const actions = {
    getProofTemplateList({ commit, rootState }, { showSpinner }) {
        const auth = rootState.user.info.jwt;
        return storeUtils.loadIntoSlot(commit, types.SET_PROOF_TEMPLATE_LIST, showSpinner, () =>
            api.getAllProofTemplates(auth)
        );
    },
    getProofTemplateDetails({ commit, rootState }, { showSpinner, id }) {
        const auth = rootState.user.info.jwt;
        return storeUtils.loadIntoSlot(commit, types.SET_PROOF_TEMPLATE_DETAILS, showSpinner, () =>
            api.getProofTemplate(auth, id)
        );
    },
    updateProofTemplate({ commit, rootState }, { showSpinner, id, payload }) {
        const auth = rootState.user.info.jwt;
        return storeUtils.loadIntoSlot(commit, types.SET_PROOF_TEMPLATE_DETAILS, showSpinner, () =>
            api.updateProofTemplate(auth, id, payload)
        );
    },
    createNewProofTemplate({ commit, rootState }, { showSpinner, payload }) {
        const auth = rootState.user.info.jwt;
        return storeUtils.loadIntoSlot(commit, types.SET_PROOF_TEMPLATE_DETAILS, showSpinner, () =>
            api.submitNewProofTemplate(auth, payload)
        );
    },
    removeProofTemplate({ commit, rootState }, { showSpinner, id }) {
        const auth = rootState.user.info.jwt;
        return storeUtils.apiCallWrapper(commit, showSpinner, () => api.deleteProofTemplateById(auth, id));
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};
