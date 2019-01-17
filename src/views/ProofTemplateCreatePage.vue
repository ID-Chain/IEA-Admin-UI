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
                      <span class="hidden-sm-and-down">New Proof Req. Template</span>
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
                  </v-flex>
                </v-flex>
                <v-flex xs12 sm12 md12 lg8 class="px-4 mt-3">
                  <v-layout wrap row>
                    <v-flex>
                      <p class="title mb-0 pt-3">Template</p>
                    </v-flex>
                    <v-flex class="text-xs-right">
                      <v-btn
                              @click="insertExample"
                              color="secondary"
                              class="mx-0"
                              small
                              :loading="loading"
                      >
                        <v-icon small>fa fa-add</v-icon>
                        <span class="hidden-sm-and-down">&nbsp;Insert Example</span>
                      </v-btn>
                    </v-flex>
                  </v-layout>
                  <v-divider class="mb-3"/>
                  <v-form ref="form" class="text-xs-right">
                    <v-textarea
                            outline
                            name="input-7-1"
                            auto-grow
                            label="Proof Request Template"
                            :placeholder="example"
                            v-model="template"
                            :rules="templateRules"
                    ></v-textarea>
                  </v-form>
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
                    @click="dismiss"
                    color="error"
                    class="mx-2"
                    small
                    :disabled="loading"
            >
              <span class="hidden-sm-and-down">&nbsp;clear</span>
            </v-btn>
            <v-btn
                    @click="create"
                    color="primary"
                    class="mr-2"
                    small
                    :loading="loading"
            >
              <v-icon small>fa fa-add</v-icon>
              <span class="hidden-sm-and-down">&nbsp;submit</span>
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

export default {
    name: 'ProofTemplateCreatePage',
    data: () => ({
        template: '',
        templateRules: [
            v => !!v || 'Template is required',
            v => v.indexOf('name') > -1 || 'Template should have a name field',
            v => v.indexOf('version') > -1 || 'Template should have a version field',
            v => v.indexOf('requested_attributes') > -1 || 'Template should have a name field'
        ],
        example: `{
    "name": "IdentityProof",
    "version":"1.0",
    "requested_attributes":{
        "attr1_referent":{
            "name":"given_name@string",
            "restrictions":[
                {"cred_def_id":"{{credDefId}}"}
            ],
            "revealed":true
        },
        "attr2_referent":{
            "name":"bsn@integer",
            "restrictions":[{"cred_def_id":"{{credDefId}}"}],
            "revealed":true
            }
        },
        "requested_predicates":{
            "predicate1_referent":{
                "name":"birth_date@inverted_unix_time",
                "p_type":">=",
                "p_value":{{eightTeenYearsAgoInSeconds}},
                "restrictions":[{"cred_def_id":"{{credDefId}}"}]
            }
        },
        "non_revoked": {"from": 0, "to": {{now}}}
    }`
    }),
    computed: {
        ...mapGetters({
            loading: 'isLoading'
        })
    },
    methods: {
        ...mapActions({
            submitNew: 'createNewProofTemplate'
        }),
        create() {
            if (this.$refs.form.validate()) {
                this.submitNew({ showSpinner: true, payload: { template: this.template } })
                    .then(({ id }) => {
                        this.$store.commit(SHOW_NOTIFICATION, {
                            type: 'success',
                            msg: `Successfully created template!`
                        });
                        this.$router.push({ name: 'proofTemplateDetails', params: { id } });
                    })
                    .catch(e => {
                        console.error(e);
                        this.$store.commit(SHOW_NOTIFICATION, {
                            type: 'error',
                            msg: (e.data || {}).message || `Error while creating template!`
                        });
                    });
            }
        },
        dismiss() {
            this.$refs.form.reset();
        },
        back() {
            this.$router.push({ name: 'proofTemplateList' });
        },
        insertExample() {
            this.template = this.example;
        }
    }
};
</script>

<style scoped>
pre {
    white-space: pre-wrap; /* Since CSS 2.1 */
    white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
    white-space: -o-pre-wrap; /* Opera 7 */
    word-wrap: break-word; /* Internet Explorer 5.5+ */
}
</style>
