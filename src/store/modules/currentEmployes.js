export default {
    actions: {
        async fetchEmployees(ctx, id) {
            if (id) {
                const res = await fetch("http://localhost:3000/currentEmployees&" + id);
                const employees = await res.json();

                ctx.commit('updateEmployees', employees)
            }
        }
    },
    mutations: {
        updateEmployees(state, employees) {
            state.currentEmployees = employees
        },
    },
    state: {
        currentEmployees: []
    },
    getters: {
        currentEmployees(state) {
            return state.currentEmployees
        }
    }
}