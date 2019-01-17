import api from '../api';
import * as types from '../mutation-types';
import storeUtils from '../utils';

const state = {
    info: {},
    isAuthenticated: false
};

const getters = {
    getAuth: state => ({ username: state.info.username, password: state.info.password }),
    isAuthenticated: state => state.isAuthenticated
};

const mutations = {
    [types.USER_LOGIN](state, info) {
        state.info = info;
        state.isAuthenticated = true;
        window.localStorage.setItem('agentAdminAuth', btoa(JSON.stringify(info)));
    },
    [types.USER_LOGOUT](state) {
        state.info = {};
        state.isAuthenticated = false;
        window.localStorage.removeItem('agentAdminAuth');
    }
};

const actions = {
    login({ commit }, payload) {
        return storeUtils.apiCallWrapper(commit, true, () => api.login(payload)).then(res => {
            commit(types.USER_LOGIN, { username: payload.username, jwt: res.token });
            commit(types.SHOW_NOTIFICATION, {
                msg: 'Welcome to Indy Agent Admin Portal',
                type: 'success'
            });
        });
    },
    signUp({ commit }, { username, password }) {
        return storeUtils
            .apiCallWrapper(commit, true, () =>
                api.newUser({
                    username,
                    password,
                    wallet: {
                        name: `${username}Wallet`,
                        credentials: {
                            key: password
                        }
                    }
                })
            )
            .then(() => {
                commit(types.USER_LOGIN, {
                    username,
                    password
                });
                commit(types.SHOW_NOTIFICATION, {
                    msg: 'Welcome to Indy Agent Admin Portal',
                    type: 'success'
                });
            });
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};
