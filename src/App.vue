<template>
  <v-app id="app">
      <agent-top-bar v-if="isAuthenticated" @logout="logout"></agent-top-bar>
      <router-view class="mt-4" @authenticated="setAuthenticated" />
      <agent-notification />
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { USER_LOGIN, USER_LOGOUT } from './store/mutation-types';
import AgentTopBar from './components/AgentTopBar';
import AgentNotification from './components/AgentNotification';

export default {
    name: 'App',
    components: {
        AgentTopBar,
        AgentNotification
    },
    computed: {
        ...mapGetters({
            isAuthenticated: 'isAuthenticated'
        })
    },
    mounted() {
        if (!this.isAuthenticated) {
            this.$router.replace({ name: 'login' });
        }
    },
    methods: {
        ...mapActions({
            login: 'login'
        }),
        setAuthenticated(auth) {
            this.$store.commit(USER_LOGIN, auth);
        },
        logout() {
            this.$store.commit(USER_LOGOUT);
            this.$router.push('login');
        }
    }
};
</script>
