import api from '../api';
import * as types from '../mutation-types';
import storeUtils from '../utils';

const state = {
    list: [],
    selected: {},
    parent: {},
    types: []
};

const getters = {
    getSchemaList: state => state.list,
    getSchemaDetails: state => state.selected,
    getParentSchemaDetails: state => state.parent,
    getTypes: state => state.types
};

const mutations = {
    [types.SET_SCHEMA_LIST](state, data) {
        state.list = data;
    },
    [types.SET_SCHEMA_DETAILS](state, data) {
        state.selected = data;
    },
    [types.SET_PARENT_SCHEMA_DETAILS](state, data) {
        state.parent = data;
    },
    [types.SET_ATTRIBUTE_TYPES](state, data) {
        state.types = data;
    }
};
const actions = {
    getSchemaList({ commit, rootState }, { showSpinner }) {
        const auth = rootState.user.info.jwt;
        return storeUtils.loadIntoSlot(commit, types.SET_SCHEMA_LIST, showSpinner, () => api.getSchemaList(auth));
    },
    getSchemaDetails({ commit, rootState }, { showSpinner, schemaId }) {
        const auth = rootState.user.info.jwt;
        return storeUtils.loadIntoSlot(commit, types.SET_SCHEMA_DETAILS, showSpinner, () =>
            api.getSchemaDetails(auth, schemaId)
        );
    },
    getParentSchemaDetails({ commit, rootState }, { showSpinner, schemaId }) {
        const auth = rootState.user.info.jwt;
        return storeUtils.loadIntoSlot(commit, types.SET_PARENT_SCHEMA_DETAILS, showSpinner, () =>
            api.getSchemaDetails(auth, schemaId)
        );
    },
    submitNewSchema({ commit, rootState }, payload) {
        const auth = rootState.user.info.jwt;
        return storeUtils.apiCallWrapper(commit, true, () => api.submitNewSchema(auth, payload));
    },
    getTypes({ commit, rootState }, { showSpinner }) {
        const auth = rootState.user.info.jwt;
        return storeUtils.loadIntoSlot(commit, types.SET_ATTRIBUTE_TYPES, showSpinner, () =>
            api.getAttributeTypes(auth)
        );
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};
