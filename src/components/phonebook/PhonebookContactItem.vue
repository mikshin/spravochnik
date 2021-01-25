<template>
    <div>
        <a class="contact" v-for="employer in currentEmployees" :key="employer.id">
            <img :src="employer.avatar" :alt="employer.name" class="contact-avatar">
            <object class="contact-info">
                <div class="contact-name">
                    <div class="name">
                        <span>{{ employer.name }}</span>
                    </div>
                </div>
                <div class="contact-status">
                    <span class="status">
                        <span class="site">{{ employer.post }}</span>

                    </span>
                </div>
                <div class="contact-contacts">
                    <a :href="employer.mail" class="mail">
                        <div class="inline-svg-icon inline-svg-icon--mail"></div>
                        <span>{{ employer.mail }}</span>
                    </a>
                    <a :href="employer.phone" class="phone">
                        <div class="inline-svg-icon inline-svg-icon--phone"></div>
                        <span>{{ employer.phone }}</span>
                    </a>
                    <span class="adress">
                        <div class="inline-svg-icon inline-svg-icon--location"></div>
                        <span>{{ employer.adress }}</span>
                    </span>
                </div>
            </object>
        </a>
    </div>
</template>

<script>
    import {
        mapGetters,
        mapActions
    } from 'vuex';

    export default {
        data(){
            return {
                employees:null
            }
        },
        methods: mapActions(['fetchEmployees']),
        computed: mapGetters(['currentEmployees']),
        async mounted() {
            this.fetchEmployees();
        }
    }
</script>

<style lang="scss">
    .phonebook-contacts {
        margin-top: 18px;
    }

    .contact {
        display: flex;
        align-items: center;
        padding: 24px;
        padding-right: 16px;
        border: 1px solid rgba(48, 69, 79, .16);
        border-radius: 4px;
        box-sizing: border-box;
        text-decoration: none;

        &:not(:last-child) {
            margin-bottom: 10px;
        }
    }

    .contact-avatar {
        width: 88px;
        height: 88px;
        border-radius: 50px;
    }

    .contact-info {
        margin-left: 24px;
        width: 100%;
        max-width: calc(100% - 112px);
        flex-grow: 0;
    }

    .contact-name {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
        max-width: 100%;
        width: 100%;

        .name {
            position: relative;
            margin: 0;
            margin-right: 5px;
            font-size: 16px;
            font-weight: 500;
            color: #30454F;
            display: flex;
            flex: 1;
            overflow-x: hidden;

            span {
                // display: block;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                max-width: calc(100%);
            }
        }
    }

    .contact-status {
        margin-bottom: 10px;

        .status {
            font-size: 14px;
            color: #30454F;
        }

        .position {
            color: rgba(48, 69, 79, .48);
        }
    }

    .contact-contacts {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;

        .mail {
            position: relative;
            padding-left: 30px;
            font-size: 16px;
            color: #30454F;
            text-decoration: none;
            min-width: 65%;
            display: flex;
            align-items: center;
            margin-bottom: 8px;
            max-width: calc(100%);
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;

            span {
                pointer-events: none;
            }

            .inline-svg-icon {
                position: absolute;
                left: 0;
            }
        }

        .phone {
            position: relative;
            padding-left: 30px;
            font-size: 16px;
            color: #30454F;
            text-decoration: none;
            display: flex;
            align-items: center;
            margin-bottom: 8px;

            .inline-svg-icon {
                position: absolute;
                left: 0;
            }

            span {
                pointer-events: none;
            }
        }

        .adress {
            position: relative;
            padding-left: 30px;
            margin-bottom: 8px;
            display: flex;
            align-items: center;
            font-size: 16px;
            line-height: 20px;
            color: #30454F;

            .inline-svg-icon {
                position: absolute;
                left: 0;
            }
        }
    }
</style>