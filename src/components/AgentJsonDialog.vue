<template>
  <v-dialog persistent :value="dialog" max-width="1000">
    <v-card>
      <v-card-title class="ma-0">
        <v-flex>
          <p class="headline pa-2 ma-0">{{title}}</p>
        </v-flex>
        <v-spacer/>
        <v-flex class="text-xs-right">
          <v-btn icon @click="closeDialog">
            <v-icon>close</v-icon>
          </v-btn>
        </v-flex>
      </v-card-title>
      <v-card-text class="ma-0 px-4 pt-0">
        <div style="overflow-x: scroll" class="grey lighten-3 mx-4">
          <pre lang="json" class="pa-3">{{info}}</pre>
        </div>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
    name: 'AgentJsonDialog',
    props: {
        title: String,
        dialog: Boolean,
        info: Object
    },
    methods: {
        closeDialog() {
            this.$emit('close');
        }
    }
};
</script>

<style scoped>
</style>
