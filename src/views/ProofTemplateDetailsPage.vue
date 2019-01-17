<template>
  <v-container fluid fill-height class="ledger">
    <v-layout justify-center row wrap>
      <v-flex xs12 sm10 md10 lg9 xl6>
        <v-card class="mt-3" v-if="!loading">
          <v-img
                  src="/proofs.jpg"
                  aspect-ratio="3.75"
                  max-height="120px"
                  gradient="to top right, rgba(100,115,201,.33), rgba(59,154,90,.7)"
          >
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                    <span class="display-2 font-weight-bold font-italic white--text">
                        <v-icon x-large class="mt-0 pt-0 mr-2 mb-2"
                                color="white">fas fa-money-check</v-icon>
                      <span class="hidden-sm-and-down">Proof Req. Template Details</span>
                    </span>
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
                            src="/proof-template.png"
                            style="height: 10vw; max-height: 250px"
                            class="fill-height mt-4"
                    />
                    <v-flex class="px-4">
                      <p class="title mb-0">Details</p>
                      <v-divider class="mb-3"/>
                      <p class="subheading mb-1">ID: {{ details.id }}</p>
                      <p class="subheading mb-1">Created {{ details.createdAt | date }}</p>
                      <p class="subheading mb-1">Updated {{ details.updatedAt | date }}</p>
                    </v-flex>
                  </v-flex>
                </v-flex>
                <v-flex xs12 sm12 md12 lg8 class="px-4 mt-3">
                  <p class="title mb-0">Template</p>
                  <v-divider class="mb-3"/>
                    <pre v-if="!editFlag">
                      {{ details.template }}
                    </pre>
                    <v-textarea
                            v-else
                            outline
                            name="input-7-1"
                            auto-grow
                            label="Edit Proof Request Template"
                            v-model="details.template"
                    ></v-textarea>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-btn
                    @click="back"
                    color="secondary"
                    class="mx-2"
                    small
                    icon
                    :disabled="loading"
            >
              <v-icon>arrow_back</v-icon>
            </v-btn>
            <v-spacer/>
            <v-btn
                    v-if="!editFlag"
                    @click="remove"
                    color="error"
                    class="mx-2"
                    small
                    :disabled="loading"
            >
              <v-icon small>fas fa-trash-alt</v-icon>
              <span class="hidden-sm-and-down">&nbsp;delete</span>
            </v-btn>
            <v-btn
                    v-if="!editFlag"
                    @click="editFlag = true"
                    color="primary"
                    class="mr-2"
                    small
                    :loading="loading"
            >
              <v-icon small>fa fa-edit</v-icon>
              <span class="hidden-sm-and-down">&nbsp;edit</span>
            </v-btn>
            <v-btn
                    v-if="editFlag"
                    @click="editFlag = false"
                    color="error"
                    class="mr-2"
                    small
                    :loading="loading"
            >
              <span class="hidden-sm-and-down">&nbsp;cancel</span>
            </v-btn>
            <v-btn
                    v-if="editFlag"
                    @click="update"
                    color="primary"
                    class="mr-2"
                    small
                    :loading="loading"
            >
              <span class="hidden-sm-and-down">&nbsp;submit update</span>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { SHOW_NOTIFICATION } from '../store/mutation-types';
import TextWithLabel from '../components/TextWithLabel';

export default {
    name: 'ProofTemplateDetailsPage',
    components: { TextWithLabel },
    props: {
        id: String,
        editTemplate: {
            type: Boolean,
            default: false
        }
    },
    data: () => ({
        interval: 0,
        loadingParent: false,
        lowLevelSchemaDialog: false,
        editFlag: false
    }),
    computed: {
        ...mapGetters({
            details: 'getProofTemplateDetails',
            loading: 'isLoading'
        })
    },
    methods: {
        ...mapActions({
            getDetails: 'getProofTemplateDetails',
            submitUpdate: 'updateProofTemplate',
            removeTemplate: 'removeProofTemplate'
        }),
        remove() {
            this.removeTemplate({ showSpinner: true, id: this.id }).then(() => {
                this.$store.commit(SHOW_NOTIFICATION, {
                    type: 'success',
                    msg: `Successfully removed template!`
                });
                this.$router.push({ name: 'proofTemplateList' });
            });
        },
        edit() {
            this.editFlag = true;
        },
        update() {
            this.submitUpdate({ showSpinner: true, id: this.id, payload: { template: this.details.template } })
                .then(() => {
                    this.$store.commit(SHOW_NOTIFICATION, {
                        type: 'success',
                        msg: `Successfully updated template!`
                    });
                    this.editFlag = false;
                })
                .catch(e => {
                    console.error(e);
                    this.$store.commit(SHOW_NOTIFICATION, {
                        type: 'error',
                        msg: (e.data || {}).message || `Error while updating template!`
                    });
                });
        },
        back() {
            this.$router.push({ name: 'proofTemplateList' });
        }
    },
    created() {
        this.editFlag = this.editTemplate;
        this.getDetails({ showSpinner: true, id: this.id });
        this.interval = setInterval(() => this.getDetails({ showSpinner: false, id: this.id }), 15000);
    },
    beforeDestroy() {
        clearInterval(this.interval);
    }
};
</script>

<style scoped>
pre {
    white-space: pre-wrap; /* Since CSS 2.1 */
    white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
    white-space: -pre-wrap; /* Opera 4-6 */
    white-space: -o-pre-wrap; /* Opera 7 */
    word-wrap: break-word; /* Internet Explorer 5.5+ */
}
</style>
