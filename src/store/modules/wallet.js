import api from '../api';
import * as types from '../mutation-types';
import storeUtils from '../utils';

const state = {
    wallet: {}
};

const getters = {
    getWallet: state => state.wallet
};

const mutations = {
    [types.SET_WALLET_INFO](state, data) {
        data.pairwise = data.pairwise.map(v => {
            v.metadata = v.metadata ? JSON.parse(v.metadata) : {};
            return v;
        });
        state.wallet = data;
    }
};
const actions = {
    getWalletInfo({ commit, rootState }, { showSpinner }) {
        const auth = rootState.user.info.jwt;
        return storeUtils.loadIntoSlot(commit, types.SET_WALLET_INFO, showSpinner, () =>
            api.getDefaultWalletInfo(auth)
        );
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};
