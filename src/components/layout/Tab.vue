<template>
    <div class="tabs">
        <div class="tab" v-for="tab in tabs" :key="tab.id">
            <div class="tabs-header">
                <ul class="tabs-items">
                    <li class="tabs-item">
                        <a>
                            <span class="tabs-name">
                                {{ tab.name }}
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="tabs-content">
                <ul class="tabs-items">
                    <li class="tabs-item">
                        <phonebook-structure :type="tab.storage"/>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import PhonebookStructure from '../phonebook/PhonebookStructure'

    export default {
        props: {
            tabs: Array
        },
        components: {
            PhonebookStructure
        }
    }
</script>

<style lang="scss">
    .tabs {
        position: relative;
        display: flex;
        flex-direction: column;
        width: 100%;
        flex: 1;
    }

    .tabs-content {
        position: relative;
        display: flex;
        flex-direction: column;
        width: 100%;
        flex: 1;
        -webkit-print-color-adjust: exact;
    }

    .tabs-name {
        font-size: 16px;
    }
    .tabs-items {
        list-style-type: none;
        padding-left: 0;
    }
</style>