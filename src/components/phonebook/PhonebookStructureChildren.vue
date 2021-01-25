<template>
    <ul>
        <li v-for="child in children" :key="child.id">
            <div v-if="child.hasChild == false" class="children">
                <span @click="showEmployes(child)" v-bind:class="{active: activeEl === child}">
                    {{child.name}}
                </span>
            </div>
            <div class="children" v-else>
                <span @click="showEmployes(child)" v-bind:class="{active: activeEl === child}">
                    {{child.name}}
                </span>
                <button class="phonebook-button" type="button" @click="addNewChild(child)">></button>
                <phonebook-structure-children :children="child.children" />
            </div>
        </li>
    </ul>
</template>

<script>
    import axios from 'axios';
    import {
        mapActions
    } from 'vuex'
    export default {
        name: 'PhonebookStructureChildren',
        data() {
            return {
                currentEmployes: null,
                activeEl: this.$store.getters.activePhonebookItem
            }
        },
        props: {
            children: Array,
            child: Object
        },
        methods: {
            ...mapActions(['addChildren', 'fetchEmployees','fetchActivePhonebookItem']),
            addNewChild(item) {
                this.addChildren(item.id)
            },
            showEmployes(item) {
                this.fetchEmployees(item.id)
                this.fetchActivePhonebookItem(item)
                this.activeEl = this.$store.getters.activePhonebookItem
                console.log(this.activeEl)
                // this.activeEl = item
            }
        }
    }
</script>

<style lang="scss">
    @import './src/assets/styles/variables.scss';

    .children {
        display: flex;
        flex-wrap: wrap;
        margin-left: $minimal-padding;
        position: relative;

        .children {
            padding-right: 0;
        }

        ul {
            width: 100%;
        }

        span {
            color: $gray;
            font-size: 16px;
            line-height: 24px;
            font-weight: 500;
            display: block;
            width: 100%;
            padding-top: 4px;
            padding-bottom: 4px;
            margin-right: 42px;
            margin-top: 4px;
            margin-bottom: 4px;
            padding-left: 12px;
            border: 1px solid transparent;
            border-bottom: 1px solid #9CA6AB;
            cursor: pointer;
            transition: .3s color ease, .3s background-color ease, .3s border-radius ease, .3s border-color ease; 

            &.active {
                color: $sea-wave;
                background-color: rgba(39, 179, 170, 0.08);
                border-radius: 4px;
                border-color: $sea-wave;
            }
        }

        .phonebook-button {
            position: absolute;
            right: 0;
            top: 0;
            height: 32px;
            width: 32px;
            border: none;
            background: none;
            cursor: pointer;
        }

    }
</style>