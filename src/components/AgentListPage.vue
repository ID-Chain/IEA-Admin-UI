<template>
  <v-container fluid fill-height class="ledger mt-3">
    <v-layout justify-center row wrap>
      <v-flex xs12 sm12 md10 lg10 xl8>
        <v-card class="list py-0 mt-2" flat>
          <v-list-tile class="pt-2">
            <p class="headline mb-0 pb-0">
              <v-icon medium class="mt-0 pt-0 mr-2" color="primary">{{icon}}</v-icon>
              <span class="hidden-md-and-down">{{ title }}</span>
            </p>
            <v-btn class="accent ml-3 mb-1" v-if="addAction" @click="createNew()" small>
              <v-icon class="pl-0 ml-0 mr-1" small>add</v-icon>
              <span class="hidden-md-and-down">add</span>
            </v-btn>
            <v-spacer/>
            <v-text-field
                    append-icon="search"
                    label="Search"
                    single-line
                    hide-details
                    v-model="search"
            ></v-text-field>
          </v-list-tile>
          <v-card-text class="mx-0 px-0 mb-0">
            <v-data-table
                    :loading="loading"
                    :headers="headers"
                    :items="items"
                    :search="search"
                    :rows-per-page-items="rowsPerPage"
                    item-key="name"
                    class="elevation-0"
            >
              <template slot="items" slot-scope="props">
                <tr>
                  <slot name="itemValues" :item="props.item"></slot>
                  <td>
                    <v-btn icon class="accent--text" @click="viewDetails(props.item)">
                      <v-icon>fa fa-eye</v-icon>
                    </v-btn>
                    <v-btn icon v-if="editAction" class="accent--text" @click="edit(props.item)">
                      <v-icon>edit</v-icon>
                    </v-btn>
                    <v-btn icon v-if="removeAction" class="accent--text" @click="remove(props.item)">
                      <v-icon>fas fa-trash-alt</v-icon>
                    </v-btn>
                  </td>
                </tr>
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
    name: 'AgentListPage',
    props: {
        title: String,
        icon: String,
        loading: Boolean,
        items: Array,
        headers: {
            type: Array,
            default: () => []
        },
        pollingInterval: {
            type: Number,
            default: 15000
        },
        addAction: {
            type: Boolean,
            default: true
        },
        editAction: {
            type: Boolean,
            default: true
        },
        removeAction: {
            type: Boolean,
            default: true
        }
    },
    data: () => ({
        interval: 0,
        search: '',
        rowsPerPage: [10, 15, 20, 30, { text: 'All', value: -1 }]
    }),
    methods: {
        viewDetails(item) {
            this.$emit('view', item);
        },
        createNew() {
            this.$emit('create');
        },
        edit(item) {
            this.$emit('edit', item);
        },
        remove(item) {
            this.$emit('remove', item);
        }
    },
    created() {
        this.$emit('getList', { showSpinner: true });
        this.interval = setInterval(() => this.$emit('getList', { showSpinner: false }), this.pollingInterval);
    },
    beforeDestroy() {
        clearInterval(this.interval);
    }
};
</script>

<style scoped>
</style>
