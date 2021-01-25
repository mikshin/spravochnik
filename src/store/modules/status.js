export default {
    actions: {
        fetchActivePhonebookItem(ctx,item) {
            ctx.commit('updateActivePhonebookItem',item)
        }
    },
    mutations: {
        updateActivePhonebookItem(state,item){
            state.activePhonebookItem = item
        }
    },
    state: {
        activePhonebookItem: undefined
    },
    getters: {
        activePhonebookItem : state => {
            return state.activePhonebookItem
        }
    }
}