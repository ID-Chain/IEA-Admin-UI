<template>
  <v-layout wrap>
    <agent-list-page
            title="Connections"
            icon="fas fa-link"
            :addAction="false"
            :editAction="false"
            :removeAction="false"
            :items="info.pairwise"
            :headers="headers"
            @getList="getInfo"
            @view="viewDetails"
    >
      <template slot="itemValues" slot-scope="props">
        <td>{{ props.item['my_did'] }}</td>
        <td>{{ info.ownDid }}</td>
        <td>{{ props.item['their_did'] }}</td>
        <td>{{ props.item.metadata.theirEndpointDid }}</td>
        <td>{{ props.item.metadata.acknowledged }}</td>
      </template>
    </agent-list-page>
    <agent-json-dialog title="Connection Details"
                       :dialog="dialog"
                       :info="connection"
                       @close="closeDialog">
    </agent-json-dialog>
  </v-layout>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import AgentListPage from '../components/AgentListPage';
import AgentJsonDialog from '../components/AgentJsonDialog';

export default {
    name: 'ConnectionsListPage',
    components: { AgentJsonDialog, AgentListPage },
    data: () => ({
        headers: [
            {
                text: 'My DID',
                value: 'my_did'
            },
            {
                text: 'My Endpoint DID',
                value: 'ownDid'
            },
            {
                text: 'Their DID',
                value: 'their_did'
            },
            {
                text: 'Their Endpoint DID',
                value: 'metadata.theirEndpointDid'
            },
            {
                text: 'Acknowledged',
                value: 'metadata.acknowledged'
            },
            {
                text: 'Actions',
                value: ''
            }
        ],
        connection: {},
        dialog: false
    }),
    computed: {
        ...mapGetters({
            info: 'getWallet'
        })
    },
    methods: {
        ...mapActions({
            getInfo: 'getWalletInfo'
        }),
        viewDetails(connection) {
            this.connection = connection;
            this.dialog = true;
        },
        closeDialog() {
            this.dialog = false;
        }
    },
    created() {
        this.getInfo({ showSpinner: false });
        this.interval = setInterval(() => this.getInfo({ showSpinner: false }), 15000);
    },
    beforeDestroy() {
        clearInterval(this.interval);
    }
};
</script>

<style scoped>
</style>
