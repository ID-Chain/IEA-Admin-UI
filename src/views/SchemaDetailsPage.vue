<template>
  <v-container fluid fill-height class="ledger">
    <v-layout justify-center row wrap>
      <v-flex xs12 sm10 md10 lg9 xl6>
        <v-card class="mt-3" v-if="!loading">
          <v-img
                  src="/schema.jpg"
                  aspect-ratio="3.75"
                  max-height="120px"
                  gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
          >
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                                    <span class="display-2 font-weight-bold font-italic white--text">
                                        <v-icon x-large class="mt-0 pt-0 mr-2 mb-2"
                                                color="white">far fa-clipboard</v-icon>
                                      <span class="hidden-sm-and-down">Schema Details:</span>
                                      {{details.name}} v{{details.version}}
                                    </span>
                  <p v-if="parentSchema.name"
                     class="headline white--text font-italic font-weight-bold mt-0 pl-5">
                    extends
                    <span class="hidden-sm-and-down">parent schema</span>
                    {{parentSchema.name}} v{{parentSchema.version}}
                  </p>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>
          <v-card-text class="pa-0">
            <v-container class="pa-0">
              <v-layout row wrap>
                <v-flex xs12 sm12 md12 lg4 class="text-xs-center">
                  <v-flex>
                    <img
                            src="/schema-view.svg"
                            style="height: 10vw; max-height: 250px"
                            class="fill-height mt-4"
                    />
                  </v-flex>
                  <v-flex d-flex-block>
                    <v-btn
                            @click="viewLowLevel"
                            color="accent"
                            class="mt-3"
                            small
                    >
                      <v-icon small class="mr-2">fa fa-eye</v-icon>
                      low level
                    </v-btn>
                    <v-btn
                            v-if="details.parentSchemaId"
                            color="accent"
                            class="mt-3"
                            @click="viewParent"
                            :loading="loadingParent"
                            small
                    >
                      <v-icon small class="mr-2">fa fa-eye</v-icon>
                      parent
                    </v-btn>
                  </v-flex>
                  <v-flex>
                  </v-flex>
                </v-flex>
                <v-flex xs12 sm12 md12 lg8>
                  <schema-info-container :info="details"></schema-info-container>
                  <schema-attributes-container :info="details"></schema-attributes-container>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-btn
                    @click="revokeAll"
                    color="error"
                    class="ml-2"
                    small
                    outline
                    :disabled="loading"
            >
              <v-icon small>fas fa-eject</v-icon>
              <span class="hidden-sm-and-down">&nbsp;revoke all</span>
            </v-btn>
            <v-btn
                    @click="deprecate"
                    color="error"
                    class="mx-2"
                    small
                    :disabled="loading"
            >
              <v-icon small>far fa-thumbs-down</v-icon>
              <span class="hidden-sm-and-down">&nbsp;deprecate</span>
            </v-btn>
            <v-spacer/>
            <v-btn
                    @click="edit"
                    color="primary"
                    class="mr-2"
                    small
                    :loading="loading"
            >
              <v-icon small>fa fa-edit</v-icon>
              <span class="hidden-sm-and-down">&nbsp;edit</span>
            </v-btn>
          </v-card-actions>
        </v-card>
        <agent-json-dialog title="Low level Schema"
                           :info="details.lowLevelSchema"
                           :dialog="lowLevelSchemaDialog"
                           @close="lowLevelSchemaDialog = false"
        >
        </agent-json-dialog>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import SchemaInfoContainer from '../components/SchemaInfoContainer';
import SchemaAttributesContainer from '../components/SchemaAttributesContainer';
import AgentJsonDialog from '../components/AgentJsonDialog';

export default {
    name: 'SchemaDetailsPage',
    props: ['schemaId'],
    components: { SchemaAttributesContainer, SchemaInfoContainer, AgentJsonDialog },
    data: () => ({
        interval: 0,
        loadingParent: false,
        lowLevelSchemaDialog: false
    }),
    computed: {
        ...mapGetters({
            details: 'getSchemaDetails',
            loading: 'isLoading'
        }),
        parentSchema() {
            if (!this.details.parentSchemaId) return {};
            const [, , name, version] = this.details.parentSchemaId.split(':');
            return {
                name,
                version
            };
        }
    },
    methods: {
        ...mapActions({
            getDetails: 'getSchemaDetails'
        }),
        viewParent() {
            clearInterval(this.interval);
            this.getDetails({ showSpinner: true, schemaId: this.details.parentSchemaId });
            this.interval = setInterval(
                () => this.getDetails({ showSpinner: false, schemaId: this.details.parentSchemaId }),
                15000
            );
            this.$router.push({
                name: 'schemaDetails',
                params: { schemaId: this.details.parentSchemaId },
                fullPath: true
            });
        },
        revokeAll() {
            console.log('Revoke All');
        },
        deprecate() {
            console.log('Deprecate');
        },
        edit() {
            this.$router.push({ name: 'schemaEdit', params: { schemaId: this.schemaId } });
        },
        viewLowLevel() {
            this.lowLevelSchemaDialog = true;
        }
    },
    created() {
        this.getDetails({ showSpinner: true, schemaId: this.schemaId });
        this.interval = setInterval(() => this.getDetails({ showSpinner: false, schemaId: this.schemaId }), 15000);
    },
    beforeDestroy() {
        clearInterval(this.interval);
    }
};
</script>

<style scoped>
</style>
