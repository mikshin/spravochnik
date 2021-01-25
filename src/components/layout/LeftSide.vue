<template>
    <div class="container-wrapper container-wrapper--left">
        <tabs :tabs="tabsItem" />
    </div>
</template>

<script>
    import tabs from "./Tab"

    export default {
        data() {
            return {
                tabsItem: [{
                    id: "1",
                    name: "Юридическая структура",
                    storage: "urStructure"
                }]
                // , {
                //     id: "2",
                //     name: "Функциональная структура",
                //     storage: "funcStructure"
                // }]
            }
        },
        components: {
            tabs
        }
    }
</script>

<style lang="scss">

</style>