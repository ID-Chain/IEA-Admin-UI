import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

import colors from 'vuetify/es5/util/colors';

Vue.use(Vuetify, {
    theme: {
        primary: colors.yellow.darken3,
        secondary: colors.grey.darken2,
        accent: colors.blueGrey.darken1,
        error: colors.red.accent3
    }
});
