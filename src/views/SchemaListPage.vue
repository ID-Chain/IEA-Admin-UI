<template>
  <agent-list-page
          title="Schemas"
          icon="far fa-clipboard"
          :removeAction="false"
          :items="items"
          :headers="headers"
          @getList="getList"
          @view="viewDetails"
          @create="create"
          @edit="edit"
  >
    <template slot="itemValues" slot-scope="props">
      <td>{{ props.item.createdAt | date }}</td>
      <td>{{ props.item.name }}</td>
      <td>{{ props.item.version }}</td>
      <td>{{ props.item.schemaId }}</td>
    </template>
  </agent-list-page>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import AgentListPage from '../components/AgentListPage';

export default {
    name: 'SchemaListPage',
    components: { AgentListPage },
    data: () => ({
        headers: [
            {
                text: 'Created On',
                value: 'createdAt'
            },
            {
                text: 'Name',
                value: 'name'
            },
            {
                text: 'Version',
                value: 'version'
            },
            {
                text: 'Schema ID',
                value: 'schemaId'
            },
            {
                text: 'Actions',
                value: ''
            }
        ]
    }),
    computed: {
        ...mapGetters({
            items: 'getSchemaList'
        })
    },
    methods: {
        ...mapActions({
            getList: 'getSchemaList'
        }),
        viewDetails({ schemaId }) {
            this.$router.push({ name: 'schemaDetails', params: { schemaId } });
        },
        create() {
            this.$router.push({ name: 'schemaForm' });
        },
        edit({ schemaId }) {
            this.$router.push({ name: 'schemaEdit', params: { schemaId } });
        }
    },
    created() {
        this.getList({ showSpinner: false });
        this.interval = setInterval(() => this.getList({ showSpinner: false }), 15000);
    },
    beforeDestroy() {
        clearInterval(this.interval);
    }
};
</script>

<style scoped>
</style>
