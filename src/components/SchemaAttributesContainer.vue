<template>
    <v-container row wrap class="pt-3">
        <h2 class="title mb-0">Attributes</h2>
        <v-divider class="mb-3"/>
        <span v-for="(attribute, index) in info.attributes" :key="attribute[index]">
            <text-with-label :label="attribute.name" :value="attribute.type" />
        </span>
    </v-container>
</template>

<script>
import TextWithLabel from './TextWithLabel';
export default {
    name: 'SchemaAttributesContainer',
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
