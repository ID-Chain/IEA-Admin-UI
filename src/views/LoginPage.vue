<template>
    <v-container fluid fill-height class="login">
        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4 lg4 xl2>
                <v-card class="elevation-12">
                    <v-toolbar dark color="primary">
                        <v-toolbar-title>Agent Admin Portal</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-icon medium>fab fa-connectdevelop</v-icon>
                    </v-toolbar>
                    <v-form v-model="valid" ref="loginForm" @keyup.enter.native="click(check)">
                        <v-card-text>
                            <v-text-field
                                    v-model="username"
                                    prepend-icon="fas fa-user"
                                    name="login"
                                    label="Login"
                                    type="text"
                                    :rules="requiredRule('Username')"
                            ></v-text-field>
                            <v-text-field
                                    v-model="password"
                                    id="password"
                                    prepend-icon="fas fa-lock"
                                    name="password"
                                    label="Password"
                                    type="password"
                                    :rules="requiredRule('Password')"
                            ></v-text-field>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn color="secondary" outline @click.native="click(signUp)" disabled>Sign Up</v-btn>
                            <v-spacer></v-spacer>
                            <v-btn color="accent" @click.native="click(check)">Login</v-btn>
                        </v-card-actions>
                    </v-form>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { SHOW_NOTIFICATION } from '../store/mutation-types';

export default {
    name: 'LoginPage',
    data: () => ({
        valid: false,
        username: '',
        password: ''
    }),
    computed: {
        ...mapGetters({
            isAuthenticated: 'isAuthenticated'
        })
    },
    methods: {
        ...mapActions({
            check: 'login',
            signUp: 'signUp'
        }),
        click(action) {
            this.$refs.loginForm.validate();
            if (!this.valid) {
                this.$store.commit(SHOW_NOTIFICATION, { type: 'error', msg: 'Invalid Fields' });
                return;
            }
            action({ username: this.username, password: this.password }).then(() => {
                this.$router.push('ledger');
            });
        },
        requiredRule(fieldName) {
            return [v => !!v || `${fieldName} is required`];
        }
    },
    beforeMount() {
        if (this.isAuthenticated) {
            this.$router.push('/ledger');
        }
    }
};
</script>

<style scoped>
</style>
