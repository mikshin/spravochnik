export default {
    actions: {
        async fetchParents(ctx, type = "funcStructure") {
            const res = await fetch("http://localhost:3000/" + type);
            const parents = await res.json();

            ctx.commit('updateParents', parents)
        },
        async addChildren(ctx, position) {
            const res = await fetch("http://localhost:3000/children&" + position);
            const children = await res.json();

            ctx.commit('addChildren', {
                children,
                position
            })
        }
    },
    mutations: {
        updateParents(state, parents) {
            state.fStructure = parents
        },
        addChildren(state, {
            children,
            position
        }) {

            let arr = state.fStructure

            arr.forEach(function (item) {
                if (item.id == position) {
                    item.children = children;
                    return;
                }
                if (item.hasChild == true) {
                    searchChild(item, position, children)
                }
            });

        }
    },
    state: {
        fStructure: []
    },
    getters: {
        structure(state) {
            return state.fStructure
        }
    }
}

function searchChild(item, position, children) {
    item.children.forEach(function (forEachItem) {
        if (position == forEachItem.id) {
            forEachItem.children = children;
            return
        } else {
            searchChild(forEachItem, position, children);
            return
        }
    })
}