<template>
  <v-container fluid fill-height class="registration">
    <v-layout justify-center row wrap class="mt-3">
      <v-flex xs12 sm10 md10 lg9 xl6>
        <v-card class="mt-2">
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
                      {{title}}
                  </span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>
          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-layout wrap row>
                <v-flex xs8 sm8 md10>
                  <h5 class="headline font-weight-bold font-italic mt-2 accent--text">
                    Schema</h5>
                </v-flex>
              </v-layout>
              <v-divider class="mb-3 accent"/>
              <v-layout wrap row>
                <v-flex xs12 sm12 md4 lg6>
                  <v-text-field
                          class="pa-1"
                          v-model="name"
                          :rules="requiredAndLength(nameLabel, nameMaxLength)"
                          :label="nameLabel"
                          :loading="loading"
                          :disabled="loading"
                          required
                  ></v-text-field>
                  <v-text-field
                          class="pa-1"
                          v-model="version"
                          :rules="versionRules()"
                          :label="versionLabel"
                          :loading="loading"
                          :disabled="loading"
                          required
                  ></v-text-field>
                  <v-select
                          class="pa-1"
                          v-if="isParent"
                          v-model="parentSchemaId"
                          :items="allSchemas"
                          :item-text="({ name, version }) => `${name}, v${version}`"
                          item-value="schemaId"
                          label="Parent"
                          :rules="[v => !!v || `Parent Schema is required (if active)`]"
                          :disabled="loading"
                  ></v-select>
                </v-flex>
                <v-layout justify-center fill-height wrap>
                  <v-flex xs12 sm12 md8 lg6 class="fill-height">
                    <v-switch
                            class="my-3"
                            :label="`Create Credential Definition? ${credentialDefinition? 'Yes': 'No'}`"
                            v-model="credentialDefinition"
                            :disabled="loading"
                    ></v-switch>
                    <v-switch
                            v-if="credentialDefinition"
                            class="my-3"
                            :label="`Revocable? ${revocable? 'Yes': 'No'}`"
                            v-model="revocable"
                            :disabled="loading"
                    ></v-switch>
                    <v-switch
                            class="my-3"
                            :label="`Parent Schema? ${isParent? 'Yes': 'No'}`"
                            v-model="isParent"
                            :disabled="loading"
                    ></v-switch>
                  </v-flex>
                </v-layout>
              </v-layout>
              <v-layout wrap row>
                <v-flex xs8 sm8 md10>
                  <h5 class="headline font-weight-bold font-italic mt-2 accent--text">
                    Attributes</h5>
                </v-flex>
                <v-flex xs4 sm4 md2 class="text-xs-right">
                  <v-btn
                          class="accent -align-right mr-0"
                          small
                          @click="addItem()"
                          :disabled="loading"
                  >
                    <v-icon small>add</v-icon>
                    Add
                  </v-btn>
                </v-flex>
              </v-layout>
              <v-divider class="mb-3 accent"/>
              <v-layout wrap row v-if="isParent && !!parentSchemaId"
                        v-for="(attribute, index) in parentSchemaDetails.attributes" :key="attribute[index]">
                <v-flex xs12 sm12 md7>
                  <v-text-field
                          v-model="attribute.name"
                          :rules="requiredAndLength(attributeLabel, attributeMaxLength)"
                          :label="attributeLabel"
                          disabled
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 sm12 md5 class="text-xs-right" d-inline-flex>
                  <v-text-field
                          class="px-2 -align-right"
                          style="width: 85%"
                          v-model="attribute.type"
                          label="Type"
                          disabled
                  ></v-text-field>
                  <v-btn class="white -align-right error--text mt-3 mr-0 mb-0 px-0" small outline disabled>
                    <v-icon small>fa fa-trash</v-icon>
                  </v-btn>
                </v-flex>
              </v-layout>
              <v-layout wrap row v-for="(attribute, index) in attributes" :key="attribute[index]">
                <v-flex xs12 sm12 md7>
                  <v-text-field
                          v-model="attribute.name"
                          :rules="attributeNameRules(index)"
                          :label="attributeLabel"
                          :loading="loading"
                          :disabled="loading"
                          required
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 sm12 md5 class="text-xs-right" d-inline-flex>
                  <v-select
                          class="px-2 -align-right"
                          style="width: 85%"
                          v-model="attribute.type"
                          :items="types"
                          label="Type"
                          :rules="[v => !!v || `Type is required`]"
                          :loading="loading"
                          :disabled="loading"
                  ></v-select>
                  <v-btn class="white -align-right error--text mt-3 mr-0 mb-0 px-0" small outline
                         @click="removeItem(index)" :disabled="attributes.length === 1 || loading">
                    <v-icon small>fa fa-trash</v-icon>
                  </v-btn>
                </v-flex>
              </v-layout>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn
                    @click="clear"
                    color="error"
                    class="ml-2"
                    small
                    outline
                    :disabled="loading"
            >clear
            </v-btn>
            <v-spacer/>
            <v-btn
                    :disabled="!valid"
                    @click="submit"
                    color="primary"
                    class="mr-2"
                    small
                    :loading="loading"
            >
              submit
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { SHOW_NOTIFICATION } from '../store/mutation-types';

const versionRegex = /^[0-9]{1,2}\.[0-9]{1,2}$/;
const attributeMaxLength = 40;
const attributeRegex = /^[a-z0-9_]{1,40}$/;

