<template>
    <v-toolbar dense fixed color="primary" light>
        <v-icon medium>fab fa-connectdevelop</v-icon>
        <router-link tag="span" class="list__tile--link font-italic" :to="'/ledger'">
            <v-toolbar-title class="title hidden-sm-and-down pa-2">IDChain - Agent Admin Portal</v-toolbar-title>
        </router-link>
        <v-spacer />
        <v-toolbar-items v-if="connected">
            <v-tooltip bottom>
                <v-btn flat class="ml-5" :to="{ name: 'ledger'}" slot="activator" exact>
                    <v-icon color="secondary">line_weight</v-icon>
                    <span class="hidden-sm-and-down ml-2">Ledger</span>
                </v-btn>
                <span>Ledger</span>
            </v-tooltip>
            <v-tooltip bottom>
                <v-btn flat :to="{ name: 'connectionsList'}" slot="activator" exact>
                    <v-icon color="secondary">fas fa-link</v-icon>
                    <span class="hidden-sm-and-down ml-2">Connections</span>
                </v-btn>
                <span>Connections</span>
            </v-tooltip>
            <v-tooltip bottom>
                <v-btn flat :to="{ name: 'schemaList'}" slot="activator" exact>
                    <v-icon color="secondary">far fa-clipboard</v-icon>
                    <span class="hidden-sm-and-down ml-2">Schemas</span>
                </v-btn>
                <span>Schemas</span>
            </v-tooltip>
            <v-tooltip bottom>
                <v-btn flat :to="{name: 'proofTemplateList'}" slot="activator" exact>
                    <v-icon color="secondary">fas fa-money-check</v-icon>
                    <span class="hidden-sm-and-down ml-2">Proofs</span>
                </v-btn>
                <span>Proof Request Templates</span>
            </v-tooltip>
            <v-tooltip bottom>
                <v-btn flat @click="$emit('logout')" slot="activator" exact>
                    <v-icon color="secondary">logout</v-icon>
                    <span class="hidden-sm-and-down ml-2">Logout</span>
                </v-btn>
                <span>Logout</span>
            </v-tooltip>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default {
    name: 'AgentTopBar',
    data() {
        return {
            connected: true
        };
    }
};
</script>

<style scoped>
.bolder {
    font-weight: 600 !important;
}
</style>
