import Vue from 'vue';

const filterPlugin = {
    install: function(Vue) {
        // Filters
        Vue.filter('capitalize', capitalize);
        Vue.filter('upperCase', upperCase);
        Vue.filter('truncate', truncate);
        Vue.filter('date', date);
        Vue.filter('txType', txType);
        Vue.filter('txRole', txRole);
    }
};

Vue.use(filterPlugin);

export function capitalize(value) {
    if (!value && value !== 0) {
        return '';
    }
    value = value.toString().toLowerCase();
    return value.charAt(0).toUpperCase() + value.slice(1);
}

export function upperCase(value) {
    if (!value) return value;
    return value.toUpperCase();
}

export function truncate(value, charNum, type) {
    const separator = '....';
    if (!value || !charNum) return value;
    switch (type) {
        case 'middle': {
            const len = value.length;
            return value.substring(0, charNum) + separator + value.substring(len - charNum, len);
        }
        default: {
            return value.substring(0, charNum) + separator;
        }
    }
}

export function date(value) {
    if (!value && value !== 0) return 'Genesis';
    let date = typeof value === 'string' ? new Date(value) : new Date(value * 1000);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
}

export const txTypes = {
    0: 'NODE',
    1: 'NYM',
    100: 'ATTRIBUTE',
    101: 'SCHEMA',
    102: 'CRED DEF',
    109: 'POOL UPGRADE',
    110: 'NODE UPGRADE',
    111: 'POOL CONFIG',
    112: 'CHANGE_KEY',
    113: 'REVOC REG DEF',
    114: 'REVOC REG ENTRY'
};

export const nymRoles = {
    0: 'TRUSTEE',
    2: 'STEWARD',
    101: 'TRUST ANCHOR'
};

export function txType(value) {
    if (!value) return value;
    return txTypes[value] || 'UNKNOWN';
}

export function txRole(value, type) {
    if (!value && type === '1') return 'USER';
    return nymRoles[value];
}
