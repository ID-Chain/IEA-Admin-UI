<template>
  <agent-list-page
          title="Proof Request Templates"
          icon="fas fa-money-check"
          :items="items"
          :headers="headers"
          :loading="loading"
          @getList="getList"
          @view="viewDetails"
          @create="create"
          @edit="edit"
          @remove="remove"
  >
    <template slot="itemValues" slot-scope="props">
      <td>{{ props.item.updatedAt | date }}</td>
      <td>{{ props.item.createdAt | date }}</td>
      <td>{{ props.item.id }}</td>
      <td>{{ props.item.wallet }}</td>
    </template>
  </agent-list-page>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { SHOW_NOTIFICATION } from '../store/mutation-types';
import AgentListPage from '../components/AgentListPage';

export default {
    name: 'ProofTemplateListPage',
    components: { AgentListPage },
    data: () => ({
        headers: [
            {
                text: 'Last Updated',
                value: 'updatedAt'
            },
            {
                text: 'Created On',
                value: 'createdAt'
            },
            {
                text: 'ID',
                value: 'id'
            },
            {
                text: 'Wallet',
                value: 'wallet'
            },
            {
                text: 'Actions',
                value: ''
            }
        ]
    }),
    computed: {
        ...mapGetters({
            items: 'getProofTemplateList',
            loading: 'isLoading'
        })
    },
    methods: {
        ...mapActions({
            getList: 'getProofTemplateList',
            removeTemplate: 'removeProofTemplate'
        }),
        viewDetails({ id }) {
            this.$router.push({ name: 'proofTemplateDetails', params: { id } });
        },
        create() {
            this.$router.push({ name: 'proofTemplateCreate' });
        },
        edit({ id }) {
            this.$router.push({ name: 'proofTemplateDetails', params: { id, editTemplate: true } });
        },
        remove({ id }) {
            this.removeTemplate({ showSpinner: true, id }).then(() => {
                this.getList({ showSpinner: true });
                this.$store.commit(SHOW_NOTIFICATION, {
                    type: 'success',
                    msg: `Successfully removed template!`
                });
            });
        }
    }
};
</script>

<style scoped>
</style>
