import Vue from 'vue'
import Vuex from 'vuex'
import status from './modules/status'
import fStructure from './modules/fStructure'
import currentEmployes from './modules/currentEmployes'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        status,
        fStructure,
        currentEmployes
    }
})