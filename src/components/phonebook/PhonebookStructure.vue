<template>
    <ul class="phonebook-list">
        <li 
        v-for="structureItem in structure" 
        :key="structureItem.id">
            <phonebook-structure-item :structureItem="structureItem" />
        </li>
    </ul>
</template>

<script>
    import {
        mapGetters,
        mapActions
    } from 'vuex';
    import PhonebookStructureItem from './PhonebookStructureItem.vue';

    export default {
        components: {
            PhonebookStructureItem
        },
        methods: mapActions(['fetchParents']),
        computed: mapGetters(['structure']),
        async mounted() {
            this.fetchParents('funcStructure');
        }
    }
</script>

<style lang="scss" scoped>
   @import './src/assets/styles/variables.scss';

    .phonebook-list {
        list-style-type: none;
        padding-left: 0;
        display: flex;
        flex-direction: column;
    }
</style>