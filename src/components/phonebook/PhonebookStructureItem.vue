<template>
    <ul class="phonebook-item">
        <li class="phonebook-object" v-if="structureItem.hasChild == false">
            <a class="phonebook-link" :id="structureItem.id" @click="showEmployes(structureItem)" title="Показать отдел"
                v-bind:class="{active: activeEl === structureItem}">
                <span>
                    {{ structureItem.name }}
                </span>
            </a>
        </li>
        <li class="phonebook-object" v-else>
            <a class="phonebook-link" :id="structureItem.id" @click="showEmployes(structureItem)" title="Показать отдел"
                v-bind:class="{active: activeEl === structureItem}">
                <span>
                    {{ structureItem.name }}
                </span>
                <button type="button" @click="addNewChild">></button>
            </a>
            <phonebook-structure-children :children="structureItem.children" />
        </li>
    </ul>
</template>

<script>
    import {
        mapActions
    } from 'vuex'
    import PhonebookStructureChildren from './PhonebookStructureChildren.vue'

    export default {
        data() {
            return {
                activeEl: this.$store.getters.activePhonebookItem
            }
        },
        components: {
            PhonebookStructureChildren
        },
        props: {
            structureItem: Object
        },
        methods: {
            ...mapActions(['addChildren', 'fetchEmployees','fetchActivePhonebookItem']),
            addNewChild() {
                this.addChildren(this.structureItem.id)
            },
            showEmployes(item) {
                this.fetchEmployees(item.id)
                this.fetchActivePhonebookItem(item)
                this.activeEl = this.$store.getters.activePhonebookItem
                // this.activeEl = item
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import './src/assets/styles/variables.scss';

    .phonebook-link {
        display: block;
        width: 100%;
        border: 1px solid transparent;
        border-bottom: 1px solid #9CA6AB;
        color: $gray;
        font-size: 18px;
        line-height: 26px;
        font-weight: 500;
        padding-bottom: 4px;
        padding-top: 4px;
        cursor: pointer;
        transition: .3s color ease, .3s background-color ease, .3s border-radius ease, .3s border-color ease;

        &.active {
            color: $sea-wave;
            background-color: rgba(39, 179, 170, 0.08);
            border-radius: 4px;
            border-color: $sea-wave;
        }
    }
</style>