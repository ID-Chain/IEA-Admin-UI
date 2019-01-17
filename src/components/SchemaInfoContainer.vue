<template>
    <v-container row wrap>
        <p class="title mb-0">General Information</p>
        <v-divider class="mb-3"/>
        <text-with-label label="Name" :value="info.name" />
        <text-with-label full-size label="Version" :value="info.version" />
        <text-with-label full-size label="Created" :value="info.createdAt | date" />
        <text-with-label full-size label="Last Update" :value="info.updatedAt | date" />
        <text-with-label full-size label="Is Revocable?" :value="info.isRevocable" />
        <text-with-label full-size label="Is Deprecated?" :value="info.isDeprecated" />
        <text-with-label full-size label="Wallet" :value="info.wallet" />
        <text-with-label full-size label="Schema Id" :value="info.schemaId" />
        <text-with-label full-size label="Credential Definition Id"
                         v-if="info.credentialDefinitionId" :value="info.credentialDefinitionId" />
    </v-container>
</template>

<script>
import TextWithLabel from './TextWithLabel';
export default {
    name: 'SchemaInfoContainer',
    components: { TextWithLabel },
    props: {
        info: {
            type: Object,
            required: true
        }
    }
};
</script>

<style scoped>
</style>