export default {
    name: 'SchemaForm',
    props: {
        schemaId: String
    },
    data: () => ({
        intervalList: 0,
        intervalDetails: 0,
        valid: true,
        parentSchemaId: '',
        name: '',
        nameMaxLength: 40,
        nameLabel: 'Name',
        version: '',
        versionLabel: 'Version',
        versionMaxLength: 5,
        attributeLabel: 'Name',
        attributeMaxLength: attributeMaxLength,
        attributes: [
            {
                name: '',
                type: ''
            },
            {
                name: '',
                type: ''
            }
        ],
        isParent: false,
        revocable: false,
        credentialDefinition: true
    }),
    computed: {
        ...mapGetters({
            loading: 'isLoading',
            allSchemas: 'getSchemaList',
            schemaDetails: 'getSchemaDetails',
            parentSchemaDetails: 'getParentSchemaDetails',
            types: 'getTypes'
        }),
        title() {
            if (!this.schemaId) return 'New Schema';
            return 'Edit Schema';
        }
    },
    watch: {
        isParent(newValue) {
            if (newValue) {
                this.getSchemaList({ showSpinner: true });
                this.intervalList = setInterval(() => this.getSchemaList({ showSpinner: false }), 5000);
            } else {
                clearInterval(this.intervalList);
                clearInterval(this.intervalDetails);
            }
        },
        parentSchemaId(schemaId) {
            if (this.isParent && schemaId) {
                this.getParentSchemaDetails({ showSpinner: true, schemaId });
            }
        }
    },
    methods: {
        ...mapActions({
            getSchemaList: 'getSchemaList',
            getSchemaDetails: 'getSchemaDetails',
            getParentSchemaDetails: 'getParentSchemaDetails',
            submitNewSchema: 'submitNewSchema',
            getTypes: 'getTypes'
        }),
        requiredAndLength(label, maxLength) {
            return [
                v => !!v || `${label} is required`,
                v => (v && v.length <= maxLength) || `${label} must be less than ${maxLength} characters`
            ];
        },
        versionRules() {
            return [
                v => !!v || `Attribute is required`,
                v =>
                    (v && v.length <= this.attributeMaxLength) ||
                    `Attribute must be less than ${this.attributeMaxLength} characters`,
                v => versionRegex.test(v) || 'Invalid version, examples: 1.0, 10.00'
            ];
        },
        attributeNameRules() {
            return [
                v => !!v || `Attribute is required`,
                v =>
                    (v && v.length <= this.attributeMaxLength) ||
                    `Attribute must be less than ${this.attributeMaxLength} characters`,
                v => attributeRegex.test(v) || 'Only lower alpha-numeric characters and _ allowed',
                v => {
                    let attributes = Array.from(this.attributes);
                    if (this.isParent && typeof this.parentSchemaDetails.attributes === 'object')
                        this.parentSchemaDetails.attributes.forEach(i => attributes.push(i));
                    let matches = 0;
                    attributes.forEach(({ name }) => {
                        if (name === v) matches++;
                    });
                    return matches < 2 || `Duplicated attribute name`;
                }
            ];
        },
        submit() {
            if (this.$refs.form.validate()) {
                let payload = {
                    name: this.name,
                    version: this.version,
                    createCredentialDefinition: this.credentialDefinition,
                    isRevocable: this.revocable,
                    attributes: this.attributes
                };
                if (this.isParent && this.parentSchemaId) payload.parentSchemaId = this.parentSchemaId;
                if (this.credentialDefinition) {
                    this.$store.commit(SHOW_NOTIFICATION, {
                        type: 'info',
                        msg: `Please be patient, big numbers are being generated`,
                        timeout: 8000
                    });
                }
                this.submitNewSchema(payload)
                    .then(({ schemaId }) => {
                        this.$store.commit(SHOW_NOTIFICATION, {
                            type: 'success',
                            msg: `Successfully created new schema!`
                        });
                        this.$router.push({ name: 'schemaDetails', params: { schemaId } });
                    })
                    .catch(e => {
                        console.error(e);
                        this.$store.commit(SHOW_NOTIFICATION, {
                            type: 'error',
                            msg: (e.data || {}).message || `Error while registering new company!`
                        });
                    });
            }
        },
        addItem() {
            this.attributes.push({
                name: '',
                type: ''
            });
        },
        removeItem(index) {
            this.attributes.splice(index, 1);
        },
        clear() {
            this.$refs.form.reset();
        }
    },
    created() {
        if (this.schemaId) {
            this.getSchemaDetails({ showSpinner: true, schemaId: this.schemaId }).then(() => {
                this.name = this.schemaDetails.name;
                this.version = this.schemaDetails.version;
                this.attributes = this.schemaDetails.attributes;
                this.revocable = this.schemaDetails.isRevocable;
                this.credentialDefinition = !!this.schemaDetails.credentialDefinitionId;
                this.isParent = !!this.schemaDetails.parentSchemaId;
                this.parentSchemaId = this.schemaDetails.parentSchemaId;
            });
        }
        this.getTypes(true);
    },
    beforeDestroy() {
        if (this.intervalList) clearInterval(this.intervalList);
        if (this.intervalDetails) clearInterval(this.intervalDetails);
    }
};
</script>
