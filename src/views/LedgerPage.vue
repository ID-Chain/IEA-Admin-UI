<template>
  <v-container fluid fill-height class="ledger">
    <v-layout justify-center row wrap>
      <v-flex xs12 sm12 md10 lg10 xl8>
        <v-card class="list py-0 mt-2" flat>
          <v-list-tile class="pt-2">

            <p class="headline mb-0"><v-icon medium class="mt-0 pt-0 mr-2" color="primary">line_weight</v-icon>Ledger Transactions</p>
            <v-spacer />
            <v-text-field
              append-icon="search"
              label="Search DIDs"
              single-line
              hide-details
              v-model="search"
            ></v-text-field>
          </v-list-tile>
          <v-card-text class="mx-0 px-0 mb-0">
            <v-data-table
              :headers="headers"
              :items="items"
              :search="search"
              :rows-per-page-items="rowsPerPage"
              item-key="name"
              class="elevation-0"
            >
              <template slot="items" slot-scope="props">
                <tr @click="viewTransactionDetails(props.item)">
                  <td>{{ props.item.txnMetadata.seqNo }}</td>
                  <td>{{ props.item.txnMetadata.txnTime | date }}</td>
                  <td>{{ props.item.txn.type | txType }}</td>
                  <td>{{ props.item.txn.data.role | txRole(props.item.txn.type) }}</td>
                  <td>{{ props.item.txn.metadata.from }}</td>
                  <td>{{ props.item.txn.data.dest }}</td>
                </tr>
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
        <agent-json-dialog title="Transaction Details"
                           :dialog="txDetailsDialog"
                           :info="txDetails"
                           @close="closeDialog">
        </agent-json-dialog>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import AgentJsonDialog from '../components/AgentJsonDialog';
export default {
    name: 'LedgerPage',
    components: { AgentJsonDialog },
    data: () => ({
        interval: 0,
        search: '',
        txDetailsDialog: false,
        txDetails: {},
        rowsPerPage: [10, 15, 20, 30, { text: 'All', value: -1 }],
        headers: [
            {
                text: 'SeqNo',
                value: 'txnMetadata.seqNo'
            },
            {
                text: 'Tx Time',
                value: 'txnMetadata.txnTime'
            },
            {
                text: 'Type',
                value: 'txn.type'
            },
            {
                text: 'Role',
                value: 'txn.data.role'
            },
            {
                text: 'Identifier',
                value: 'txn.metadata.from'
            },
            {
                text: 'Destination',
                value: 'txn.data.dest'
            }
        ]
    }),
    computed: {
        ...mapGetters({
            items: 'getAllTransactions'
        })
    },
    methods: {
        ...mapActions({
            getTransactions: 'getAllTransactions'
        }),
        viewTransactionDetails(transaction) {
            this.txDetails = transaction;
            this.txDetailsDialog = true;
        },
        closeDialog() {
            this.txDetailsDialog = false;
        }
    },
    created() {
        this.getTransactions({ showSpinner: false });
        this.interval = setInterval(() => this.getTransactions({ showSpinner: false }), 15000);
    },
    beforeDestroy() {
        clearInterval(this.interval);
    }
};
</script>

<style scoped>
</style>
