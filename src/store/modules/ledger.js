import api from '../api';
import * as types from '../mutation-types';
import storeUtils from '../utils';

const state = {
    transactions: [],
    from: 1,
    to: 200
};

const getters = {
    getAllTransactions: state => state.transactions
};

const mutations = {
    [types.SET_TRANSACTIONS_LIST](state, data) {
        const copyTransactions = state.transactions.slice();
        data.forEach(tx => copyTransactions.push(tx));
        state.transactions = copyTransactions.filter(
            (tx1, index, self) => self.findIndex(tx2 => tx2.txnMetadata.seqNo === tx1.txnMetadata.seqNo) === index
        );
    },
    [types.SET_FROM_TRANSACTION](state, data) {
        state.from = data;
    },
    [types.SET_TO_TRANSACTION](state, data) {
        state.to = data;
    }
};
const actions = {
    getAllTransactions({ commit, state, rootState }, { showSpinner }) {
        const auth = rootState.user.info.jwt;
        const from = state.from;
        const to = state.to;
        return storeUtils
            .loadIntoSlot(commit, types.SET_TRANSACTIONS_LIST, showSpinner, () => api.readLedger(auth, from, to))
            .then(transactions => {
                commit(types.SET_FROM_TRANSACTION, state.transactions.length + transactions.length - 1);
                if (from > to) {
                    commit(types.SET_TO_TRANSACTION, to + 10);
                }
            });
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};
