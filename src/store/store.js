import Vue from 'vue';
import Vuex from 'vuex';
import * as types from './mutation-types';
import ledger from './modules/ledger';
import schema from './modules/schema';
import proofTemplates from './modules/proofTemplates';
import wallet from './modules/wallet';
import user from './modules/user';
import notification from './modules/notification';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isLoading: false
    },
    getters: {
        isLoading: state => state.isLoading
    },
    mutations: {
        [types.IS_LOADING](state, value) {
            state.isLoading = value;
        }
    },
    actions: {},
    modules: {
        notification,
        ledger,
        user,
        schema,
        proofTemplates,
        wallet
    }
});
