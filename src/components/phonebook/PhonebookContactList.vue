<template>
    <div class="phonebook-contacts-block">
        <h2>Блок финансовой стратегии</h2>
        <div class="phonebook-contacts">
            <phonebook-contact-item />
        </div>
    </div>
</template>

<script>
    import PhonebookContactItem from "./PhonebookContactItem"

    export default {
        components: {
            PhonebookContactItem
        }
    }
</script>

<style lang="scss">
@import './src/assets/styles/variables.scss';

    .phonebook-contacts-block {
        padding: 0;
        background-color: $white;
        height: 100%;
        width: 100%;

        .phonebook-contacts-block--closed {
            display: none;
        }
    }
</style>