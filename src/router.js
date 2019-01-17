import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/LoginPage.vue';
import Ledger from './views/LedgerPage.vue';
import ProofTemplateListPage from './views/ProofTemplateListPage.vue';
import ProofTemplateDetailsPage from './views/ProofTemplateDetailsPage.vue';
import ProofTemplateCreatePage from './views/ProofTemplateCreatePage.vue';
import ConnectionsListPage from './views/ConnectionsListPage.vue';
import SchemaListPage from './views/SchemaListPage.vue';
import SchemaDetailsPage from './views/SchemaDetailsPage.vue';
import SchemaFormPage from './views/SchemaFormPage.vue';
import store from './store/store';
import { USER_LOGIN } from './store/mutation-types';

Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: '/',
            redirect: {
                name: 'login'
            }
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
            meta: { publicPage: true }
        },
        {
            path: '/ledger',
            name: 'ledger',
            component: Ledger
        },
        {
            path: '/proof-request/templates',
            name: 'proofTemplateList',
            component: ProofTemplateListPage
        },
        {
            path: '/proof-request/templates/:id',
            name: 'proofTemplateDetails',
            component: ProofTemplateDetailsPage,
            props: true
        },
        {
            path: '/proof-request/templates/new',
            name: 'proofTemplateCreate',
            component: ProofTemplateCreatePage
        },
        {
            path: '/connections',
            name: 'connectionsList',
            component: ConnectionsListPage
        },
        {
            path: '/schemas',
            name: 'schemaList',
            component: SchemaListPage
        },
        {
            path: '/schemas/new',
            name: 'schemaForm',
            component: SchemaFormPage
        },
        {
            path: '/schemas/edit/:schemaId',
            name: 'schemaEdit',
            component: SchemaFormPage,
            props: true
        },
        {
            path: '/schemas/:schemaId',
            name: 'schemaDetails',
            component: SchemaDetailsPage,
            props: true
        },
        {
            path: '*',
            redirect: '/',
            name: 'default',
            component: Login
        }
    ]
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.publicPage)) {
        next(); // make sure to always call next()!
    } else {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        const storedUser = window.localStorage.getItem('agentAdminAuth');
        if (storedUser == null) {
            next({
                path: '/login'
            });
        } else {
            store.commit(USER_LOGIN, JSON.parse(atob(storedUser)));
            next();
        }
    }
});

export default router;
